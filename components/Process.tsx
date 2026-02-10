import React from 'react';
import { FileAudio, PenTool, Video, CheckSquare, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: "STEP 01",
    title: "신청서 작성",
    desc: "음원 파일, 가사, 레퍼런스 제출",
    icon: FileAudio,
    color: "bg-purple-100 text-purple-600"
  },
  {
    step: "STEP 02",
    title: "기획안 제안",
    desc: "24시간 내 캐릭터/구성안 전달",
    icon: PenTool,
    color: "bg-blue-100 text-blue-600"
  },
  {
    step: "STEP 03",
    title: "영상 제작",
    desc: "AI 생성 및 전문 편집 진행",
    icon: Video,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    step: "STEP 04",
    title: "최종 납품",
    desc: "피드백 반영 후 고화질 파일 전달",
    icon: CheckSquare,
    color: "bg-teal-100 text-teal-600"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-hema-grey">
      <div className="container-custom">
        <div className="mb-10 md:mb-16 text-center">
            <span className="text-hema-purple font-bold tracking-wider text-xs md:text-sm uppercase mb-2 block">Work Process</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 break-keep">
                복잡한 과정은 <span className="text-hema-purple">NO!</span><br/>
                쉽고 빠른 제작 프로세스
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {steps.map((item, index) => (
                <div key={index} className="relative group">
                    {/* Connecting Arrow (Desktop only) */}
                    {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300">
                            <ArrowRight size={24} />
                        </div>
                    )}
                    
                    <div className="bg-white p-5 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2">
                        <span className="text-[10px] md:text-xs font-bold text-gray-400 mb-2 md:mb-4 tracking-widest">{item.step}</span>
                        <div className={`w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-2xl flex items-center justify-center mb-3 md:mb-6`}>
                            <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 break-keep">{item.title}</h3>
                        <p className="text-gray-500 text-xs md:text-sm break-keep">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;