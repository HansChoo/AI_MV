import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Item = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100">
            <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-hema-purple transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold ${isOpen ? 'text-hema-purple' : 'text-gray-900'}`}>{question}</span>
                {isOpen ? <ChevronUp className="text-hema-purple" /> : <ChevronDown className="text-gray-400" />}
            </button>
            {isOpen && (
                <div className="pb-8 text-gray-500 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    )
}

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">자주 묻는 질문</h2>
        
        <div className="space-y-1">
             <Item 
                question="저작권 문제는 없나요?"
                answer="네, 제공해드리는 모든 영상의 저작권은 의뢰인에게 귀속됩니다. 상업적 용도(유튜브 수익 창출, 앨범 발매, 홍보 등)로 자유롭게 사용하실 수 있습니다. 헤마스튜디오는 라이센스가 해결된 안전한 모델만을 사용합니다."
             />
             <Item 
                question="제작 기간은 얼마나 걸리나요?"
                answer="일반적으로 기획 확정 후 2~3주 정도 소요됩니다. 급한 일정의 경우 '익스프레스 옵션'을 통해 3일 이내 납품도 가능하오니 상담 시 말씀해주세요."
             />
             <Item 
                question="원하는 특정 인물의 얼굴을 넣을 수 있나요?"
                answer="네, 가능합니다. 본인의 얼굴이나 사용 허락을 받은 특정 모델의 얼굴을 학습시켜 영상의 주인공으로 등장시킬 수 있습니다. (추가 비용 발생 가능)"
             />
             <Item 
                question="수정은 몇 회까지 가능한가요?"
                answer="기본 요금제 기준 2회의 수정이 포함되어 있습니다. 전체 컷의 20% 이내에서의 장면 교체나, 색감/자막 수정 등이 가능하며, 스토리보드 단계에서의 기획 수정은 무제한으로 도와드립니다."
             />
        </div>
      </div>
    </section>
  );
};

export default FAQ;