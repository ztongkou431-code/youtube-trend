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

            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>

      {/* 戻るボタン */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/">← 戻る</Link>
      </div>
    </main>
  );
}