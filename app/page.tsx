import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTubeトレンド</h1>

      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            {/* ✅ これが正しいリンク */}
            <Link href={`/video/${video.id}`}>
              {video.snippet.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
``