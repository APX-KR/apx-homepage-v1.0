
import React from 'react';
import { Solution } from '../../types';
import { useSolutions } from '../../contexts/SolutionContext';
import { useModal } from '../../contexts/ModalContext';

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const categoryStyles: { [key: string]: { bg: string; text: string; border: string; } } = {
    "진단과 분석": { bg: 'bg-diagnosis-blue/10', text: 'text-diagnosis-blue', border: 'border-diagnosis-blue' },
    "전략 컨설팅": { bg: 'bg-strategy-blue/10', text: 'text-strategy-blue', border: 'border-strategy-blue' },
    "역량 개발": { bg: 'bg-talent-orange/10', text: 'text-talent-orange', border: 'border-talent-orange' },
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose }) => {
    const { portfolio, togglePortfolioItem } = useSolutions();
    const { openContactModal } = useModal();

    if (!isOpen) {
        return null;
    }
    
    const handlePortfolioSubmit = () => {
        const portfolioItems = portfolio.map(s => `- ${s.solution_name_kr} (${s.solution_category_gnb})`).join('\n');
        const message = portfolio.length > 0
            ? `솔루션 포트폴리오 문의:\n\n${portfolioItems}`
            : '솔루션에 대해 문의하고 싶습니다.';
        openContactModal(message);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose} aria-modal="true" role="dialog">
            <div className="bg-white rounded-2xl soft-shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 border-b border-border-light flex justify-between items-center">
                    <h3 className="text-h4 font-bold text-text-primary leading-tight tracking-tight-title">나의 솔루션 포트폴리오</h3>
                    <button onClick={onClose} className="text-text-tertiary hover:text-text-primary text-3xl font-light" aria-label="Close modal">&times;</button>
                </div>
                <div className="p-6 overflow-y-auto">
                    {portfolio.length > 0 ? (
                        <ul className="space-y-4">
                            {portfolio.map(s => (
                                <li key={s.solution_code} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                    <div>
                                        <p className="font-bold text-body-base text-text-primary">{s.solution_name_kr}</p>
                                        <p className={`text-body-sm font-semibold ${categoryStyles[s.solution_category_gnb]?.text || 'text-text-secondary'}`}>{s.solution_category_gnb}</p>
                                    </div>
                                    <button onClick={() => togglePortfolioItem(s)} className="text-error hover:text-red-700 text-sm font-semibold">제거</button>
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
    );
};

export default PortfolioModal;