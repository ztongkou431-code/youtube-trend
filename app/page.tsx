import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンド</h1>

      <ul>
        {videos.map((video: any, index: number) => (
          <li key={video.id}>
            <Link href={`/video/${video.id}`}>
              {index + 1}位：{video.snippet.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* 👉 ページ2復活 */}
      <Link href="/page/2">次へ →</Link>
    </main>
  );
}