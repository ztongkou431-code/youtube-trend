export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // ✅ 動画情報取得
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const video = data.items?.[0];

  if (!video) {
    return <p>動画が見つかりません</p>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{video.snippet.title}</h1>

      {/* ✅ 動画を直接表示（これが完成） */}
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${params.id}`}
        title="YouTube video"
      />

      <p style={{ marginTop: "20px" }}>
        {video.snippet.description}
      </p>
    </main>
  );
}
