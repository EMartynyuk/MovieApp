"use client";

import { useParams } from "next/navigation";
import { useFetchSingle } from "@/hooks/useFetchSingleMedia";

import {
  Loader,
  Metadata,
  Cards,
  Author,
  Controls,
  Description,
  Genres,
  MainInformation,
  Stars,
  Trailer,
} from "..";

export const SingleWrapper = ({ type }: { type: string }) => {
  const { id }: { id: string } = useParams();

  const [
    { data: singleData, isLoading: singleIsLoading, error: singleError },
    {
      data: singleCreditsData,
      isLoading: singleCreditsIsLoading,
      error: singleCreditsError,
    },
    {
      data: singleTrailerData,
      isLoading: singleTrailerIsLoading,
      error: singleTrailerError,
    },
  ] = useFetchSingle(id, type);

  if (singleIsLoading || singleCreditsIsLoading || singleTrailerIsLoading) {
    return <Loader />;
  }

  if (singleError || singleCreditsError || singleTrailerError) {
    return <p className="error">Ошибка</p>;
  }

  return (
    <>
      <Metadata
        title={singleData.title || singleData.name}
        description={singleData.overview}
        keywords={singleData.genres}
      />
      <div className="film">
        <Trailer
          backdrop_path={singleData.backdrop_path}
          dataTrailer={singleTrailerData.results}
        />

        <div className="information">
          <div className="information__content">
            <MainInformation data={singleData} />
            <Description text={singleData.overview} />
            <Genres genres={singleData.genres} />

            {!singleData?.episode_run_time && (
              <>
                <Author crew={singleCreditsData.crew} title="Режиссер" />
                <Author crew={singleCreditsData.crew} title="Сценарий" />
              </>
            )}

            <Stars cast={singleCreditsData.cast} />
            <Cards
              title="Рекомендации"
              query={`${type}/${id}/recommendations?language=ru`}
            />
          </div>
          <Controls singleData={singleData} />
        </div>
      </div>
    </>
  );
};
