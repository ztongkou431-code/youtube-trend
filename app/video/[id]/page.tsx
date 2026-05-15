export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  // ✅ ここログ出すと確実
  console.log("ID:", params.id);

  return (
    <main>
      <h1>IDは {params.id}</h1>
    </main>
  );
}
``