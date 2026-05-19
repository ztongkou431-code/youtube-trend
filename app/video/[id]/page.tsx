"use client";

import { useParams } from "next/navigation";

export default function VideoPage() {
  const params = useParams();
  const videoId = params?.id;

  console.log("videoId:", videoId);

  // ✅ IDがないとき
  if (!videoId) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>動画IDがありません</h1>
        <p>URLを確認してください</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>IDは {videoId}</h1>

      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      />

      <br />

      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
      >
        ▶ YouTubeで見る
      </a>
    </div>
  );
}