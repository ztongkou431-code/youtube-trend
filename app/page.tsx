import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>🔥 YouTubeトレンドランキング</h1>

      <div>
        {videos.map((video, index) => (
          <div key={video.id}>

            {/* 順位 */}
            <h2>{index + 1}位</h2>

            {/* リンク */}
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
            >
              {/* サムネ */}
              <img src={video.snippet.thumbnails.medium.url} />

              {/* タイトル */}
              <p>{video.snippet.title}</p>
            </a>

          </div>
        ))}
      </div>
    </main>
  );
}
