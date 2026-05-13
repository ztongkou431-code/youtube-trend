import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main style={{ padding: "20px" }}>
      <h1>🔥 【2026最新】YouTubeトレンドランキング（日本）</h1>


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
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <p>
最新のYouTube人気動画ランキングを毎日更新しています。
今バズっている動画をチェックできます。
</p>


            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                style={{ width: "100%", borderRadius: "8px" }}
              />

              <p style={{ marginTop: "10px" }}>
                {video.snippet.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
``