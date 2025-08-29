import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const PhilosophySection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>();

    return (
        <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    {/* Text Content */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tighter tracking-tight-title">
                            APX가 정의하는<br />성과 운영체제의 3가지 핵심 요소
                        </h2>
                    </div>
                    <div className={`flex items-center flex-wrap justify-center gap-x-4 gap-y-2 mt-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-h4-mobile md:text-h4 text-text-primary font-bold">조직 성과</span>
                        <span className="text-h4-mobile md:text-h4 text-apx-growth-green font-bold">=</span>
                        <span className="text-h4-mobile md:text-h4 text-strategy-blue font-bold">전략</span>
                        <span className="text-h4-mobile md:text-h4 text-apx-growth-green font-bold">×</span>
                        <span className="text-h4-mobile md:text-h4 text-talent-orange font-bold">인재</span>
                        <span className="text-h4-mobile md:text-h4 text-apx-growth-green font-bold">×</span>
                        <span className="text-h4-mobile md:text-h4 text-process-gray font-bold">프로세스</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PhilosophySection;