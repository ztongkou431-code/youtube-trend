import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main style={{ padding: "20px" }}>
      <h1>🔥 YouTubeトレンド</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {videos.map((video: any, index: number) => (
          <div
            key={video.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p>{index + 1}位</p>

            {/* ✅ 正しいリンク（完全に動く） */}
            <Link href={`/video/${video.id}`}>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />

              <p>{video.snippet.title}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ ページ2リンク復活 */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/page/2">次へ →</Link>
      </div>
    </main>
  );
}