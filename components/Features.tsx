import React from 'react';
import { Palette, Users, Film, Wand2, Smartphone, MonitorPlay } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: React.ElementType, title: string, description: string, color: string }) => (
  <div className="bg-white p-5 md:p-8 rounded-3xl border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 group h-full">
    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform group-hover:scale-110 ${color}`}>
      <Icon className="text-white w-5 h-5 md:w-7 md:h-7" />
    </div>
    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 break-keep">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-xs md:text-[15px] break-keep">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            기술은 우리가 고민할게요.<br/>
            아티스트는 <span className="text-hema-purple">음악</span>에만 집중하세요.
          </h2>
          <p className="text-gray-500 text-lg">
            헤마스튜디오의 전문가가 당신의 음악을 시각화합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          <FeatureCard 
            icon={Film}
            color="bg-purple-500"
            title="스토리텔링 기획"
            description="단순 이미지가 나열되는 영상이 아닙니다. 기승전결이 있는 시나리오를 설계하여 곡의 몰입도를 극대화합니다."
          />
          <FeatureCard 
            icon={Users}
            color="bg-blue-500"
            title="캐릭터 일관성"
            description="딥러닝 고정 시드(Seed) 기술로 주인공의 얼굴과 의상이 영상 내내 변하지 않고 유지됩니다."
          />
          <FeatureCard 
            icon={Palette}
            color="bg-indigo-500"
            title="무한한 스타일"
            description="지브리풍 애니메이션부터 실사 영화, 3D 아트웍까지. 장르에 구애받지 않고 원하는 화풍을 구현합니다."
          />
          <FeatureCard 
            icon={Wand2}
            color="bg-pink-500"
            title="정교한 연출 제어"
            description="'비 내리는 창가', '눈물을 흘리는 주인공' 등 디테일한 상황 묘사와 감정 연출이 가능합니다."
          />
          <FeatureCard 
            icon={MonitorPlay}
            color="bg-orange-500"
            title="선명한 고화질"
            description="유튜브, 방송 송출에도 손색없는 선명한 고화질로 최종 마스터링하여 전달드립니다."
          />
          <FeatureCard 
            icon={Smartphone}
            color="bg-teal-500"
            title="숏폼 최적화"
            description="틱톡, 릴스, 쇼츠용 9:16 비율 세로 영상 포맷도 기본으로 지원합니다."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;