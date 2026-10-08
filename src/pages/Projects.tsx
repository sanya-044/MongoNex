import React from "react";

const projects = [
  {
    title: "Fashion Oasis",
    category: "Full-Stack E-Commerce Platform",
    description: "Equipped with user authentication, secure payment gateway integration, database management, and administrative control panels.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Real-Time Chat Application",
    category: "MERN + Socket.IO Platform",
    description: "Real-time communication app featuring instant messaging, JWT authentication, and MongoDB storage.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Campus Laundry Platform",
    category: "Full-Stack Management System",
    description: "Collaborative web platform featuring merged MongoDB database collections, custom API routing, and streamlined user workflows.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-32 pb-20 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.35em] text-neutral-400 mb-4">Portfolio</p>
      <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16">
        Featured Agency Projects
      </h1>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-neutral-800 p-6 sm:p-8 bg-neutral-950">
            <div className="h-64 sm:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 border border-neutral-800 px-3 py-1">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide">{project.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}