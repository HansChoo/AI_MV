import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
// Footer removed

const App = () => {
  const handleConsultClick = () => {
      if (window.confirm("카카오톡 채널로 이동하여 무료 상담을 진행합니다.")) {
          window.location.href = "http://pf.kakao.com/_PKavxd/chat";
      }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-hema-purple selection:text-white">
      {/* Header Removed as requested */}
      <main>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        
        {/* Bottom CTA */}
        <section className="bg-hero-gradient py-20 md:py-24 text-center text-white relative overflow-hidden">
            <div className="container-custom relative z-10 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight break-keep">
                    아직 고민되시나요?<br/>
                    전문 매니저가 도와드릴게요.
                </h2>
                <p className="text-base md:text-lg opacity-90 mb-10 max-w-xl mx-auto leading-relaxed break-keep">
                    내 음악에 딱 맞는 스타일 추천부터<br className="md:hidden" /> 견적 산출까지,<br className="hidden md:block"/>
                    부담 없이 1:1로 물어보세요.
                </p>
                <button 
                    onClick={handleConsultClick}
                    className="bg-hema-mint text-hema-dark px-10 py-5 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform shadow-xl cursor-pointer break-keep"
                >
                    카카오톡 무료 상담하기
                </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
        </section>
      </main>
      {/* Footer component removed */}
    </div>
  );
};

export default App;