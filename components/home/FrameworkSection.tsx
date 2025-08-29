

import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const solutionAreas = [
  {
    title: '분석 & 진단',
    description: '성장의 출발점, 데이터 기반의 명확한 현황 분석',
    color: 'diagnosis-blue',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
  },
  {
    title: '전략 컨설팅',
    description: '미래 성장을 위한 실행 가능한 청사진 설계',
    color: 'strategy-blue',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-1.125 0-2.062.938-2.062 2.063v7.575c0 1.125.937 2.063 2.063 2.063h9.053c1.125 0 2.063-.938 2.063-2.063V10.313" /></svg>
  },
  {
    title: '역량 개발',
    description: '설계도를 실행할 사람들의 행동 변화 촉진',
    color: 'talent-orange',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.67c.12-.241.252-.477.396-.706A6.375 6.375 0 0115 19.128zM12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" /></svg>
  },
  {
    title: '경영지원 (Growth OS)',
    description: '핵심에만 집중할 수 있는 운영 시스템 구축',
    color: 'apx-deep-growth',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.227a48.904 48.904 0 011.07 0c.55.22 1.02.685 1.11 1.227l.073.439c.083.498.42.923.868 1.106 1.033.421 1.615 1.54 1.255 2.585a48.601 48.601 0 01-1.07 2.036c-.43.51-.51.98-.38 1.517l.073.439c.18.96.84 1.748 1.74 2.046a48.897 48.897 0 01-1.07 2.036c-.36.945-1.222 1.515-2.162 1.255-.448-.183-.885-.518-1.255-1.025a48.601 48.601 0 01-2.036-1.07c-.537-.13-.987-.05-1.517.38l-.439.073c-.96.18-1.748.84-2.046 1.74a48.897 48.897 0 01-2.036-1.07c-.945-.36-1.515-1.222-1.255-2.162.183-.448.518-.885 1.025-1.255a48.601 48.601 0 011.07-2.036c.13-.537.05-.987-.38-1.517l-.073-.439c-.18-.96-.84-1.748-1.74-2.046A48.897 48.897 0 015.62 5.62c.36-.945 1.222-1.515 2.162-1.255.448.183.885.518 1.255 1.025a48.601 48.601 0 012.036 1.07c.537.13.987.05 1.517-.38l.439-.073z" /></svg>
  },
];

const SolutionCard: React.FC<{ title: string; description: string; color: string; icon: React.ReactNode; }> = ({ title, description, color, icon }) => (
    <div className="bg-white p-8 rounded-2xl flex flex-col h-full soft-shadow-md hover:soft-shadow-lg hover:-translate-y-1.5 transition-all duration-300">
        <div className={`w-14 h-14 rounded-full bg-${color}/10 flex items-center justify-center mb-5 text-${color}`}>
            {icon}
        </div>
        <div className="flex-grow">
            <h3 className="text-h5 font-bold text-text-primary mb-3 leading-tight tracking-tight-title">{title}</h3>
            <p className="text-body-base text-text-secondary leading-relaxed">{description}</p>
        </div>
    </div>
);


const FrameworkSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
            <Container>
                <div className={`max-w-4xl text-center mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                        성장 설계도를 현실로 만드는 솔루션
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                        APX는 성장 로드맵의 각 단계에 필요한 최적의 솔루션을 4가지 핵심 모듈을 통해 제공합니다.
                    </p>
                </div>

                <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
                    {solutionAreas.map((item, index) => (
                        <div key={index} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${150 + index * 100}ms` }}>
                            <SolutionCard {...item} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FrameworkSection;