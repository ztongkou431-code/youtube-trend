export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>動画ページ</h1>

      {/* ✅ 正しい埋め込み */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${params.id}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* ✅ 必ず用意（埋め込み不可対策） */}
      <p style={{ marginTop: "20px" }}>
        <a
          href={`https://www.youtube.com/watch?v=${params.id}`}
          target="_blank"
        >
          ▶ YouTubeで見る
        </a>
      </p>
    </main>
  );
}