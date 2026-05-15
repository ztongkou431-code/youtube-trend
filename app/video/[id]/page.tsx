export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  return (
    <main style={{ padding: "20px" }}>
      <h1>IDは {id}</h1>

      {/* ✅ iframe */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* ✅ ここが重要（ちゃんと href を書く） */}
      <p style={{ marginTop: "20px" }}>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ YouTubeで見る
        </a>
      </p>
    </main>
  );
}
