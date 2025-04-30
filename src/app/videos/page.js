import Link from "next/link";
import Image from "next/image";
import { videos } from "@/data/Videos";

export default function Videos() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video) => (
          <Link
            key={video.title}
            href={video.googleDriveLink}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div className="bg-gray-50 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
                {video.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {video.date}
              </p>
              <p className="text-gray-600 mt-2">
                {video.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}