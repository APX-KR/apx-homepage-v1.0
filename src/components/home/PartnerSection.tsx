import React from 'react';
import Container from '../common/Container.tsx';
import { useVisibility } from '../../hooks/useVisibility.tsx';
import { useModal } from '../../contexts/ModalContext.tsx';

const PartnerSection = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });
    const { openComingSoonPopup } = useModal();
    
    const handleComingSoonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        openComingSoonPopup();
    };

    return (
        <section className="bg-apx-foundation-beige py-10 md:py-12 lg:py-16 overflow-hidden">
            <Container ref={sectionRef} className="text-left">
                <h2 className={`text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary leading-tight tracking-tight-title mb-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <span className="md:hidden">리더가 가장 먼저 찾는<br />성장 파트너</span>
                    <span className="hidden md:inline">리더가 가장 먼저 찾는 성장 파트너</span>
                </h2>
                <p className={`text-body-lg text-text-secondary max-w-3xl mb-10 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <span className="md:hidden">단순 해결사가 아닌<br />생각의 파트너</span>
                    <span className="hidden md:inline">단순 해결사가 아닌 생각의 파트너</span>
                </p>
                <div className={`flex flex-col sm:flex-row justify-start items-center gap-4 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <a
                        href="#newsletter"
                        onClick={handleComingSoonClick}
                        className="w-full sm:w-auto px-8 py-4 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-transparent hover:text-apx-growth-green hover:border-apx-growth-green hover:-translate-y-0.5 transform transition-all duration-300"
                    >
                        뉴스레터 신청하기
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default PartnerSection;