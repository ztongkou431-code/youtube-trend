import Link from "next/link";
import { getTrendingVideos } from "../../../lib/youtube";

export default async function Page2() {
  const videos = await getTrendingVideos();
  const secondPage = videos.slice(50, 100);

  return (
    <main>
      <h1>🔥 YouTubeトレンド（続き）</h1>

      <div className="grid">
        {secondPage.map((video: any, index: number) => (
          <div key={video.id}>
            <p>{index + 51}位</p>

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

      {/* 戻る */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/">← 戻る</Link>
      </div>
    </main>
  );
}
``