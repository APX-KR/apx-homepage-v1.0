
import React from 'react';
import { useModal } from '../../contexts/ModalContext';

const DetailSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => {
    if (!children) return null;
    return (
        <div>
            <h4 className="text-body-base font-bold text-text-primary mb-2">{title}</h4>
            <div className="text-body-base text-text-secondary whitespace-pre-line bg-gray-50 p-4 rounded-lg border border-border-light">
                {children}
            </div>
        </div>
    );
};

const SolutionDetailModal: React.FC = () => {
    const { isSolutionModalOpen, closeSolutionModal, selectedSolution, openContactModal } = useModal();

    if (!isSolutionModalOpen || !selectedSolution) {
        return null;
    }
    
    const handleContactClick = () => {
        closeSolutionModal();
        openContactModal(`솔루션 문의: ${selectedSolution.solution_name_kr}`);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[105] flex items-center justify-center p-4" onClick={closeSolutionModal} aria-modal="true" role="dialog">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="p-6 border-b border-border-light sticky top-0 bg-white rounded-t-2xl z-10 break-keep">
                    <button onClick={closeSolutionModal} className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary text-3xl font-light z-10" aria-label="Close modal">&times;</button>
                    <p className="text-apx-growth-green font-semibold text-body-sm">{selectedSolution.solution_category_gnb} &gt; {selectedSolution.solution_category_5q}</p>
                    <h3 className="text-h4 font-bold text-text-primary leading-tight tracking-tight-title mt-1">{selectedSolution.solution_name_kr}</h3>
                    <p className="text-body-base text-text-tertiary">{selectedSolution.solution_name_en}</p>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 break-keep">
                    <p className="text-body-base text-text-secondary leading-relaxed border-l-4 border-apx-growth-green pl-4">
                        {selectedSolution.solution_summary}
                    </p>
                    
                    <DetailSection title="어떤 문제를 해결하나요?">
                        {selectedSolution.problem_definition}
                    </DetailSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <DetailSection title="어떻게 진행되나요?">
                            {selectedSolution.modules}
                        </DetailSection>
                         <DetailSection title="어떤 방법론을 사용하나요?">
                            {selectedSolution.methodologies}
                        </DetailSection>
                    </div>

                    <DetailSection title="무엇을 얻을 수 있나요?">
                        {selectedSolution.deliverables}
                    </DetailSection>
                    
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DetailSection title="프로젝트 정보">
                           {selectedSolution.project_scope}
                        </DetailSection>
                        <DetailSection title="누구를 위한 솔루션인가요?">
                           {selectedSolution.project_target}
                        </DetailSection>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border-light mt-auto bg-gray-50/70 sticky bottom-0 rounded-b-2xl">
                    <button 
                        onClick={handleContactClick}
                        className="w-full bg-apx-growth-green text-white py-3 rounded-full font-semibold text-body-base leading-none hover:bg-apx-deep-growth transition-colors"
                    >
                       {`'${selectedSolution.solution_name_kr}' 문의하기`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SolutionDetailModal;