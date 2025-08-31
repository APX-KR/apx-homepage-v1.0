'use client';

import React from 'react';
import Container from '../../components/common/Container';
import PageHeader from '../../components/common/PageHeader';
import { useModal } from '../../contexts/ModalContext';

const categoryStyles: { [key: string]: { bg: string; text: string; border: string; } } = {
    "진단과 분석": { bg: 'bg-diagnosis-blue/10', text: 'text-diagnosis-blue', border: 'border-diagnosis-blue' },
    "전략 컨설팅": { bg: 'bg-strategy-blue/10', text: 'text-strategy-blue', border: 'border-strategy-blue' },
    "역량 개발": { bg: 'bg-talent-orange/10', text: 'text-talent-orange', border: 'border-talent-orange' },
    "경영지원 (Growth OS)": { bg: 'bg-apx-deep-growth/10', text: 'text-apx-deep-growth', border: 'border-apx-deep-growth' },
};

type SolutionCategory = keyof typeof categoryStyles;

interface Solution {
    id: number;
    title: string;
    description: string;
    solution_category: SolutionCategory;
}

const allSolutions: Solution[] = [
    { id: 6, title: '직무역량 모델링 및 진단', description: '직무별 필요역량을 체계적으로 도출하고, 구성원 역량 수준을 진단하여 육성 계획을 수립합니다.', solution_category: '진단과 분석' },
    { id: 7, title: '조직문화 진단 서베이', description: '데이터 기반 서베이를 통해 우리 조직문화의 강점과 약점을 객관적으로 진단합니다.', solution_category: '진단과 분석' },
    { id: 1, title: '차세대 리더 파이프라인 구축', description: '미래 성장을 이끌 핵심 리더를 조기에 발굴하고 체계적으로 육성하는 로드맵을 설계합니다.', solution_category: '전략 컨설팅' },
    { id: 3, title: '애자일 조직구조 설계', description: '시장 변화에 민첩하게 대응하고 부서 간 협업을 촉진하는 유연한 조직구조를 디자인합니다.', solution_category: '전략 컨설팅' },
    { id: 4, title: 'R&R(역할과 책임) 재정의', description: '조직 목표 달성을 위한 명확한 역할과 책임을 정의하고 중복/누락 업무를 제거합니다.', solution_category: '전략 컨설팅' },
    { id: 2, title: '임원 리더십 코칭', description: '고위 리더의 전략적 통찰력과 조직관리 역량을 극대화하는 1:1 맞춤 코칭을 제공합니다.', solution_category: '역량 개발' },
    { id: 8, title: '수평적 조직문화 구축 워크샵', description: '심리적 안정감을 바탕으로 자유로운 의견 교환과 빠른 실행을 촉진하는 문화를 만듭니다.', solution_category: '역량 개발' },
    { id: 10, title: '성과 피드백 시스템 설계', description: '일회성 평가가 아닌, 상시적이고 건설적인 피드백이 오가는 시스템을 설계합니다.', solution_category: '역량 개발' },
    { id: 5, title: '핵심인재 정의 및 관리', description: '우리 조직의 성과를 견인하는 핵심인재를 정의하고, 이들의 유지 및 성장을 지원합니다.', solution_category: '경영지원 (Growth OS)' },
    { id: 9, title: 'OKR 기반 성과관리 시스템 도입', description: '전사 목표와 팀, 개인의 목표를 정렬하여 성과를 극대화하는 OKR 시스템 구축을 지원합니다.', solution_category: '경영지원 (Growth OS)' },
];

const groupedSolutions = allSolutions.reduce((acc, solution) => {
  (acc[solution.solution_category] = acc[solution.solution_category] || []).push(solution);
  return acc;
}, {} as Record<SolutionCategory, Solution[]>);


export default function SolutionsPage() {
  const { openContactModal } = useModal();

  const handleContactClick = (solutionTitle: string) => {
    openContactModal(`솔루션 문의: ${solutionTitle}`);
  };
  
  return (
    <>
      <PageHeader
        engTitle="PROJECT SOLUTIONS"
        title="조직 성장을 위한 솔루션"
        description="APX는 조직 진단부터 전략 설계, 역량 개발, 경영지원까지. 조직 성장의 모든 단계에 필요한 전문적인 솔루션을 제공하여 실질적인 변화를 만듭니다."
      />
      <div className="py-24 md:py-32 bg-bg-secondary">
        <Container>
            <div className="space-y-20">
                {Object.entries(groupedSolutions).map(([category, solutions]) => {
                    const styles = categoryStyles[category as SolutionCategory];
                    return (
                        <section key={category} id={category.toLowerCase().replace(/\s/g, '-')}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className={`w-2 h-8 rounded-full ${styles.bg.replace('/10', '')}`}></span>
                                <h2 className={`text-h3 font-bold ${styles.text}`}>{category}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {solutions.map(solution => (
                                    <div key={solution.id} className="bg-white p-8 rounded-2xl soft-shadow-md flex flex-col justify-between hover:soft-shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                                        <div>
                                            <h4 className="text-h5 font-bold text-text-primary leading-snug mb-3">{solution.title}</h4>
                                            <p className="text-body-base text-text-secondary leading-relaxed">{solution.description}</p>
                                        </div>
                                        <div className="text-right mt-6">
                                            <button 
                                                onClick={() => handleContactClick(solution.title)} 
                                                className="font-semibold text-apx-growth-green hover:underline text-body-sm"
                                            >
                                                문의하기 &gt;
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                })}
            </div>
        </Container>
      </div>
    </>
  );
}