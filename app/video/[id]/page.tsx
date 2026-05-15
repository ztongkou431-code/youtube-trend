export default async function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  console.log(data); // デバッグ

  if (!data.items || data.items.length === 0) {
    return (
      <main>
        <h1>動画が見つかりません</h1>
        <p>ID: {params.id}</p>
      </main>
    );
  }

  const video = data.items[0];

  return (
    <main>
      <h1>{video.snippet.title}</h1>

      <img src={video.snippet.thumbnails.medium.url} />

      <p>{video.snippet.description}</p>
    </main>
  );
}