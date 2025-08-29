

import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const ViewCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
}> = ({ icon, title, subtitle, description }) => {
    return (
        <div className="bg-white p-8 rounded-2xl soft-shadow-md w-full text-left">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-apx-primary-yellow w-14 h-14 rounded-full flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="text-h4 font-bold text-text-primary leading-tight tracking-tight-title">{title}</h3>
                    <p className="text-body-base text-text-secondary font-medium">{subtitle}</p>
                </div>
            </div>
            <p className="text-body-base text-text-secondary leading-relaxed mt-6">{description}</p>
        </div>
    )
}

const ProblemSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({threshold: 0.1});

    return (
        <section id="apx-view" ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                            외부 환경과 내부 시스템을 동시에 분석합니다
                        </h2>
                        <p className="text-body-lg text-text-secondary leading-relaxed">
                            성공적인 시스템을 설계하려면 외부 환경(Context)과 내부 구조(Core)를 모두 이해해야 합니다. APX는 이 두 가지 렌즈를 통해 조직을 입체적으로 분석하여 성장의 핵심 지점을 찾아냅니다.
                        </p>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `200ms` }}>
                        <ViewCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-talent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>}
                            title="외부 환경 분석"
                            subtitle="4가지 성장 유형"
                            description="조직의 성장 단계와 문화를 기준으로 4가지 유형으로 분류하여, 현재 조직이 처한 고유한 상황과 과제를 정의합니다."
                        />
                    </div>
                     <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `300ms` }}>
                        <ViewCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-strategy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>}
                            title="내부 시스템 분석"
                            subtitle="5가지 핵심 질문"
                            description="조직 내부 시스템의 건강도를 5Q 프레임워크를 통해 점검하여, 성장 시스템의 청사진을 그리기 위한 핵심 요소를 파악합니다."
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProblemSection;