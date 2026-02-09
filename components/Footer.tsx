import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500 py-16 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-gray-900 text-xl font-bold mb-4">헤마스튜디오</h4>
            <p className="max-w-xs mb-6 text-sm leading-relaxed">
              AI 기술과 인간의 감성을 잇는 크리에이티브 파트너.<br/>
              당신의 음악이 보여지는 순간, 헤마스튜디오가 함께합니다.
            </p>
            <div className="flex space-x-3">
               {['Instagram', 'Youtube', 'Twitter'].map((social) => (
                   <a key={social} href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xs hover:border-hema-purple hover:text-hema-purple transition-all">
                       {social[0]}
                   </a>
               ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-gray-900 font-bold mb-4 text-sm">Service</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">서비스 소개</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">요금 안내</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">포트폴리오</a></li>
            </ul>
          </div>
          
          <div>
             <h5 className="text-gray-900 font-bold mb-4 text-sm">Contact</h5>
             <ul className="space-y-2 text-sm">
              <li>1544-0000</li>
              <li>support@hemastudio.ai</li>
              <li>서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Hema Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;