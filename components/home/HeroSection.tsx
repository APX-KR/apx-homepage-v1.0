

import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';

const HeroSection: React.FC = () => {
    const { openContactModal } = useModal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="overflow-hidden pt-2.5 pb-12 md:pb-16">
            <Container>
                <div 
                    className="relative rounded-3xl px-6 py-20 md:p-20 lg:p-24 bg-cover bg-center min-h-[600px] lg:min-h-[700px] flex"
                    style={{ backgroundImage: "url('https://storage.googleapis.com/apxhomepage-asset/HeroSectionBG04.png')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                    
                    <div className="relative z-10 lg:w-3/5 text-left flex flex-col justify-end">
                        <div>
                            <h1 className={`text-h1-mobile md:text-h1-tablet lg:text-h1 font-bold text-white leading-tight tracking-tight-title mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                조직의 잠재력을<br />
                                성과로 바꾸는 성장 시스템
                            </h1>
                            <p className={`text-body-base md:text-body-lg text-gray-200 max-w-xl mb-10 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                문제가 아니라 원인에, 캠페인이 아니라 시스템에 집중합니다.
                            </p>
                        </div>
                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); openContactModal('솔루션 문의'); }}
                                className="w-full sm:w-auto px-8 py-4 bg-apx-growth-green text-white font-semibold rounded-full border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white hover:-translate-y-0.5 transform transition-all duration-300"
                            >
                                솔루션 문의하기
                            </a>
                            <a
                                href="#academy"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/80 hover:bg-white hover:text-text-primary hover:border-white hover:-translate-y-0.5 transform transition-all duration-300"
                            >
                                아카데미 탐색하기
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;