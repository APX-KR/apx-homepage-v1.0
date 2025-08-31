'use client';

import React from 'react';

interface FloatingPortfolioButtonProps {
    count: number;
    onClick: () => void;
}

const FloatingPortfolioButton: React.FC<FloatingPortfolioButtonProps> = ({ count, onClick }) => {
    // This calculation places the button 40px to the right of the main content container on wide screens,
    // while maintaining a safe 24px margin on smaller screens.
    const responsivePositionStyle = {
        right: 'max(24px, calc((100vw - 1280px) / 2 - 40px))',
    };

    return (
        <div className="fixed bottom-8 z-40" style={responsivePositionStyle}>
            <button
                onClick={onClick}
                aria-label={`나의 솔루션 포트폴리오 보기, ${count}개 항목`}
                className={`
                    group relative flex items-center justify-end
                    w-16 h-16 bg-apx-growth-green rounded-full shadow-lg
                    transition-all duration-300 ease-in-out
                    hover:w-72
                    ${count > 0 ? 'animate-pulse' : ''}
                `}
            >
                {/* 텍스트는 호버 시 나타남 */}
                <span className="
                    absolute left-8
                    text-white font-bold text-body-base whitespace-nowrap
                    opacity-0
                    transform
                    -translate-x-2
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    group-hover:delay-150
                ">
                    나의 솔루션 포트폴리오
                </span>

                {/* 아이콘은 항상 오른쪽 16 너비 영역에 위치 */}
                <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                {/* 카운트 배지 */}
                {count > 0 && (
                    <div className="
                        absolute top-0 right-0
                        w-7 h-7 bg-white rounded-full
                        flex items-center justify-center
                        text-apx-growth-green font-bold text-sm
                        pointer-events-none z-10 shadow
                    ">
                        {count}
                    </div>
                )}
            </button>
        </div>
    );
};

export default FloatingPortfolioButton;