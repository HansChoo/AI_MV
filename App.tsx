import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Styles from './components/Styles';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-hema-purple selection:text-white">
      {/* Header Removed as requested */}
      <main>
        <Hero />
        <Stats />
        <Features />
        <Styles />
        <Comparison />
        <Gallery />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        
        {/* Bottom CTA */}
        <section className="bg-hero-gradient py-24 text-center text-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <h2 className="text-4xl font-bold mb-6">
                    이제 당신의 음악을<br/>보여줄 차례입니다.
                </h2>
                <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
                    망설이지 마세요. 지금 상담 신청하시면<br/> 
                    캐릭터 시안 3종을 무료로 받아보실 수 있습니다.
                </p>
                <button className="bg-hema-mint text-hema-dark px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                    무료 시안 신청하기
                </button>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;