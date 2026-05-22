type StructuredDataScriptsProps = {
  data: Record<string, unknown>[];
};

export function StructuredDataScripts({ data }: StructuredDataScriptsProps) {
  return (
    <>
      {data.map((entry, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
