import { Cards, Slider } from "@/components/shared";

export default function Home() {
  return (
    <section className="primary">
      <Slider />
      <Cards
        title="В тренде за сегодня"
        query="trending/all/day?language=ru"
        hiddenMore={true}
      />
      <Cards
        title="В тренде за неделю"
        query="trending/all/week?language=ru"
        hiddenMore={true}
      />
    </section>
  );
}
