"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import HamburgerMenu from "../../components/hamburgerMenu";
import { videos } from "../../data/videos";
import { projects } from "../../data/projects";

// VCARD contact info
function downloadContact() {
  const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:Kendrick Ngo\nTEL;TYPE=CELL:+17146220884\nEND:VCARD`;
  const blob = new Blob([vCard], { type: "text/vcard" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "kendrick.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Home() {
  const [showHeart, setShowHeart] = useState(false);
  const [showGoodbye, setShowGoodbye] = useState(false);
  const [destroyed, setDestroyed] = useState(false);
  const [showLoveNote, setShowLoveNote] = useState(false);

  useEffect(() => {
    if (showHeart) {
      const timeout = setTimeout(() => {
        downloadContact();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showHeart]);

  function handleYesClick() {
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 4000);
  }

  function handleNoClick() {
    setShowGoodbye(true);
    document.body.classList.add("melt");
    setTimeout(() => {
      setDestroyed(true);
    }, 4000);
  }

  if (destroyed) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
        <div className="text-center text-white animate-fade-in">
          <p className="text-5xl mb-4">:(</p>
          <p className="text-2xl font-semibold">goodbye</p>
        </div>
      </div>
    );
  }

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
          {[{
            icon: FaGithub,
            url: "https://github.com/kendrickngo2000",
            label: "github",
          }, {
            icon: FaLinkedin,
            url: "https://linkedin.com/in/kendrick-ngo-340107357",
            label: "linkedin",
          }, {
            icon: FaInstagram,
            url: "https://instagram.com/notkendrickngo/",
            label: "insta",
          }, {
            icon: FaFileAlt,
            url: "/resume.pdf",
            label: "resume",
          }].map(({ icon: Icon, url, label }) => (
            <div key={label} className="flex flex-col items-center">
              <Link href={url} target="_blank" className="text-gray-700 hover:text-black">
                <Icon size={30} />
              </Link>
              <span className="text-sm text-gray-700 mt-2">{label}</span>
            </div>
          ))}
        </div>
        
        {/* Save Contact Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={downloadContact}
            className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-500 transition"
          >
            save contact
          </button>
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
        <p className="text-gray-600 text-center max-w-xl">what do i do with this section?</p>
        <div className="mt-6 w-full h-60 bg-gray-200 rounded-lg"></div>
      </section>

      {/* Secret Love Note Trigger */}
      {!showLoveNote && (
        <div className="flex justify-center items-center my-10">
          <button
            onClick={() => setShowLoveNote(true)}
            className="bg-white border border-pink-300 rounded-full p-4 shadow hover:bg-pink-50 transition flex items-center justify-center"
            aria-label="open secret message"
          >
            <FaEnvelope className="text-pink-300" size={20} style={{ verticalAlign: "middle" }} />
          </button>
        </div>
      )}

      {/* Secret Love Note Section */}
      {showLoveNote && (
        <section className="relative flex flex-col items-center justify-center min-h-[20vh] bg-pink-200 text-center px-4 py-6 rounded-md mx-4 my-6 shadow-lg">
          {showHeart ? (
            <div className="flex flex-col items-center animate-pop">
              <FaHeart size={60} className="text-gray-600" />
              <p className="mt-4 text-xl font-semibold text-pink-700">{`you're the one`}</p>

            </div>
          ) : showGoodbye ? (
            <div className="flex flex-col items-center animate-pop">
              <p className="text-5xl mb-2">:(</p>
              <p className="text-xl font-semibold text-red-600">goodbye</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-semibold text-pink-700 mb-4 animate-bounce">
                do you like me?
              </h2>
              <div className="flex gap-8">
                <button
                  onClick={handleYesClick}
                  className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                >
                  yes
                </button>
                <button
                  onClick={handleNoClick}
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                >
                  no
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}