type TKeywords = {
  id: number;
  name: string;
};

interface IMetadata {
  title: string;
  description: string;
  keywords: TKeywords[];
}

export const Metadata = ({ title, description, keywords }: IMetadata) => {
  const newKeywords = keywords.map((key) => key.name).join(",");

  return (
    <>
      <title>{title + " | MovieDB"}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={newKeywords} />
    </>
  );
};
