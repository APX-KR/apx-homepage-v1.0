'use client';

import React from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';

const solutionAreas = [
  {
    engTitle: 'Diagnose',
    mainTitle: '진단과 분석',
    coreValue: '감이 아닌 데이터로 보는 조직의 현주소',
    examples: ['조직 진단', '조직문화 진단', '리더십 역량 진단', '구성원 몰입도(eNPS) 서베이'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>
  },
  {
    engTitle: 'Design',
    mainTitle: '전략 컨설팅',
    coreValue: '미래 성장을 위한 최적의 청사진 설계',
    examples: ['MVC 수립 워크숍', '조직 구조 설계', '적정인원 산정', '직무 분석 및 역량 모델링'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="m23.268.716c-.975-.975-2.561-.976-3.535,0l-1.592,1.595s-.008.004-.011.007c-.003.003-.004.008-.007.011l-5.804,5.817c-.838.838-1.318,1.997-1.318,3.182v1.172c0,.276.224.5.5.5h1.172c1.185,0,2.344-.48,3.182-1.318l7.414-7.431c.473-.473.732-1.101.732-1.768s-.26-1.296-.732-1.768Zm-8.121,10.259c-.651.651-1.554,1.025-2.475,1.025h-.672v-.672c0-.921.374-1.823,1.025-2.475l5.46-5.472,2.121,2.121-5.46,5.472Zm7.414-7.431l-1.248,1.25-2.121-2.121,1.248-1.25c.584-.584,1.537-.584,2.121,0,.283.283.439.659.439,1.061s-.156.777-.439,1.061Zm.115,12.47c.179.644.096,1.318-.234,1.899-.328.581-.864.999-1.508,1.178-.645.178-1.317.096-1.899-.235l-.751-.425c-1.063,1.041-2.358,1.796-3.783,2.208v.861c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-.861c-1.425-.412-2.72-1.167-3.783-2.208l-.752.426c-.582.33-1.258.409-1.898.234-.644-.179-1.18-.597-1.509-1.179-.329-.58-.412-1.255-.233-1.898.178-.644.597-1.18,1.178-1.509l.748-.423c-.166-.691-.25-1.391-.25-2.082s.084-1.391.25-2.082l-.748-.423c-.581-.33-1-.865-1.178-1.509-.179-.644-.096-1.318.234-1.899.328-.581.864-.999,1.508-1.178.645-.176,1.317-.096,1.899.235l.751.425c1.063-1.041,2.358,1.796,3.783-2.208v-.861c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v1.246c0,.23-.158.432-.383.486-1.513.366-2.878,1.162-3.947,2.303-.159.168-.41.205-.611.094l-1.086-.614c-.349-.198-.754-.246-1.14-.142-.386.107-.707.358-.904.707-.198.349-.248.753-.141,1.139.106.387.357.708.707.906l1.082.612c.201.114.298.351.234.572-.207.727-.312,1.464-.312,2.19s.104,1.464.312,2.19c.063.222-.033.458-.234.572l-1.083.613c-.349.197-.6.519-.706.904-.107.387-.058.791.14,1.139.198.35.52.601.905.708.386.106.79.057,1.139-.141l1.087-.615c.202-.11.453-.074.611.094,1.069,1.141,2.435,1.937,3.947,2.303.225.055.383.256.383.486v1.246c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-1.246c0-.23.158-.432-.383.486,1.513-.366,2.878-1.162,3.947-2.303.158-.169.409-.206.611-.094l1.086.614c.35.198.755.248,1.14.142.386-.107.707.358.904.707.198-.349.248-.753-.141-1.14-.106-.386-.357-.707-.706-.904l-1.083-.613c-.201-.114-.298-.351-.234-.572.207-.727.312,1.464.312,2.19,0-.471-.044-.944-.129-1.409-.051-.271.129-.532.4-.582.267-.054.532.128.582.4.098.524.146,1.06.146,1.591,0,.691-.084,1.391-.25,2.082l.748.423c.581.329,1,.865,1.178,1.509Zm-14.398-5.48c-.444,1.128-.349,2.402.269,3.59.294.564.767,1.037,1.331,1.331,1.187.617,2.461.712,3.59.269,1.079-.426,1.92-1.297,2.306-2.39.094-.26.379-.396.639-.305.26.093.396.378.305.639-.483,1.366-1.534,2.454-2.883,2.985-.587.232-1.204.347-1.829.347-.866,0-1.747-.221-2.588-.658-.746-.387-1.37-1.011-1.757-1.757-.754-1.447-.864-3.017-.312-4.417.531-1.349,1.619-2.399,2.985-2.883.261-.093.545.044.639.305.092.261-.045.546-.305.639-1.093.386-1.964,1.227-2.39,2.306Z"/>
    </svg>
  },
  {
    engTitle: 'EXECUTE & INTERNALIZE',
    mainTitle: '역량 개발',
    coreValue: '사람과 팀의 행동 변화 촉진',
    examples: ['리더십 프로그램', '공통역량 아카데미', '직무전문 아카데미', '조직문화 프로그램'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="m19.487,5c1.379,0,2.5-1.121,2.5-2.5s-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5,1.121,2.5,2.5,2.5Zm0-4c.827,0,1.5.673,1.5,1.5s-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5.673-1.5,1.5-1.5Zm4.513,8.5v4c0,1.391-.822,2.585-2,3.149v6.851c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-6.551c-.165.024-.329.051-.5.051h-2.5v6.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-14c0-.276.224-.5.5-.5s.5.224.5.5v6.5h2.5c1.379,0,2.5-1.121,2.5-2.5v-4c0-1.379-1.121-2.5-2.5-2.5h-2.823c-.639,0-1.247-.241-1.712-.679L10.157.864c-.201-.189-.211-.506-.021-.707.19-.201.506-.21.707-.021l5.808,5.457c.278.263.644.407,1.026.407h2.823c1.93,0,3.5,1.57,3.5,3.5Zm-17.157,7.136c.201.189.211.506.021.707-.099.104-.231.157-.364.157-.123,0-.246-.045-.343-.136l-2.157-2.033v8.168c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-8.169l-2.157,2.033c-.201.189-.517.181-.707-.021-.189-.201-.18-.518.021-.707l2.382-2.244c.496-.498,1.415-.509,1.933.011l2.371,2.233Zm7-5c.201.189.211.506.021.707-.099.104-.231.157-.364.157-.123,0-.246-.045-.343-.136l-2.157-2.033v13.168c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-13.169l-2.157,2.033c-.201.188-.518.18-.707-.021s-.18-.518.021-.707l2.382-2.244c.496-.498,1.415-.509,1.933.011l2.371,2.233Z"/>
    </svg>
  },
  {
    engTitle: 'For STARTUP',
    mainTitle: '경영지원 (Growth OS)',
    coreValue: '핵심에 집중할 수 있는 환경 조성',
    examples: ['법인 설립', 'MVP 개발 지원 서비스', 'CFO 구독 서비스', 'COO 구독 서비스'],
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M20.5,0h-4.5c-1.103,0-2,.897-2,2v1.785c0,.158,.075,.308,.202,.401,.127,.096,.291,.124,.443,.077,.595-.182,1.119-.264,1.354-.264,.551,0,1,.448,1,1s-.449,1-1,1c-.235,0-.759-.082-1.354-.264-.153-.047-.316-.02-.443,.077-.127,.094-.202,.243-.202,.401v1.785c0,1.103,.897,2,2,2h1.136c-.086,.389-.136,.744-.136,1,0,1.103,.897,2,2,2s2-.897,2-2c0-.256-.05-.611-.136-1h1.136c1.103,0,2-.897,2-2V3.5c0-1.93-1.57-3.5-3.5-3.5Zm2.5,8c0,.552-.449,1-1,1h-1.785c-.158,0-.307,.075-.402,.202-.094,.127-.123,.292-.077,.443,.181,.595,.263,1.119,.263,1.354,0,.552-.449,1-1,1s-1-.448-1-1c0-.235,.083-.76,.263-1.354,.046-.151,.018-.316-.077-.443-.095-.127-.244-.202-.402-.202h-1.785c-.551,0-1-.448-1-1v-1.137c.389,.087,.745,.137,1,.137,1.103,0,2-.897,2-2s-.897-2-2-2c-.255,0-.611,.05-1,.137v-1.137c0-.552,.449-1,1-1h4.5c1.378,0,2.5,1.121,2.5,2.5v4.5Zm-6,6h-1.785c-.158,0-.307,.075-.402,.202-.094,.127-.123,.292-.077,.443,.181,.595,.263,1.119,.263,1.354,0,.552-.449,1-1,1s-1-.448-1-1c0-.235,.083-.76,.263-1.354,.046-.151,.018-.316-.077-.443-.095-.127-.244-.202-.402-.202h-2.785V7c0-1.103-.897-2-2-2H3.5c-1.93,0-3.5,1.57-3.5,3.5v12c0,1.93,1.57,3.5,3.5,3.5H15.5c1.93,0,3.5-1.57,3.5-3.5v-4.5c0-1.103-.897-2-2-2ZM1,8.5c0-1.379,1.122-2.5,2.5-2.5h4.5c.551,0,1,.448,1,1v7h-2.136c.086-.389,.136-.744,.136-1,0-1.103-.897-2-2-2s-2,.897-2,2c0,.256,.05,.611,.136,1H1v-5.5Zm8,14.5H3.5c-1.378,0-2.5-1.121-2.5-2.5v-5.5H3.785c.158,0,.307,.075,.402-.202,.094,.127,.123,.292-.077-.443-.181-.595-.263-1.119-.263-1.354,0,.552,.449-1,1-1s1,.448,1,1c0,.235-.083-.76-.263,1.354-.046-.151-.018-.316-.077-.443,.095,.127,.244-.202,.402-.202h2.785v2.137c-.389-.087-.745-.137-1-.137-1.103,0-2,.897-2,2s.897,2,2,2c.255,0,.611,.05,1-.137v2.137Zm9-2.5c0,1.379-1.122,2.5-2.5,2.5h-5.5v-2.785c0-.158-.075-.308-.202-.401-.127-.096-.292-.123-.443-.077-.595,.182-1.119-.264-1.354,.264-.551,0-1-.448-1-1s.449-1,1-1c.235,0,.759,.082,1.354,.264,.151,.045,.315,.018,.443-.077,.127-.094,.202-.243,.202-.401v-2.785h2.136c-.086,.389-.136,.744-.136,1,0,1.103,.897,2,2,2s2-.897,2-2c0-.256-.05-.611-.136-1h1.136c.551,0,1,.448,1,1v4.5Z"/></svg>
  },
];


interface SolutionCardProps {
  engTitle: string;
  mainTitle: string;
  coreValue: string;
  examples: string[];
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ engTitle, mainTitle, coreValue, examples, icon }) => (
    <div className="bg-white p-8 rounded-2xl flex flex-col h-full soft-shadow-md hover:soft-shadow-lg hover:-translate-y-1.5 transition-all duration-300 text-left">
      {/* Top Section */}
      <div>
        <div className="w-12 h-12 rounded-xl bg-apx-growth-green flex items-center justify-center mb-6 text-white shrink-0">
          {icon}
        </div>
        <p className="text-caption font-semibold uppercase tracking-wider text-text-tertiary mb-1">{engTitle}</p>
        <h3 className="text-h4 font-bold text-text-primary mb-[10px] leading-snug">{mainTitle}</h3>
        <p className="text-body-base text-text-secondary leading-relaxed whitespace-pre-line">{coreValue}</p>
      </div>

      {/* Spacer */}
      <div className="flex-grow my-4 border-t border-border-light"></div>
      
      {/* Bottom Section */}
      <div>
        <ul className="space-y-1 text-body-sm text-text-secondary mb-6">
          {examples.map((example) => (
            <li key={example} className="flex items-start">
              <span className="text-apx-growth-green mr-2 mt-1 font-bold">·</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
        <div className="text-right">
            <a href="#" className="font-bold text-text-secondary hover:text-apx-growth-green text-body-sm transition-colors duration-300">
                솔루션 더보기 ↗
            </a>
        </div>
      </div>
    </div>
);


const FrameworkSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });
    const [leftSolutions, rightSolutions] = [solutionAreas.slice(0, 2), solutionAreas.slice(2, 4)];

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-bg-secondary overflow-hidden">
            <Container>
                <div className={`max-w-4xl text-center mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                        <span className="md:hidden">조직의 성장을 완성하는<br/>4가지 솔루션 엔진</span>
                        <span className="hidden md:inline">조직의 성장을 완성하는 4가지 솔루션 엔진</span>
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                        <span className="md:hidden">
                            우리는 조직의 성장 시스템이<br/>
                            모든 단계에서 원활하게 작동하도록,<br/>
                            4가지 핵심 영역에서<br/>
                            전문적인 솔루션을 제공합니다.
                        </span>
                        <span className="hidden md:inline">
                            우리는 조직의 성장 시스템이 모든 단계에서 원활하게 작동하도록,<br /> 4가지 핵심 영역에서 전문적인 솔루션을 제공합니다.
                        </span>
                    </p>
                </div>

                 {/* New Layout for Desktop */}
                <div className="mt-16 hidden lg:grid grid-cols-3 items-stretch gap-8">
                    {/* Left Column */}
                    <div className="grid grid-rows-2 grid-flow-row gap-8">
                        {leftSolutions.map((item, index) => (
                            <div key={item.mainTitle} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${150 + index * 200}ms` }}>
                                <SolutionCard {...item} />
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `400ms` }}>
                        <img 
                            src="https://storage.googleapis.com/apxhomepage-asset/WConsultant01.png" 
                            alt="APX Solutions Framework" 
                            className="rounded-3xl w-full h-full object-cover soft-shadow-xl"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-rows-2 grid-flow-row gap-8">
                        {rightSolutions.map((item, index) => (
                             <div key={item.mainTitle} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${550 + index * 200}ms` }}>
                                <SolutionCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Original Layout for Mobile/Tablet */}
                <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden`}>
                    {solutionAreas.map((item, index) => (
                        <div key={item.mainTitle} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${150 + index * 100}ms` }}>
                            <SolutionCard {...item} />
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default FrameworkSection;
