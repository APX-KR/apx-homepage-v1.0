import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const ProcessStepCard: React.FC<{ step: string; title: string; description: string; color: string;}> = ({ step, title, description, color }) => (
    <div className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${color} text-left`}>
        <span className={`text-h6 font-bold ${color.replace('border-', 'text-')}`}>{step}</span>
        <h3 className="text-h4 font-bold text-text-primary mt-1 mb-2 leading-tight tracking-tight-title">{title}</h3>
        <p className="text-body-base text-text-secondary leading-normal">{description}</p>
    </div>
);

const ProcessSection: React.FC = () => {
    const steps = [
        { step: "STEP 1", title: "진단 (Diagnosis)", description: "현황 파악·문제 식별", color: "border-diagnosis-blue" },
        { step: "STEP 2", title: "설계 (Design)", description: "맞춤 솔루션 구성", color: "border-design-purple" },
        { step: "STEP 3", title: "실행 (Execution)", description: "전사 확산·내재화", color: "border-execution-red" }
    ];

    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-bg-subtle-beige overflow-hidden">
            <Container>
                 <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                                아이디어를 실질적 성과로 바꾸는<br/>3단계 성과 창출 프로세스
                            </h2>
                            <p className="text-body-lg text-text-secondary max-w-3xl leading-normal mb-12">
                                'APX 인사이트 퍼널'을 통해 도출된 명확한 해결책은 보고서에 머무르지 않습니다.<br />
                                우리는 완결성 있는 3단계 프로세스를 통해 실질적인 변화를 만들고, 지속 가능한 시스템으로 내재화합니다.
                            </p>
                        </div>
                        <div className="space-y-6">
                            {steps.map((s, index) => (
                                 <div key={s.title} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                                   <ProcessStepCard {...s} />
                                </div>
                            ))}
                        </div>
                    </div>
                     {/* Image Content */}
                    <div className={`md:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <img 
                            src="https://storage.googleapis.com/apxhomepage-asset/SectionImage_Collaboration.png" 
                            alt="성과 창출 프로세스 시각화 이미지" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            style={{aspectRatio: '1/1'}}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProcessSection;