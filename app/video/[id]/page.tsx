import { getTrendingVideos } from "../../../lib/youtube";

export default async function VideoPage({ params }: any) {
  const videos = await getTrendingVideos();
  const video = videos.find((v: any) => v.id === params.id);

  if (!video) return <p>動画が見つかりません</p>;

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
        rel="noopener noreferrer"
      >
        ▶ YouTubeで見る
      </a>
    </main>
  );
}
``