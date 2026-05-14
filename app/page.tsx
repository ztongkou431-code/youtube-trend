import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTube最新トレンドtop100</h1>

      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            <Link href={`/video/${video.id}`}>
              {video.snippet.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* ✅ ページ2リンク */}
      <Link href="/page/2">次へ →</Link>
    </main>
  );
}
