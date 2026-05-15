export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>IDは {params.id}</h1>
    </main>
  );
}
``