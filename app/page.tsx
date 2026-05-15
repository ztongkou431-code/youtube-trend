import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTubeトレンド</h1>

      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            {/* ✅ ここ修正 */}
            <a href={`/video/${video.id}`}>
              {video.snippet.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
``