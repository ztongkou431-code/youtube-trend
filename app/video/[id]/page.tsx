export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // ✅ ID確認（これ超重要）
  console.log("params.id:", params.id);

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  console.log("data:", data);

  if (!params.id) {
    return <p>IDが取得できていません</p>;
  }

  if (!data.items || data.items.length === 0) {
    return (
      <main>
        <h1>動画が見つかりません</h1>
        <p>ID: {params.id}</p>
      </main>
    );
  }

  const video = data.items[0];

  return (
    <main>
      <h1>{video.snippet.title}</h1>

      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <p>{video.snippet.description}</p>

      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
      >
        ▶ YouTubeで見る
      </a>
    </main>
  );
}