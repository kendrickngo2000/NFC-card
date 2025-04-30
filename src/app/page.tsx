import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";
import HamburgerMenu from "../../components/hamburgerMenu";
import { videos } from "../../data/videos";
import { projects } from "../../data/projects";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <HamburgerMenu />

      {/* Hero/Profile section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 pt-20 text-center">
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

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="flex flex-col items-center">
            <Link href="https://github.com/kendrickngo2000" target="_blank" className="text-gray-700 hover:text-black">
              <FaGithub size={30} />
            </Link>
            <span className="text-sm text-gray-700 mt-2">github</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="https://linkedin.com/in/kendrick-ngo-340107357" target="_blank" className="text-gray-700 hover:text-black">
              <FaLinkedin size={30} />
            </Link>
            <span className="text-sm text-gray-700 mt-2">linkedin</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="https://instagram.com/notkendrickngo/" target="_blank" className="text-gray-700 hover:text-black">
              <FaInstagram size={30} />
            </Link>
            <span className="text-sm text-gray-700 mt-2">insta</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/resume.pdf" target="_blank" className="text-gray-700 hover:text-black">
              <FaFileAlt size={30} />
            </Link>
            <span className="text-sm text-gray-700 mt-2">resume</span>
          </div>
        </div>

        {/* Save Contact Button */}
        <div className="flex justify-center mt-6">
          <a
            href="/kendrick.vcf"
            download
            className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-500 transition"
          >
            save contact
          </a>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">videos</h1>
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
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{video.date}</p>
                <p className="text-gray-600 mt-2">{video.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.name} className="bg-gray-50 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                view on github
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Posts</h2>
        <p className="text-gray-600 text-center max-w-xl">My thoughts, ideas, or lessons learned in tech and life.</p>
        {/* Replace with blog post previews */}
        <div className="mt-6 w-full h-60 bg-gray-200 rounded-lg"></div>
      </section>
    </div>
  );
}
