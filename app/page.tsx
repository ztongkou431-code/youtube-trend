import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();
  const firstPage = videos.slice(0, 50);

  return (
    <main>
      <h1>🔥 YouTubeトレンド</h1>

      <div className="grid">
        {firstPage.map((video: any, index: number) => (
          <div key={video.id}>
            <p>{index + 1}位</p>

            <Link href={`/video/${video.id}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />

              <p>{video.snippet.title}</p>

              <p>
                この動画では「{video.snippet.title}」について紹介されています。
                現在YouTubeで人気のトレンド動画です。
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* 次へ */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/page/2">次へ →</Link>
      </div>
    </main>
  );
}
``