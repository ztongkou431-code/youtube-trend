import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main style={{ padding: "20px" }}>
      <h1>🔥 YouTubeトレンド</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {videos.map((video: any, index: number) => (
          <div
            key={video.id}
            style={{
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <p>{index + 1}位</p>

            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                width="100%"
              />

              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}