"use client";

import { useParams } from "next/navigation";
import { createHref } from "@/utils/createHref";
import { useFetchPerson } from "@/hooks/useFetchPerson";
import { Loader, Metadata, Cards } from "..";

export const PersonWrapper = () => {
  const { id }: { id: string } = useParams();
  const { data, isLoading, error } = useFetchPerson(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error">Ошибка</p>;
  }

  return (
    <>
      <Metadata
        title={data.name}
        description={data.biography}
        keywords={Object.values(data.also_known_as)}
      />
      <div className="person">
        <div className="person__top">
          <div className="person__media">
            <img src={createHref(data.profile_path, "person")} alt="Person" />
          </div>
          <div className="person__top-content">
            <h2 className="person__name">{data.name}</h2>
            <p className="person__birthday">{data.birthday}</p>
            <p className="person__description">{data.biography}</p>
          </div>
        </div>
      </div>

      <Cards title="Фильмы" query={`person/${id}/movie_credits?language=ru`} />
      <Cards title="Сериалы" query={`person/${id}/tv_credits?language=ru`} />
    </>
  );
};
