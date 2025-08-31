
import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import { useModal } from '../../contexts/ModalContext';
import { useVisibility } from '../../hooks/useVisibility';
import FloatingPortfolioButton from '../common/FloatingPortfolioButton';
import { useSolutions } from '../../contexts/SolutionContext';
import { Solution } from '../../types';
import PortfolioModal from '../common/PortfolioModal';

const categoryStyles: { [key: string]: { bg: string; text: string; border: string; } } = {
    "진단과 분석": { bg: 'bg-diagnosis-blue/10', text: 'text-diagnosis-blue', border: 'border-diagnosis-blue' },
    "전략 컨설팅": { bg: 'bg-strategy-blue/10', text: 'text-strategy-blue', border: 'border-strategy-blue' },
    "역량 개발": { bg: 'bg-talent-orange/10', text: 'text-talent-orange', border: 'border-talent-orange' },
};

const qCategoryDetails: { [key: string]: { label: string; bg: string; text: string; } } = {
    '리더십': { label: '리더십', bg: 'bg-strategy-blue/10', text: 'text-strategy-blue' },
    '조직구조': { label: '조직구조', bg: 'bg-process-gray/10', text: 'text-process-gray' },
    '인재와 역량': { label: '인재와 역량', bg: 'bg-performance-green/10', text: 'text-performance-green' },
    '문화와 몰입': { label: '문화와 몰입', bg: 'bg-culture-coral/10', text: 'text-culture-coral' },
    '성과관리': { label: '성과관리', bg: 'bg-talent-orange/10', text: 'text-talent-orange' },
};

const qFilters: { key: string; label: string }[] = [
    { key: 'All', label: '전체보기' },
    { key: '리더십', label: '리더십' },
    { key: '조직구조', label: '조직구조' },
    { key: '인재와 역량', label: '인재와 역량' },
    { key: '문화와 몰입', label: '문화와 몰입' },
    { key: '성과관리', label: '성과관리' },
];

const InteractiveSection: React.FC = () => {
    const { openSolutionModal } = useModal();
    const { solutions, loading, portfolio, togglePortfolioItem, isItemInPortfolio } = useSolutions();
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeQ, setActiveQ] = useState<string>('All');
    
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.05 });

    const solutionCategories = useMemo(() => {
        if (loading) return [];
        // Define a specific order for GNB categories
        const order: Solution['solution_category_gnb'][] = ["진단과 분석", "전략 컨설팅", "역량 개발"];
        const categoriesInSolutions = [...new Set(solutions.map(s => s.solution_category_gnb))];
        return order.filter(cat => categoriesInSolutions.includes(cat));
    }, [solutions, loading]);

    const groupedSolutions = useMemo(() => {
        if (loading) return {};
        
        const filtered = solutions.filter(s => {
            const qMatch = activeQ === "All" || s.solution_category_5q === activeQ;
            const searchMatch = s.solution_name_kr.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                s.solution_summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                s.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return qMatch && searchMatch;
        });

        return solutionCategories.reduce((acc, category) => {
            const items = filtered.filter(s => s.solution_category_gnb === category);
            if (items.length > 0) {
                acc[category] = items;
            }
            return acc;
        }, {} as Record<string, Solution[]>);

    }, [activeQ, searchQuery, solutions, loading, solutionCategories]);

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
                    {loading ? (
                        <div className="text-center py-20 text-text-secondary">솔루션을 불러오는 중입니다...</div>
                    ) : Object.keys(groupedSolutions).length > 0 ? (
                        Object.entries(groupedSolutions).map(([category, solutions]) => (
                            <div key={category}>
                                <h3 className="text-h4 font-bold text-text-primary mb-8 border-b-2 border-apx-growth-green pb-4">{category}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {solutions.map(solution => {
                                        const isInPortfolio = isItemInPortfolio(solution);
                                        const detail = qCategoryDetails[solution.solution_category_5q];
                                        return (
                                            <div key={solution.solution_code} className="bg-white p-6 rounded-2xl soft-shadow-md flex flex-col justify-between hover:soft-shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                <div>
                                                    <div className="flex justify-between items-start mb-3">
                                                         {detail && <span className={`text-caption py-1 px-3 rounded-full font-semibold ${detail.bg} ${detail.text}`}>{detail.label}</span>}
                                                        <button
                                                            onClick={() => openSolutionModal(solution)}
                                                            className="shrink-0 px-3 py-1.5 bg-apx-growth-green text-white font-semibold text-caption leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300 whitespace-nowrap cursor-pointer"
                                                            aria-label={`${solution.solution_name_kr} 자세히 보기`}
                                                        >
                                                            자세히 보기
                                                        </button>
                                                    </div>
                                                    <h4 className="text-h5 font-bold text-text-primary leading-tight tracking-tight-title mt-[18px] mb-1">{solution.solution_name_kr}</h4>
                                                    <p className="text-body-sm text-text-secondary mb-4 leading-relaxed whitespace-pre-line">{solution.solution_summary}</p>
                                                </div>
                                                <button
                                                    onClick={() => togglePortfolioItem(solution)}
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
            <PortfolioModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default InteractiveSection;
