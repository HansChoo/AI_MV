import React from 'react';

const Stats = () => {
  return (
    <section className="relative z-20 -mt-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="py-8 md:py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-6 md:gap-0">
            <div className="text-center pt-4 md:pt-0">
              <div className="text-4xl font-bold text-hema-purple mb-2">98%</div>
              <div className="text-sm text-gray-500 font-medium">고객 만족도</div>
            </div>
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl font-bold text-hema-purple mb-2">2~3주</div>
              <div className="text-sm text-gray-500 font-medium">평균 제작 소요 기간</div>
            </div>
            <div className="text-center pt-6 md:pt-0">
              <div className="text-4xl font-bold text-hema-purple mb-2">1/10</div>
              <div className="text-sm text-gray-500 font-medium">기존 대비 비용 절감</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;