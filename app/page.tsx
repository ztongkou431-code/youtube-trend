import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンドランキング</h1>

      <div>
        {videos.map((video: any, index: number) => (
          <div key={video.id}>
            <h2>{index + 1}位</h2>

            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}>
              
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
              />

              <p>{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

