import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTubeトレンド</h1>

      {videos.map((video: any) => (
        <div key={video.id}>
          <Link href={`/video/${video.id}`}>
            <p>{video.snippet.title}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
``