import React from 'react';
import { PlayCircle } from 'lucide-react';

const projects = [
  {
    title: "City Night",
    artist: "Artist A",
    tag: "City Pop",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    title: "Dreamer",
    artist: "Band B",
    tag: "Ballad",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    title: "Cyber World",
    artist: "DJ Code",
    tag: "Hip-hop",
    image: "https://picsum.photos/600/400?random=12"
  },
  {
    title: "Spring Day",
    artist: "Singer C",
    tag: "K-Pop",
    image: "https://picsum.photos/600/400?random=13"
  }
];

const Gallery = () => {
  return (
    <section id="showcase" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">포트폴리오</h2>
            <p className="text-gray-500">헤마스튜디오와 함께한 아티스트들의 작품입니다.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-soft mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle size={64} className="text-white drop-shadow-lg scale-90 group-hover:scale-100 transition-transform" />
                  </div>
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.artist}</p>
                </div>
                <span className="text-xs font-medium text-hema-blue bg-blue-50 px-2 py-1 rounded">
                    {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                더 많은 포트폴리오 보기
             </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;