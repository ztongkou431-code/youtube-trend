"use client";

import { useParams } from "next/navigation";

export default function VideoPage() {
  const params = useParams();

  return (
    <main>
      <h1>IDは {params?.id}</h1>
    </main>
  );
}
