export default function VideoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>IDは {params.id}</h1>

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${params.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <p>
        <a
          href={`https://www.youtube.com/watch?v=${params.id}`}
          target="_blank"
        >
          ▶ YouTubeで見る
        </a>
      </p>
    </main>
  );
}