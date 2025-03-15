import { Notifications, Profile, Search } from "..";

export const Top = () => {
  return (
    <section className="top">
      <Search />

      <Notifications />

      <Profile />
    </section>
  );
};
