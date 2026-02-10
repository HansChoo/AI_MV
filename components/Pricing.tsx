import React, { useState, useEffect } from 'react';
import { Check, Mic, Sparkles, Clapperboard, PlayCircle, X } from 'lucide-react';

const products = [
  {
    name: "싱잉 캐릭터 타입",
    price: "350,000원",
    description: "자연스러운 립싱크 퍼포먼스로\n내 음악에 맞춰 노래하는 캐릭터",
    features: [
        "곡 전체 길이 (4분 이내)",
        "AI 오디오 분석 캐릭터 립싱크",
        "원하는 화풍의 캐릭터 생성",
        "숏폼 세로 버전(9:16) 리사이징 제공",
        "수정 2회 포함"
    ],
    videoId: "U85zFJSEV8A",
    icon: Mic,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
    hoverColor: "group-hover:text-pink-500"
  },
  {
    name: "2D 시네마 타입",
    price: "750,000원",
    description: "한 편의 애니메이션처럼 흐르는\n감성 스토리텔링 비주얼",
    features: [
        "곡 전체 길이 (4분 이내)",
        "가사 기반 감성 스토리 기획",
        "작화 스타일 선택",
        "숏폼 세로 버전(9:16) 리사이징 제공",
        "수정 2회 포함"
    ],
    videoId: "bYlf_xD_cwk",
    icon: Sparkles,
    iconColor: "text-sky-500",
    bgColor: "bg-sky-100",
    hoverColor: "group-hover:text-sky-500"
  },
  {
    name: "실사 시네마 타입",
    price: "950,000원",
    description: "촬영 없이 구현하는\n초현실적 분위기의 실사 비주얼",
    features: [
        "곡 전체 길이 (4분 이내)",
        "영화 같은 시네마틱 연출 기획",
        "가상 배우 및 아티스트 실사 구현",
        "제한없는 로케이션 구현",
        "숏폼 세로 버전(9:16) 리사이징 제공",
        "수정 2회 포함"
    ],
    videoId: "XhlFsAny4lg",
    icon: Clapperboard,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
    hoverColor: "group-hover:text-indigo-600"
  }
];

const Pricing = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideo]);

  const handleSelectPlan = async (planName: string) => {
    if (!window.confirm(`'${planName}' 상담을 위해 카카오톡 채널로 이동합니다.\n확인 버튼을 누르면 상품명이 클립보드에 복사됩니다.`)) {
        return;
    }
    try {
        await navigator.clipboard.writeText(`${planName} 문의합니다.`);
    } catch (err) {
        console.error('Clipboard copy failed:', err);
    }
    window.location.href = 'http://pf.kakao.com/_PKavxd/chat';
  };

  return (
    <section id="pricing" className="py-24 bg-white border-t border-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 break-keep">포트폴리오 & 가격 안내</h2>
            <p className="text-gray-500 break-keep">원하는 스타일의 영상을 확인하고, <br className="md:hidden" />합리적인 가격에 만나보세요.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
                <div key={index} className="relative rounded-3xl flex flex-col bg-white border border-gray-100 shadow-xl hover:border-hema-purple transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden group">
                    
                    {/* Video Thumbnail Area */}
                    <div 
                        className="relative w-full aspect-video bg-gray-100 cursor-pointer overflow-hidden"
                        onClick={() => setActiveVideo(product.videoId)}
                    >
                        <img 
                            src={`https://img.youtube.com/vi/${product.videoId}/maxresdefault.jpg`} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                             <PlayCircle size={48} className="text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                            미리보기
                        </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                        {/* Title & Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2.5 rounded-xl transition-colors ${product.bgColor}`}>
                                <product.icon size={24} className={product.iconColor} />
                            </div>
                            <h3 className={`text-xl font-black text-gray-900 transition-colors ${product.hoverColor} break-keep`}>
                                {product.name}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mb-6 min-h-[48px] whitespace-pre-line leading-relaxed break-keep">
                            {product.description}
                        </p>

                        {/* Price */}
                        <div className="text-3xl font-bold text-gray-900 mb-8">
                            {product.price}
                        </div>
                        
                        {/* Features */}
                        <ul className="space-y-4 mb-8 flex-1">
                            {product.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-900">
                                    <Check size={18} className="text-hema-purple shrink-0 mt-0.5" />
                                    <span className="leading-tight break-keep">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        
                        {/* CTA Button */}
                        <button 
                            onClick={() => handleSelectPlan(product.name)}
                            className="w-full py-4 rounded-xl font-bold transition-all bg-hema-purple text-white hover:bg-violet-700 shadow-lg cursor-pointer active:scale-95"
                        >
                            선택하기
                        </button>
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

export default Pricing;