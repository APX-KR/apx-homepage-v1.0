import React from 'react';
import Link from 'next/link';

const PerspectiveMegaMenu = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Link href='/perspective#philosophy' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">철학</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: 'APX가 어떻게 문제를 정의하고 시장을 분석하며<br />해결책에 접근하는지에 대한 핵심 철학' }} />
            </Link>
            <Link href='/perspective#methodology' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">방법론</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: "'생각의 파트너'로서 APX가 사용하는<br />분석 프레임워크와 문제 해결 접근법" }} />
            </Link>
            <Link href='/perspective#process' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">프로세스</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: '진단부터 실행, 내재화까지 아이디어를<br />실질적인 성과로 바꾸는 3단계 과정' }} />
            </Link>
        </div>
    );
};


const ProjectSolutionsMegaMenu = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                    <h3 className="text-h5 font-bold text-text-primary mb-4">진단과 분석</h3>
                    <ul className="space-y-3 mt-4">
                        <li><Link href='/solutions#diagnose-structure' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">조직구조 진단</Link></li>
                        <li><Link href='/solutions#diagnose-culture' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">조직문화 진단</Link></li>
                        <li><Link href='/solutions#diagnose-leadership' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">리더십 코어 역량 진단</Link></li>
                    </ul>
                    <Link href='/solutions#diagnose' className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</Link>
                </div>
                <div>
                    <h3 className="text-h5 font-bold text-text-primary mb-4">전략 컨설팅</h3>
                    <ul className="space-y-3 mt-4">
                        <li><Link href='/solutions#strategy-mvc' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">M.V.C 재정립</Link></li>
                        <li><Link href='/solutions#strategy-org-redesign' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">조직구조 개편 및 R&amp;R 재설계</Link></li>
                        <li><Link href='/solutions#strategy-role-based-hr' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">직무 중심 인사관리 체계 구축</Link></li>
                        <li><Link href='/solutions#strategy-workforce-planning' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">전략적 인력계획 수립</Link></li>
                        <li><Link href='/solutions#strategy-learning-system' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">전사 교육체계 설계</Link></li>
                    </ul>
                    <Link href='/solutions#strategy' className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</Link>
                </div>
                <div>
                    <h3 className="text-h5 font-bold text-text-primary mb-4">역량 개발</h3>
                    <ul className="space-y-3 mt-4">
                        <li><Link href='/solutions#development-new-leader' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">신임 리더 온보딩 프로그램</Link></li>
                        <li><Link href='/solutions#development-coaching-leadership' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">성장 촉진을 위한 코칭 리더십</Link></li>
                        <li><Link href='/solutions#development-okr-leadership' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">목표 기반 성과관리 리더십 워크숍</Link></li>
                        <li><Link href='/solutions#development-onboarding' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">신규/경력 입사자 온보딩 프로그램</Link></li>
                        <li><Link href='/solutions#development-academy' className="block text-body-base text-text-secondary font-medium hover:text-apx-growth-green">공통역량 아카데미</Link></li>
                    </ul>
                    <Link href='/solutions#development' className="inline-block text-body-sm font-bold text-apx-growth-green hover:text-apx-deep-growth mt-4">자세히 보기 &gt;</Link>
                </div>
            </div>
        </div>
    );
};

const BpoServicesMegaMenu = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Link href='/services#cfo-service' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">CFO 구독 서비스</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: '투자 유치, 재무 모델링 등 전문 CFO가<br/>필요한 모든 재무 의사결정을 지원합니다.' }} />
            </Link>
            <Link href='/services#coo-service' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">COO 구독 서비스</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: '인사, 총무, 법무 등 회사의 운영 시스템을 설계하여<br/>조직이 매끄럽게 돌아가도록 만듭니다.' }} />
            </Link>
            <Link href='/services#package-service' className="group block">
                <h3 className="text-h5 font-bold text-text-primary mb-2 group-hover:text-apx-growth-green transition-colors">경영지원 패키지</h3>
                <p className="text-body-sm text-text-secondary mt-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: '법인 설립부터 MVP 개발, 초기 채용까지<br/>성장에 필요한 모든 것을 맞춤형으로 제공합니다.' }} />
            </Link>
        </div>
    );
};

export const megaMenuComponents = {
    perspective: PerspectiveMegaMenu,
    projectSolutions: ProjectSolutionsMegaMenu,
    bpoServices: BpoServicesMegaMenu,
};