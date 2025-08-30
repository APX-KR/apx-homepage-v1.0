import React from 'react';

const perspectiveMegaMenu = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <a href="#" className="group block">
            <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">철학</h3>
            <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'APX가 어떻게 문제를 정의하고 시장을 분석하며<br />해결책에 접근하는지에 대한 핵심 철학' }} />
        </a>
        <a href="#" className="group block">
            <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">방법론</h3>
            <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: "'생각의 파트너'로서 APX가 사용하는<br />분석 프레임워크와 문제 해결 접근법" }} />
        </a>
        <a href="#" className="group block">
            <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">프로세스</h3>
            <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: '진단부터 실행, 내재화까지 아이디어를<br />실질적인 성과로 바꾸는 3단계 과정' }} />
        </a>
    </div>
);


const projectSolutionsMegaMenu = (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
                <h3 className="text-h5 font-bold text-text-primary mb-4">진단과 분석</h3>
                <ul className="space-y-3 mt-4">
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">조직문화 진단</a></li>
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">리더십 역량 진단</a></li>
                </ul>
                <a href="#" className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</a>
            </div>
            <div>
                <h3 className="text-h5 font-bold text-text-primary mb-4">전략 컨설팅</h3>
                <ul className="space-y-3 mt-4">
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">OKR 체계 설계</a></li>
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">핵심인재 육성 전략</a></li>
                </ul>
                <a href="#" className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</a>
            </div>
            <div>
                <h3 className="text-h5 font-bold text-text-primary mb-4">역량 개발</h3>
                <ul className="space-y-3 mt-4">
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">리더십 아카데미</a></li>
                    <li><a href="#" className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">변화관리 워크숍</a></li>
                </ul>
                <a href="#" className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</a>
            </div>
        </div>
    </div>
);

export const megaMenuContent: { [key: string]: React.ReactNode } = {
    perspective: perspectiveMegaMenu,
    projectSolutions: projectSolutionsMegaMenu,
};