import type { Genre } from "./single.types";

export const Genres = ({ genres }: { genres: Genre[] }) => {
  return (
    <ul className="information__content-tags">
      {genres.map(({ name }: Genre) => (
        <li className="information__content-tag" key={name}>
          <span className="information__content-tag-link">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
};
