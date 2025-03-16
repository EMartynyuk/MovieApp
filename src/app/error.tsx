"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="primary">
      <h1 className="text-lg text-white mb-2">Произошла ошибка!</h1>
      <button
        className="text-sm p-2 bg-[var(--main-color)] text-white rounded-xs"
        onClick={reset}
      >
        Попробовать еще раз
      </button>
    </section>
  );
}
