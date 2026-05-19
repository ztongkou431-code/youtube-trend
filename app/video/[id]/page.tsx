"use client";

import { useParams } from "next/navigation";

export default function VideoPage() {
  const params = useParams();
  const videoId = params?.id;

  if (!videoId) {
    return <div className="p-6 text-center">動画が見つかりません</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-xl font-bold mb-4">YouTube動画</h1>

        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          target="_blank"
        >
          ▶ YouTubeで開く
        </a>

      </div>
    </div>
  );
}