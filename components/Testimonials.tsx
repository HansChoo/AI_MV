import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  role: string;
}

const reviews: Review[] = [
  {
    text: "AI라고 해서 퀄리티를 걱정했는데, 제가 상상하던 이미지가 그대로 구현되어서 놀랐습니다. 특히 캐릭터 얼굴이 유지되는 게 가장 좋았어요.",
    author: "인디 밴드 '새벽공방' 보컬",
    role: "싱글 앨범 뮤직비디오 제작"
  },
  {
    text: "예산이 적어서 고민이었는데, 이 가격에 이런 퀄리티의 뮤비라니 혁명적입니다. 팬분들 반응도 너무 좋아요!",
    author: "유튜버 'MusicLife'",
    role: "커버곡 영상 제작"
  },
  {
    text: "담당 디렉터님이 곡 해석을 너무 잘해주셔서 기획안 보자마자 바로 진행했습니다. 수정 피드백도 정말 빠르시네요.",
    author: "프로듀서 J",
    role: "데모곡 비주얼라이저 제작"
  },
   {
    text: "95만원으로 4분짜리 풀 영상을 만들 수 있다니 가성비 최고입니다. 다음 앨범도 꼭 여기서 할게요.",
    author: "싱어송라이터 민수",
    role: "정규 앨범 타이틀곡"
  },
   {
    text: "캐릭터가 너무 예쁘게 나와서 굿즈로도 만들고 싶어요. 저작권도 넘겨주셔서 편하게 쓰고 있습니다.",
    author: "크리에이터 냥냥",
    role: "BGM 영상 제작"
  }
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col w-[350px] shrink-0 mx-4">
        <div className="flex gap-1 text-yellow-400 mb-4">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
        </div>
        <p className="text-gray-700 text-base font-medium leading-relaxed mb-6 flex-1 line-clamp-3">
            "{review.text}"
        </p>
        <div className="border-t border-gray-100 pt-4">
            <div className="font-bold text-sm text-gray-900">{review.author}</div>
            <div className="text-xs text-gray-500">{review.role}</div>
        </div>
    </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-toss-lightBlue/30 overflow-hidden">
      <div className="container-custom mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center">생생한 이용 후기</h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full">
          <div className="flex w-max animate-scroll">
              {/* First Set */}
              {reviews.map((review, index) => (
                  <ReviewCard key={`r1-${index}`} review={review} />
              ))}
              {/* Second Set (Duplicate for smooth loop) */}
               {reviews.map((review, index) => (
                  <ReviewCard key={`r2-${index}`} review={review} />
              ))}
          </div>
      </div>
      
      <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-scroll {
            animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;