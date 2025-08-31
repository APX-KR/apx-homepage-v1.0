'use client';

import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';
import { useVisibility } from '../../hooks/useVisibility';
import { useInternalNavigation } from '../../contexts/InternalNavigationContext';
import FloatingPortfolioButton from '../common/FloatingPortfolioButton';

const categoryStyles: { [key: string]: { bg: string; text: string; border: string; } } = {
    "진단과 분석": { bg: 'bg-diagnosis-blue/10', text: 'text-diagnosis-blue', border: 'border-diagnosis-blue' },
    "전략 컨설팅": { bg: 'bg-strategy-blue/10', text: 'text-strategy-blue', border: 'border-strategy-blue' },
    "역량 개발": { bg: 'bg-talent-orange/10', text: 'text-talent-orange', border: 'border-talent-orange' },
    "경영지원 (Growth OS)": { bg: 'bg-apx-deep-growth/10', text: 'text-apx-deep-growth', border: 'border-apx-deep-growth' },
};

const qCategoryDetails: { [key: string]: { label: string; bg: string; text: string; } } = {
    'Q1': { label: '리더십', bg: 'bg-strategy-blue/10', text: 'text-strategy-blue' },
    'Q2': { label: '조직구조', bg: 'bg-process-gray/10', text: 'text-process-gray' },
    'Q3': { label: '인재와 역량', bg: 'bg-performance-green/10', text: 'text-performance-green' },
    'Q4': { label: '문화와 몰입', bg: 'bg-culture-coral/10', text: 'text-culture-coral' },
    'Q5': { label: '성과관리', bg: 'bg-talent-orange/10', text: 'text-talent-orange' },
};

type SolutionCategory = keyof typeof categoryStyles;
type QCategory = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5';

interface Solution {
    id: number;
    title: string;
    description: string;
    q_categories: QCategory[];
    solution_category: SolutionCategory;
}

const allSolutions: Solution[] = [
    { id: 1, title: '차세대 리더 파이프라인 구축', description: '미래 성장을 이끌 핵심 리더를 조기에 발굴하고\n체계적으로 육성하는 로드맵을 설계합니다.', q_categories: ['Q1'], solution_category: '전략 컨설팅' },
    { id: 2, title: '임원 리더십 코칭', description: '고위 리더의 전략적 통찰력과 조직관리 역량을\n극대화하는 1:1 맞춤 코칭을 제공합니다.', q_categories: ['Q1'], solution_category: '역량 개발' },
    { id: 3, title: '애자일 조직구조 설계', description: '시장 변화에 민첩하게 대응하고 부서 간 협업을\n촉진하는 유연한 조직구조를 디자인합니다.', q_categories: ['Q2'], solution_category: '전략 컨설팅' },
    { id: 4, title: 'R&R(역할과 책임) 재정의', description: '조직 목표 달성을 위한 명확한 역할과 책임을\n정의하고 중복/누락 업무를 제거합니다.', q_categories: ['Q2', 'Q5'], solution_category: '전략 컨설팅' },
    { id: 5, title: '핵심인재 정의 및 관리', description: '우리 조직의 성과를 견인하는 핵심인재를 정의하고,\n이들의 유지 및 성장을 지원합니다.', q_categories: ['Q3'], solution_category: '경영지원 (Growth OS)' },
    { id: 6, title: '직무역량 모델링 및 진단', description: '직무별 필요역량을 체계적으로 도출하고, 구성원 역량 수준을\n진단하여 육성 계획을 수립합니다.', q_categories: ['Q3'], solution_category: '진단과 분석' },
    { id: 7, title: '조직문화 진단 서베이', description: '데이터 기반 서베이를 통해 우리 조직문화의\n강점과 약점을 객관적으로 진단합니다.', q_categories: ['Q4'], solution_category: '진단과 분석' },
    { id: 8, title: '수평적 조직문화 구축 워크샵', description: '심리적 안정감을 바탕으로 자유로운 의견 교환과\n빠른 실행을 촉진하는 문화를 만듭니다.', q_categories: ['Q4'], solution_category: '역량 개발' },
    { id: 9, title: 'OKR 기반 성과관리 시스템 도입', description: '전사 목표와 팀, 개인의 목표를 정렬하여\n성과를 극대화하는 OKR 시스템 구축을 지원합니다.', q_categories: ['Q5'], solution_category: '경영지원 (Growth OS)' },
    { id: 10, title: '성과 피드백 시스템 설계', description: '일회성 평가가 아닌, 상시적이고 건설적인\n피드백이 오가는 시스템을 설계합니다.', q_categories: ['Q5', 'Q4'], solution_category: '역량 개발' },
];

const qFilters: { key: string; label: string }[] = [
    { key: 'All', label: '전체보기' },
    { key: 'Q1', label: '리더십' },
    { key: 'Q2', label: '조직구조' },
    { key: 'Q3', label: '인재와 역량' },
    { key: 'Q4', label: '문화와 몰입' },
    { key: 'Q5', label: '성과관리' },
];

const solutionCategories: SolutionCategory[] = ["진단과 분석", "전략 컨설팅", "역량 개발", "경영지원 (Growth OS)"];

const InteractiveSection: React.FC = () => {
    const { openContactModal } = useModal();
    const { navigate } = useInternalNavigation();
    const [activeQ, setActiveQ] = useState<string>("All");
    const [portfolio, setPortfolio] = useState<Solution[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });

    const groupedSolutions = useMemo(() => {
        const filtered = allSolutions.filter(s => {
            const qMatch = activeQ === "All" || s.q_categories.includes(activeQ as QCategory);
            const searchMatch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.description.toLowerCase().includes(searchQuery.toLowerCase());
            return qMatch && searchMatch;
        });

        return solutionCategories.reduce((acc, category) => {
            const items = filtered.filter(s => s.solution_category === category);
            if (items.length > 0) {
                acc[category] = items;
            }
            return acc;
        }, {} as Record<SolutionCategory, Solution[]>);

    }, [activeQ, searchQuery]);

    const togglePortfolio = (solution: Solution) => {
        setPortfolio(prev =>
            prev.find(p => p.id === solution.id)
                ? prev.filter(p => p.id !== solution.id)
                : [...prev, solution]
        );
    };

    const handlePortfolioSubmit = () => {
        const portfolioItems = portfolio.map(s => `- ${s.title} (${s.solution_category})`).join('\n');
        const message = portfolio.length > 0
            ? `솔루션 포트폴리오 문의:\n\n${portfolioItems}`
            : '솔루션에 대해 문의하고 싶습니다.';
        openContactModal(message);
        setShowModal(false);
    };

    return (
        <section className="py-24 md:py-32 bg-bg-primary overflow-hidden">
            <Container ref={sectionRef}>
                <div className={`text-center max-w-4xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-4 leading-tight tracking-tight-title">
                        <span className="md:hidden">우리 조직의 성장에 필요한<br/>솔루션을 찾아보세요</span>
                        <span className="hidden md:inline">우리 조직의 성장에 필요한 솔루션을 찾아보세요</span>
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                        <span className="md:hidden">
                            조직의 성장을 위해 가장 먼저<br/>
                            논의하고 싶은 주제를 선택하거나,<br/>
                            관련 키워드를 입력해 보세요.<br/>
                            선택한 솔루션이 우리의 첫 번째<br/>
                            대화 주제가 됩니다.
                        </span>
                        <span className="hidden md:inline">
                            조직의 성장을 위해 가장 먼저 논의하고 싶은 주제를 선택하거나, 관련 키워드를 입력해 보세요.<br />선택한 솔루션이 우리의 첫 번째 대화 주제가 됩니다.
                        </span>
                    </p>
                </div>

                {/* Search & Filter Section */}
                <div className="sticky top-[99px] z-20 bg-white/90 backdrop-blur-lg py-4 mb-10 border-y border-border-light">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                         <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {qFilters.map(item => (
                                <button
                                    key={item.key}
                                    onClick={() => setActiveQ(item.key)}
                                    className={`px-5 py-2.5 text-body-sm font-semibold rounded-full transition-colors duration-300 leading-none ${activeQ === item.key ? 'bg-apx-growth-green text-white' : 'bg-apx-growth-green/10 text-apx-deep-growth hover:bg-apx-growth-green/20'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-auto md:min-w-[320px]">
                            <input 
                                type="text"
                                placeholder="키워드 검색 (예: OKR, 조직문화)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-5 pr-12 py-3 border border-border-light rounded-full focus:outline-none focus:ring-2 focus:ring-apx-growth-green text-body-base"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-5 top-1/2 -translate-y-1/2 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                
                {/* Solution List */}
                 <div className="space-y-16">
                    {Object.keys(groupedSolutions).length > 0 ? (
                        Object.entries(groupedSolutions).map(([category, solutions]) => (
                            <div key={category}>
                                <h3 className="text-h4 font-bold text-text-primary mb-8 border-b-2 border-apx-growth-green pb-4">{category}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {solutions.map(solution => {
                                        const isInPortfolio = portfolio.some(p => p.id === solution.id);
                                        return (
                                            <div key={solution.id} className="bg-white p-6 rounded-2xl soft-shadow-md flex flex-col justify-between hover:soft-shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div>
                                                    <div className="flex justify-between items-center mb-3">
                                                        <div className="flex items-center flex-wrap gap-2">
                                                            {solution.q_categories.map(q => {
                                                                 const detail = qCategoryDetails[q];
                                                                 if (!detail) return null;
                                                                 const isActive = activeQ === q;
                                                                 return (
                                                                     <span key={q} className={`text-caption py-1 px-3 rounded-full font-semibold ${isActive ? detail.bg.replace('/10', '/20') : detail.bg} ${detail.text}`}>{detail.label}</span>
                                                                 );
                                                            })}
                                                        </div>
                                                        <button
                                                            onClick={() => navigate('/solutions')}
                                                            className="shrink-0 px-3 py-1.5 bg-apx-growth-green text-white font-semibold text-caption leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300 whitespace-nowrap cursor-pointer"
                                                            aria-label={`${solution.title} 자세히 보기`}
                                                        >
                                                            자세히 보기
                                                        </button>
                                                    </div>
                                                    <h4 className="text-h5 font-bold text-text-primary leading-tight tracking-tight-title mt-[18px] mb-1">{solution.title}</h4>
                                                    <p className="text-body-sm text-text-secondary mb-4 leading-relaxed whitespace-pre-line">{solution.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => togglePortfolio(solution)}
                                                    className={`w-full mt-4 px-4 py-2.5 text-body-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 leading-none ${isInPortfolio ? 'bg-white text-error border-2 border-error hover:bg-red-50' : 'bg-apx-growth-green/10 text-apx-deep-growth border-2 border-transparent hover:bg-apx-growth-green/20'}`}
                                                >
                                                    {isInPortfolio 
                                                        ? <><span className="text-xl leading-none">-</span> 포트폴리오에서 제거</> 
                                                        : <><span className="text-xl leading-none">+</span> 포트폴리오에 추가</>
                                                    }
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20">
                             <img src="https://storage.googleapis.com/apxhomepage-asset/Search_Illustration_Empty.png" alt="No results found" className="w-48 mx-auto mb-6" />
                            <p className="text-body-lg text-text-secondary">해당 조건에 맞는 솔루션이 없습니다.</p>
                        </div>
                    )}
                </div>
            </Container>

            {/* Floating Portfolio Button */}
            <FloatingPortfolioButton
                count={portfolio.length}
                onClick={() => setShowModal(true)}
            />

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)} aria-modal="true" role="dialog">
                    <div className="bg-white rounded-2xl soft-shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                        <div className="p-6 border-b border-border-light flex justify-between items-center">
                            <h3 className="text-h4 font-bold text-strategy-blue leading-tight tracking-tight-title">나의 솔루션 포트폴리오</h3>
                            <button onClick={() => setShowModal(false)} className="text-text-tertiary hover:text-text-primary text-3xl font-light" aria-label="Close modal">&times;</button>
                        </div>
                        <div className="p-6 overflow-y-auto">
                            {portfolio.length > 0 ? (
                                <ul className="space-y-4">
                                    {portfolio.map(s => (
                                        <li key={s.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                            <div>
                                                <p className="font-bold text-body-base text-text-primary">{s.title}</p>
                                                <p className={`text-body-sm font-semibold ${categoryStyles[s.solution_category].text}`}>{s.solution_category}</p>
                                            </div>
                                            <button onClick={() => togglePortfolio(s)} className="text-error hover:text-red-700 text-sm font-semibold">제거</button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center text-text-secondary py-8">선택된 솔루션이 없습니다. '일반 문의하기'를 통해 궁금한 점을 알려주세요.</p>
                            )}
                        </div>
                        <div className="p-6 border-t border-border-light mt-auto bg-gray-50/70 rounded-b-2xl">
                            <button 
                                onClick={handlePortfolioSubmit}
                                className="w-full bg-apx-growth-green text-white py-3 rounded-full font-semibold text-body-base leading-none hover:bg-apx-deep-growth transition-colors"
                            >
                                {portfolio.length > 0 ? `포트폴리오 문의하기 (${portfolio.length})` : '일반 문의하기'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default InteractiveSection;