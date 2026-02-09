import React from 'react';
import { Check } from 'lucide-react';

const Plan = ({ name, price, description, features, recommended = false }: { name: string, price: string, description: string, features: string[], recommended?: boolean }) => (
  <div className={`relative p-8 rounded-3xl flex flex-col bg-white border ${recommended ? 'border-hema-purple shadow-xl scale-105 z-10' : 'border-gray-100 shadow-soft'}`}>
    {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hema-purple text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-md whitespace-nowrap">
            인기 상품
        </div>
    )}
    <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
    <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{description}</p>
    <div className="text-3xl font-bold text-gray-900 mb-8">
        {price}
    </div>
    
    <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-900">
                <Check size={18} className="text-hema-purple shrink-0" />
                <span>{feature}</span>
            </li>
        ))}
    </ul>
    
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${
        recommended 
        ? 'bg-hema-purple text-white hover:bg-violet-700 shadow-lg' 
        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
    }`}>
        선택하기
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">합리적인 가격 정책</h2>
            <p className="text-gray-500">추가 비용 없는 정찰제로 운영됩니다. 예산에 맞춰 선택하세요.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
            <Plan 
                name="루프 비주얼라이저"
                price="350,000원"
                description="유튜브 플레이리스트용 숏폼/루프 영상"
                features={[
                    "15초~30초 루프 영상",
                    "단일 캐릭터/배경",
                    "FHD 화질 제공",
                    "수정 1회 포함"
                ]}
            />
            <Plan 
                name="스토리 뮤직비디오"
                price="950,000원"
                description="기승전결 서사가 있는 풀버전 뮤직비디오"
                recommended={true}
                features={[
                    "곡 전체 길이 (4분 이내)",
                    "전문가 기획 및 스토리보드",
                    "캐릭터 일관성 유지",
                    "비트 싱크 컷 편집",
                    "4K 업스케일링 마스터링",
                    "수정 2회 포함"
                ]}
            />
            <Plan 
                name="장편 / 시리즈 IP"
                price="별도 협의"
                description="세계관 구축 및 옴니버스 시리즈 제작"
                features={[
                    "전담 디렉터팀 배정",
                    "고유 캐릭터 IP 개발 및 양도",
                    "3D / VFX 특수효과",
                    "무제한 수정",
                    "티저 / 숏폼 추가 제작"
                ]}
            />
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
            * 모든 금액은 VAT 별도입니다.
        </div>
      </div>
    </section>
  );
};

export default Pricing;