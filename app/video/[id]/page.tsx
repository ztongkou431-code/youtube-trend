import { getTrendingVideos } from "../../../lib/youtube";

export default async function VideoPage({ params }: any) {
  const videos = await getTrendingVideos();

  const video = videos.find((v: any) => v.id === params.id);

  if (!video) return <p>動画が見つかりません</p>;

  return (
    <main>
      <h1>{video.snippet.title}</h1>

      <img src={video.snippet.thumbnails.medium.url} />

      <p>{video.snippet.description}</p>
    </main>
  );
}
``