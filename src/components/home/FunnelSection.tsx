'use client';

import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const processSteps = [
    {
        step: "WHY",
        title: "현황 진단 및 핵심 원인 분석",
        description: "데이터와 인터뷰를 통해<br/>문제의 현상이 아닌 근본적인 원인을 정의합니다."
    },
    {
        step: "HOW",
        title: "성장 전략 및 로드맵 설계",
        description: "도출된 원인을 해결하고 목표를 달성하기 위한<br/>최적의 실행 계획과 청사진을 그립니다."
    },
    {
        step: "WHAT",
        title: "최적 솔루션 구축",
        description: "설계된 로드맵에 따라 필요한<br/>진단, 컨설팅, 역량 개발, 운영 시스템을 조합하여 구축합니다."
    }
];

const ProcessStep: React.FC<{ step: string; title: string; description: string; className?: string; }> = ({ step, title, description, className }) => (
    <div className={`bg-white p-6 rounded-2xl soft-shadow ${className}`}>
        <span className="text-sm font-bold text-apx-growth-green">{step}</span>
        <h3 className="text-h5 font-bold text-text-primary mt-1 mb-2">{title}</h3>
        <p className="text-body-base leading-snug" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
)

const FunnelSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({threshold: 0.1});

    return (
        <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                                <span className="md:hidden">분석에서 설계, 구축까지<br/>함께하는 파트너</span>
                                <span className="hidden md:inline">분석에서 설계, 구축까지 함께하는 파트너</span>
                            </h2>
                            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                <span className="md:hidden">
                                    APX는 분석으로 끝나지 않습니다.<br/>
                                    고객의 목표를 현실로 만들기 위해<br/>
                                    Why-How-What에 기반한 체계적인<br/>
                                    3단계 프로세스를 통해 아이디어를<br/>
                                    실제 성과로 구축합니다.
                                </span>
                                <span className="hidden md:inline">
                                    APX는 분석으로 끝나지 않습니다. 고객의 목표를 현실로 만들기 위해<br/>
                                    Why-How-What에 기반한 체계적인 3단계 프로세스를 통해 아이디어를 실제 성과로 구축합니다.
                                </span>
                            </p>
                        </div>
                    </div>
                     {/* Infographic */}
                    <div className={`lg:w-1/2 w-full mt-12 lg:mt-0 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="relative flex flex-col items-center gap-4">
                            {processSteps.map((item, index) => (
                                <React.Fragment key={item.step}>
                                    <div 
                                        className={`w-full max-w-md self-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                                        style={{ transitionDelay: `${200 + index * 200}ms` }}
                                    >
                                        <ProcessStep {...item} />
                                    </div>
                                    
                                    {index < processSteps.length - 1 && (
                                        <div className="h-10 w-px bg-border-light relative">
                                            <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 text-border-light" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 1V15M1 8L8 15L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FunnelSection;