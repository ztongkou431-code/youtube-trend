import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンドランキング</h1>

      <p>
        最新のYouTubeトレンド動画をランキング形式で紹介しています。
      </p>

      <div>
        {videos.map((video: any, index: number) => (
          <div key={video.id}>
            <h2>{index + 1}位</h2>

            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />

              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
