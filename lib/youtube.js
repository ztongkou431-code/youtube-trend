export async function getTrendingVideos() {
  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=JP&maxResults=10&key=AIzaSyDecJmpOX9uwAyeKCmbtLk8-HjyPCVT6y8"
  );

  const data = await res.json();
  return data.items;
}

