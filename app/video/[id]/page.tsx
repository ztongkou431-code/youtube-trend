export default async function VideoPage({ params }: any) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  // ✅ APIで動画取得（ここが最重要）
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  // ✅ データなければ表示
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

      <p>
        この動画では「{video.snippet.title}」について詳しく紹介されています。
      </p>

      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
      >
        ▶ YouTubeで見る
      </a>
    </main>
  );
}
``