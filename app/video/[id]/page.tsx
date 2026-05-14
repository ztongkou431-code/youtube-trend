import { notFound } from "next/navigation";

export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  if (!id) {
    return <p>IDが取得できていません</p>;
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  if (!data.items || data.items.length === 0) {
    notFound();
  }

  const video = data.items[0];

  return (
    <main>
      <h1>{video.snippet.title}</h1>

      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

      <p>{video.snippet.description}</p>

      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
      >
        ▶ YouTubeで見る
      </a>
    </main>
  );
}
