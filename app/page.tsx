import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTubeトレンド</h1>

      <div>
        {videos.map((video: any) => (
          <div key={video.id} style={{ marginBottom: "10px" }}>
            <Link href={`/video/${video.id}`}>
              {video.snippet.title}
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ ページ2 */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/page/2">次へ →</Link>
      </div>
    </main>
  );
}
``