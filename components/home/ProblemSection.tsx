import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const ProblemSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section id="apx-view" ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <Container>
                <div className="max-w-4xl mx-auto text-left">
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                            성과를 내는 조직은<br className="sm:hidden" /> 5가지 핵심 질문에 답을 가지고 있습니다.
                        </h2>
                        <p className="text-body-lg text-text-secondary leading-relaxed">
                            조직의 성패는 수많은 과제들 속에서 가장 본질적인 질문을 놓치지 않는 것에 달려있습니다.<br/>
                            APX는 복잡한 경영 현안을 5가지 핵심 질문(5Q)으로 재구성하여,<br className="hidden lg:block"/> 조직 전체가 가장 중요한 것에 집중하고 명확한 답을 찾아가도록 돕습니다.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProblemSection;