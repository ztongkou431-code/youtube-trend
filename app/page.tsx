import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンド</h1>

      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            {video.snippet.title}
          </li>
        ))}
      </ul>
    </main>
  );
}