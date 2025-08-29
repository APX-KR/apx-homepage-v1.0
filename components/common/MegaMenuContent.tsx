import React from 'react';

const solutionMegaMenu = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">Approach</h3>
        </div>
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">People & Organization</h3>
            <ul className="space-y-3">
                {['리더십 역량', '인재경영', '조직운영', '문화혁신', '성과관리', '인사분석'].map(item => (
                    <li key={item}><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">{item}</a></li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">Startup</h3>
             <ul className="space-y-3">
                <li><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">경영관리</a></li>
            </ul>
        </div>
    </div>
);

const academyMegaMenuData = {
    "리더십 아카데미": ["차세대 리더 과정", "신임팀장 과정", "임원 코칭"],
    "공통역량 아카데미": ["문제해결 과정", "커뮤니케이션 스킬", "데이터 리터러시"],
    "직무전문 아카데미": ["HR 전문가 과정", "영업대표 과정", "마케터 과정"],
    "조직문화 아카데미": ["조직문화 진단/워크샵", "DE&I 프로그램", "심리적 안정감 워크샵"],
};

const academyMegaMenu = (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {Object.entries(academyMegaMenuData).map(([title, items]) => (
            <div key={title}>
                <h3 className="text-caption font-semibold text-text-secondary tracking-wider uppercase mb-4">{title}</h3>
                <ul className="space-y-3">
                    {items.map(item => (
                        <li key={item}><a href="#" className="block text-body-base text-strategy-blue font-medium hover:text-apx-growth-green">{item}</a></li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export const megaMenuContent: { [key: string]: React.ReactNode } = {
    solutions: solutionMegaMenu,
    academy: academyMegaMenu,
};
