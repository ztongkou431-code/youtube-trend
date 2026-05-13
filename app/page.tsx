import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンド</h1>

      <ul>
        {videos.map((video: any, index: number) => (
          <li key={video.id}>
            <p>{index + 1}位</p>

            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width={320}
              />

              <p>{video.snippet.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}