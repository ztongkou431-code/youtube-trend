export default function VideoPage({ params }: any) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>IDは {params.id}</h1>

      {/* ✅ 動画埋め込み */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${params.id}`}
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </main>
  );
}
