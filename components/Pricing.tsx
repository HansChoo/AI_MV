import React from 'react';
import { Check, Mic, Sparkles, Clapperboard } from 'lucide-react';

// Custom Title Component with cute animations
const PlanTitle = ({ name }: { name: string }) => {
    if (name.includes("싱잉")) {
        return (
            <div className="flex items-center gap-3 mb-4 group">
                <div className="p-2.5 bg-pink-100 rounded-xl group-hover:bg-pink-200 transition-colors animate-[bounce_2s_infinite]">
                    <Mic size={24} className="text-pink-500" />
                </div>
                <h3 className="text-xl font-black text-gray-900 group-hover:text-pink-500 transition-colors">
                    {name}
                </h3>
            </div>
        );
    } 
    if (name.includes("2D")) {
        return (
             <div className="flex items-center gap-3 mb-4 group">
                <div className="p-2.5 bg-sky-100 rounded-xl group-hover:bg-sky-200 transition-colors">
                    <Sparkles size={24} className="text-sky-500 animate-[spin_3s_linear_infinite]" />
                </div>
                <h3 className="text-xl font-black text-gray-900 group-hover:text-sky-500 transition-colors">
                    {name}
                </h3>
            </div>
        );
    }
    if (name.includes("실사")) {
        return (
             <div className="flex items-center gap-3 mb-4 group">
                <div className="p-2.5 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors animate-pulse">
                    <Clapperboard size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {name}
                </h3>
            </div>
        );
    }
    return <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>;
};

const Plan = ({ name, price, description, features, onSelect }: { name: string, price: string, description: string, features: string[], onSelect: (name: string) => void }) => (
  <div className="relative p-8 rounded-3xl flex flex-col bg-white border border-gray-100 shadow-xl hover:border-hema-purple transition-all duration-300 hover:-translate-y-1 h-full">
    
    <PlanTitle name={name} />

    <p className="text-gray-500 text-sm mb-6 min-h-[48px] whitespace-pre-line leading-relaxed">{description}</p>
    <div className="text-3xl font-bold text-gray-900 mb-8">
        {price}
    </div>
    
    <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-900">
                <Check size={18} className="text-hema-purple shrink-0 mt-0.5" />
                <span className="leading-tight">{feature}</span>
            </li>
        ))}
    </ul>
    
    <button 
        onClick={() => onSelect(name)}
        className="w-full py-4 rounded-xl font-bold transition-all bg-hema-purple text-white hover:bg-violet-700 shadow-lg cursor-pointer active:scale-95"
    >
        선택하기
    </button>
  </div>
);

const Pricing = () => {
  const handleSelectPlan = async (planName: string) => {
    // 1. Confirm dialog
    if (!window.confirm(`'${planName}' 상담을 위해 카카오톡 채널로 이동합니다.\n확인 버튼을 누르면 상품명이 클립보드에 복사됩니다.`)) {
        return;
    }

    // 2. Try copying to clipboard (might fail in non-secure contexts)
    try {
        await navigator.clipboard.writeText(`${planName} 문의합니다.`);
    } catch (err) {
        console.error('Clipboard copy failed:', err);
    }

    // 3. Redirect
    window.location.href = 'http://pf.kakao.com/_PKavxd/chat';
  };

  return (
    <section id="pricing" className="py-24 bg-white border-t border-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 가격 안내</h2>
            <p className="text-gray-500">추가 비용 없는 정찰제로 운영됩니다. 예산에 맞춰 선택하세요.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Plan 
                name="싱잉 캐릭터 타입"
                price="350,000원"
                description={`자연스러운 립싱크 퍼포먼스로\n내 음악에 맞춰 노래하는 캐릭터`}
                features={[
                    "곡 전체 길이 (4분 이내)",
                    "AI 오디오 분석 캐릭터 립싱크",
                    "원하는 화풍의 캐릭터 생성",
                    "숏폼 세로 버전(9:16) 리사이징 제공",
                    "수정 2회 포함"
                ]}
                onSelect={handleSelectPlan}
            />
            <Plan 
                name="2D 시네마 타입"
                price="750,000원"
                description={`한 편의 애니메이션처럼 흐르는\n감성 스토리텔링 비주얼`}
                features={[
                    "곡 전체 길이 (4분 이내)",
                    "가사 기반 감성 스토리 기획",
                    "작화 스타일 선택",
                    "숏폼 세로 버전(9:16) 리사이징 제공",
                    "수정 2회 포함"
                ]}
                onSelect={handleSelectPlan}
            />
            <Plan 
                name="실사 시네마 타입"
                price="950,000원"
                description={`촬영 없이 구현하는\n초현실적 분위기의 실사 비주얼`}
                features={[
                    "곡 전체 길이 (4분 이내)",
                    "영화 같은 시네마틱 연출 기획",
                    "가상 배우 및 아티스트 실사 구현",
                    "제한없는 로케이션 구현",
                    "숏폼 세로 버전(9:16) 리사이징 제공",
                    "수정 2회 포함"
                ]}
                onSelect={handleSelectPlan}
            />
        </div>
      </div>
    </section>
  );
};

export default Pricing;