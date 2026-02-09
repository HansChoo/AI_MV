import React from 'react';

const styles = [
  {
    name: "Webtoon / Animation",
    desc: "1020 세대가 선호하는 작화",
    image: "https://picsum.photos/400/500?random=1"
  },
  {
    name: "Cinematic Live Action",
    desc: "실제 촬영 같은 압도적 현실감",
    image: "https://picsum.photos/400/500?random=2"
  },
  {
    name: "3D Motion Art",
    desc: "트렌디하고 힙한 무드",
    image: "https://picsum.photos/400/500?random=3"
  },
  {
    name: "Oil Painting Illustration",
    desc: "감성적인 발라드에 최적화",
    image: "https://picsum.photos/400/500?random=4"
  }
];

const Styles = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">원하는 모든 스타일 구현</h2>
                <p className="text-gray-500">장르에 맞춰 가장 효과적인 비주얼을 제안해드립니다.</p>
            </div>
            <a href="#" className="text-hema-purple font-bold hover:underline mt-4 md:mt-0 text-sm">더 많은 레퍼런스 보기</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {styles.map((style, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4]">
              <img 
                src={style.image} 
                alt={style.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{style.name}</h3>
                <p className="text-gray-300 text-xs">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;