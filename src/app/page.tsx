"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaHeart, } from "react-icons/fa";
import { BsEnvelopeHeart } from "react-icons/bs";
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

  // if yes
  function handleYesClick() {
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 4000);
  }

  // if no
  function handleNoClick() {
    setShowGoodbye(true);
    document.body.classList.add("melt");
    setTimeout(() => {
      setDestroyed(true);
    }, 6000);
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
      <section id="home" className="h-dvh flex flex-col items-center justify-center p-6 pt-10 sm:pt-20 text-center">
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
        <div className="relative">
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => setShowLoveNote(true)}
              className="p-3 rounded-full bg-pink-200 hover:bg-pink-300 transition shadow"
              aria-label="open secret message"
            >
              <BsEnvelopeHeart className="text-white" size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Sticky Note Style Love Note */}
      {showLoveNote && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="w-64 h-64 bg-pink-200 text-pink-800 rounded-lg shadow-lg p-8 flex items-center justify-center">
            {showHeart ? (
              <div className="flex flex-col items-center justify-center h-full text-center animate-pop">
                <FaHeart size={50} className="text-gray-600 mb-4" />
                <p className="text-lg font-semibold text-pink-800">{`you're the one`}</p>
              </div>
            ) : showGoodbye ? (
              <div className="flex flex-col items-center justify-center h-full text-center animate-pop">
                <p className="text-5xl mb-2">:(</p>
                <p className="text-9xl font-semibold text-red-600">{`goodbye`}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold animate-bounce mb-4">{`do you like me?`}</h2>
                <div className="flex gap-4">
                  <button
                    onClick={handleYesClick}
                    className="bg-teal-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow transition"
                  >
                    {'yes'}
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-orange-300 hover:bg-red-500 text-white px-6 py-2 rounded-full shadow transition"
                  >
                    {'no'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}