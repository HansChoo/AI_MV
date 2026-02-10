import React, { useState, useEffect } from 'react';
import { PlayCircle, X } from 'lucide-react';

const projects = [
  {
    title: "실사 시네마 타입",
    videoId: "XhlFsAny4lg",
    image: "https://img.youtube.com/vi/XhlFsAny4lg/maxresdefault.jpg"
  },
  {
    title: "싱잉 캐릭터 타입",
    videoId: "U85zFJSEV8A",
    image: "https://img.youtube.com/vi/U85zFJSEV8A/maxresdefault.jpg"
  },
  {
    title: "2D 시네마 타입",
    videoId: "bYlf_xD_cwk",
    image: "https://img.youtube.com/vi/bYlf_xD_cwk/maxresdefault.jpg"
  }
];

const Gallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideo]);

  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">포트폴리오</h2>
            <p className="text-gray-500">헤마스튜디오와 함께한 아티스트들의 작품입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setActiveVideo(project.videoId)}
              className="group cursor-pointer block"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-soft mb-4 bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle size={64} className="text-white drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                  </div>
              </div>
              <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveVideo(null)}
          >
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideo(null);
                }}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
              >
                <X size={24} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;