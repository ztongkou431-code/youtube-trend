export async function getTrendingVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  let allVideos = [];
  let nextPageToken = "";

  for (let i = 0; i < 4; i++) {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=JP&maxResults=25&pageToken=${nextPageToken}&key=${API_KEY}`
    );

    const data = await res.json();

    // 🔥 これ重要（必ずある）
    allVideos = [...allVideos, ...data.items];

    nextPageToken = data.nextPageToken;

    if (!nextPageToken) break;
  }

  return allVideos;
}
