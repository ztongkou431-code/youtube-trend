import Link from "next/link";
import { getTrendingVideos } from "../../../lib/youtube";

export default async function Page2() {
  const videos = await getTrendingVideos();
  const second = videos.slice(50, 100);

  return (
    <main style={{ padding: "20px" }}>
      <h1>🔥 YouTubeトレンド（続き）</h1>

      {second.map((video: any, index: number) => (
        <div key={video.id}>
          <Link href={`/video/${video.id}`}>
            {index + 51}位：{video.snippet.title}
          </Link>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <Link href="/">← 戻る</Link>
      </div>
    </main>
  );
}
