import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../../components/hamburgerMenu";
import { videos } from "../../data/videos";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HamburgerMenu />

      {/* Hero/Profile section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 pt-20 text-center">
        <Image
          src="/default.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Kendrick Ngo</h1>
        <p className="text-base text-gray-600 mt-2">
          i kinda code, film cool videos, eat, sleep, gym, work
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="https://github.com/kendrickngo2000" target="_blank" className="text-gray-700 hover:text-black">
            Github
          </Link>
          <Link href="https://linkedin.com/in/kendrick-ngo-340107357" target="_blank" className="text-gray-700 hover:text-black">
            LinkedIn
          </Link>
          <Link href="https://instagram.com/notkendrickngo/" target="_blank" className="text-gray-700 hover:text-black">
            Instagram
          </Link>
          <Link href="/resume.pdf" target="_blank" className="text-gray-700 hover:text-black">
            Resume
          </Link>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/kendrick.vcf"
            download
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 transition"
          >
            Save Contact
          </a>
        </div>
      </section>

      {/* Videos Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Videos</h2>
        <p className="text-gray-600 text-center max-w-xl">Here’s where I share creative edits, short films, or vlogs I’ve made recently.</p>
        {/* Replace with dynamic video thumbnails or embeds */}
        <div className="mt-6 w-full h-60 bg-gray-200 rounded-lg"></div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-600 text-center max-w-xl">Some of the stuff I’ve coded — from apps and tools to experiments and side hustles.</p>
        {/* Replace with dynamic project cards or links */}
        <div className="mt-6 w-full h-60 bg-gray-200 rounded-lg"></div>
      </section>

      {/* Posts Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Posts</h2>
        <p className="text-gray-600 text-center max-w-xl">My thoughts, ideas, or lessons learned in tech and life.</p>
        {/* Replace with blog post previews */}
        <div className="mt-6 w-full h-60 bg-gray-200 rounded-lg"></div>
      </section>
    </div>
  );
}
