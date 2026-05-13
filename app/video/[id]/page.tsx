export default async function VideoPage({ params }: any) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`
  );

  const data = await res.json();

  if (!data.items || data.items.length === 0) {
    return <p>動画が見つかりません</p>;
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
        現在YouTubeで話題の人気動画です。
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