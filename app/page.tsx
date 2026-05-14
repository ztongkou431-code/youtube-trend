import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();
  const firstPage = videos.slice(0, 50);

  return (
    <main>
      <h1>🔥 YouTubeトレンドランキング TOP100</h1>

      <div className="grid">
        {firstPage.map((video: any, index: number) => (
          <div key={video.id}>
            <p>{index + 1}位</p>

            {/* ✅ ここ重要：IDをURLに入れてる */}
            <Link href={`/video/${video.id}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />

              <p>{video.snippet.title}</p>

              <p>
                この動画では「{video.snippet.title}」について紹介されています。
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* ページ2 */}
      <Link href="/page/2">次へ →</Link>
    </main>
  );
}