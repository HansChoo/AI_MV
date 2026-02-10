import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison = () => {
  return (
    <section className="py-24 bg-hema-grey">
      <div className="container-custom">
        <div className="text-center mb-16">
            <span className="text-hema-purple font-bold text-sm uppercase tracking-wider mb-2 block">Why Hema Studio?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 break-keep">
                왜 헤마스튜디오 인가요?
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bad Case */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-6">
                    <XCircle className="text-gray-400" size={28} />
                    <h3 className="text-xl font-bold text-gray-500">일반 무료 AI 툴</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0"></span>
                        <p className="break-keep">장면마다 캐릭터 얼굴이 계속 바뀜</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0"></span>
                        <p className="break-keep">음악 박자와 영상이 따로 노는 현상</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0"></span>
                        <p className="break-keep">내가 원하는 구체적인 장면 연출 불가</p>
                    </li>
                     <li className="flex items-start gap-3 text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0"></span>
                        <p className="break-keep">저작권 문제 발생 가능성 있음</p>
                    </li>
                </ul>
            </div>

            {/* Good Case */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-hema-purple relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-hema-purple text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    추천
                </div>
                <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="text-hema-purple" size={28} />
                    <h3 className="text-xl font-bold text-gray-900">헤마스튜디오</h3>
                </div>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-gray-900 font-medium">
                        <CheckCircle2 size={18} className="text-hema-purple mt-0.5 shrink-0" />
                        <p className="break-keep">처음부터 끝까지 <span className="text-hema-purple">일관된 캐릭터</span> 유지</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-900 font-medium">
                        <CheckCircle2 size={18} className="text-hema-purple mt-0.5 shrink-0" />
                        <p className="break-keep">오디오 분석을 통한 정교한 <span className="text-hema-purple">비트 싱크</span></p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-900 font-medium">
                        <CheckCircle2 size={18} className="text-hema-purple mt-0.5 shrink-0" />
                        <p className="break-keep">전문 기획자의 <span className="text-hema-purple">스토리보드</span> 기반 제작</p>
                    </li>
                    <li className="flex items-start gap-3 text-gray-900 font-medium">
                        <CheckCircle2 size={18} className="text-hema-purple mt-0.5 shrink-0" />
                        <p className="break-keep">100% 저작권 양도 및 상업적 이용 가능</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;