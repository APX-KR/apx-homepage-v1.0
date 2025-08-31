'use client';

import React from 'react';
import Container from '../../components/common/Container';
import PageHeader from '../../components/common/PageHeader';
import { useModal } from '../../contexts/ModalContext';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; }> = ({ title, description, icon }) => (
    <div className="bg-white rounded-2xl p-8 text-center h-full soft-shadow-md hover:soft-shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 rounded-full bg-apx-growth-green text-white flex items-center justify-center mx-auto mb-6">
            {icon}
        </div>
        <h3 className="text-h4 font-bold text-text-primary mb-3">{title}</h3>
        <p className="text-body-base text-text-secondary leading-relaxed">{description}</p>
    </div>
);

const GrowthOSPageContent: React.FC = () => {
    const { openContactModal } = useModal();

    return (
        <section className="py-24 md:py-32 bg-bg-primary">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-h2 font-semibold text-text-primary mb-6">
                        대표님은 핵심에만 집중하세요
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-relaxed mb-16">
                        APX의 Growth OS는 단순한 업무 대행이 아닙니다. 법인설립, 재무, 회계, 운영 등 스타트업 성장에 필수적인 경영 인프라를 하나의 통합된 시스템으로 제공하여, 대표님과 팀이 제품 개발과 고객 확보라는 가장 중요한 본질에만 집중할 수 있는 환경을 만듭니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        title="CFO 구독 서비스"
                        description="투자 유치 전략, 재무 모델링, 정부지원사업 등 스타트업 전문 CFO가 필요한 모든 재무 관련 의사결정을 지원합니다."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                    />
                    <ServiceCard
                        title="COO 구독 서비스"
                        description="인사(HR), 총무, 법무, IT 등 회사의 운영 시스템을 설계하고, 비효율을 제거하여 조직이 매끄럽게 돌아가도록 만듭니다."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    />
                     <ServiceCard
                        title="경영지원 패키지"
                        description="법인 설립부터 MVP 개발 지원, 초기 멤버 채용까지. 스타트업의 시작과 성장에 필요한 모든 것을 맞춤형 패키지로 제공합니다."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    />
                </div>
                <div className="mt-16 text-center">
                    <button
                        onClick={() => openContactModal('Growth OS 서비스 문의')}
                        className="px-10 py-4 bg-apx-growth-green text-white font-semibold text-body-lg leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Growth OS 상담 신청
                    </button>
                </div>
            </Container>
        </section>
    );
};


export default function ServicesPage() {
  return (
    <>
      <PageHeader
        engTitle="GROWTH OS FOR STARTUPS"
        title={
            <>
                성장의 운영체제를<br className="md:hidden"/> 구축합니다
            </>
        }
        description="APX의 경영지원 서비스 'Growth OS'는 스타트업이 성장에만 집중할 수 있도록, 재무부터 운영까지 모든 경영 인프라를 책임지는 파트너입니다."
      />
      <GrowthOSPageContent />
    </>
  );
}