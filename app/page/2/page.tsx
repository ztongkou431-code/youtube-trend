import Link from "next/link";
import { getTrendingVideos } from "../../../lib/youtube";

export default async function Page2() {
  const videos = await getTrendingVideos();
  const second = videos.slice(50, 100);

  return (
    <main>
      <h1>🔥 YouTubeトレンド（続き）</h1>

      <ul>
        {second.map((video: any, index: number) => (
          <li key={video.id}>
            <Link href={`/video/${video.id}`}>
              {index + 51}位：{video.snippet.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/">← 戻る</Link>
    </main>
  );
}
``