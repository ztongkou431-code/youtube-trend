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
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
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

      {/* 次のページリンク */}
      <Link href="/page/2">次へ →</Link>
    </main>
  );
}