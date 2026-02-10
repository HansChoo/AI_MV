import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Item = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100">
            <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-hema-purple transition-colors group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-hema-purple' : 'text-gray-900 group-hover:text-hema-purple'}`}>{question}</span>
                {isOpen ? <ChevronUp className="text-hema-purple shrink-0" /> : <ChevronDown className="text-gray-400 group-hover:text-hema-purple shrink-0" />}
            </button>
            {isOpen && (
                <div className="pb-8 text-gray-500 leading-relaxed bg-gray-50/50 p-6 rounded-xl mb-4">
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
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-gray-500">고객님들이 가장 많이 궁금해하시는 내용을 모았습니다.</p>
        </div>
        
        <div className="space-y-1">
             <Item 
                question="Q. 제작된 영상의 저작권은 누구에게 있나요?"
                answer="A. 헤마스튜디오에서 제작한 모든 영상의 저작권은 의뢰인(고객님)께 100% 귀속됩니다. 유튜브 수익 창출, 앨범 발매, 방송 송출, 광고 집행 등 상업적 용도로 자유롭게 사용하실 수 있습니다. 사용된 소스는 모두 라이센스가 해결된 안전한 모델입니다."
             />
             <Item 
                question="Q. 제작 기간은 얼마나 걸리나요?"
                answer="A. 일반적으로 기획 확정 후 2~3주 정도 소요됩니다. 다만, 일정이 급하신 경우 '익스프레스(긴급 제작)' 옵션을 통해 상담 후 3~5일 이내 납품도 가능합니다. (일정에 따라 추가 비용이 발생할 수 있습니다)"
             />
             <Item 
                question="Q. 제 얼굴이나 특정 모델의 얼굴로 제작할 수 있나요?"
                answer="A. 네, 가능합니다. 본인의 얼굴이나 사용 허락을 받은 모델의 사진을 5~10장 정도 보내주시면, 해당 인물을 학습시켜 영상 속 주인공으로 등장시킬 수 있습니다. 팬들을 위한 버추얼 휴먼 제작도 가능합니다."
             />
             <Item 
                question="Q. 수정은 몇 회까지 가능한가요?"
                answer="A. 기본 요금제 기준 총 2회의 수정이 무료로 제공됩니다. 스토리보드 단계에서의 기획 수정은 무제한이며, 영상 제작 후에는 전체 컷의 20% 이내에서의 장면 교체나, 색감/자막/이펙트 수정 등이 가능합니다."
             />
             <Item 
                question="Q. 4분이 넘는 긴 곡도 제작 가능한가요?"
                answer="A. 네, 가능합니다. 기본 패키지는 4분 이내 곡을 기준으로 하며, 초과 시 분당 추가 요금이 발생할 수 있습니다. 클래식, 믹스셋 등 긴 호흡의 영상도 제작 경험이 풍부하니 상담 시 말씀해주세요."
             />
             <Item 
                question="Q. 숏폼(세로 영상)도 따로 만들어야 하나요?"
                answer="A. 아니요! 헤마스튜디오의 모든 패키지에는 유튜브 쇼츠, 인스타그램 릴스, 틱톡에 업로드할 수 있는 9:16 비율의 세로형 하이라이트 영상 제작이 기본 서비스로 포함되어 있습니다."
             />
             <Item 
                question="Q. 환불 규정은 어떻게 되나요?"
                answer="A. 작업 착수 전에는 100% 환불이 가능합니다. 기획안(스토리보드) 확정 후에는 50%, 영상 생성 작업이 시작된 이후에는 환불이 불가능한 점 양해 부탁드립니다."
             />
             <Item 
                question="Q. 결제는 어떻게 진행되나요? 세금계산서 발행 가능한가요?"
                answer="A. 계좌이체 및 카드 결제가 가능하며, 기업 고객을 위한 세금계산서 발행 및 현금영수증 발행도 당연히 가능합니다. (부가세 10% 별도)"
             />
             <Item 
                question="Q. 제가 준비해야 할 자료는 무엇인가요?"
                answer="A. 완성된 음원 파일(MP3/WAV)과 가사 텍스트가 필수입니다. 추가적으로 원하시는 분위기의 레퍼런스(이미지, 영상 링크)나 구체적인 스토리라인이 있다면 더욱 만족스러운 결과물을 받으실 수 있습니다."
             />
             <Item 
                question="Q. 영상 퀄리티가 샘플처럼 일정하게 나오나요?"
                answer="A. 네, 헤마스튜디오는 무작위로 생성되는 AI 이미지가 아닌, 고정된 시드(Seed) 값과 정교한 컨트롤넷(ControlNet) 기술을 사용하여 캐릭터와 화풍이 영상 처음부터 끝까지 일관되게 유지됩니다."
             />
        </div>
      </div>
    </section>
  );
};

export default FAQ;