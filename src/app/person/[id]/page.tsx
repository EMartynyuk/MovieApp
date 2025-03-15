import { PersonWrapper } from "@/components/shared";
import { Metadata } from "next";

export const generateStaticParams = () => [{ id: "1" }];

export const metadata: Metadata = {
  title: null,
  description: null,
};

export default function PagePerson() {
  return (
    <section className="primary">
      <PersonWrapper />
    </section>
  );
}
