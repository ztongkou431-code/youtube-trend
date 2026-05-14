import Link from "next/link";
import { getTrendingVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getTrendingVideos();

  return (
    <main>
      <h1>YouTubeトレンド</h1>

      <div>
        {videos.map((video: any) => (
          <div key={video.id}>
            <Link href={`/video/${video.id}`}>
              <div>
                <img src={video.snippet.thumbnails.medium.url} />

                <p>{video.snippet.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
``