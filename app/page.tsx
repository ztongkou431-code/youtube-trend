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
          <Link key={video.id} href={`/video/${video.id}`}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              <p>{index + 1}位</p>

              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />

              <p>{video.snippet.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link href="/page/2">次へ →</Link>
      </div>
    </main>
  );
}
``