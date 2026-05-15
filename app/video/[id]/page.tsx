export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>動画ページ</h1>

      {/* ✅ iframe（再生できる動画だけ表示） */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${params.id}`}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* ✅ 必ずこれ（完全に安全な導線） */}
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