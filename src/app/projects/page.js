import { projects } from "../../../data/projects";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project) => (
                    <div key={project.name} className="bg-gray-50 p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <Link href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                            view on github
                        </Link> 
                    </div>
                ))}
            </div>
        </div>
    );
} 