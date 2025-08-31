
import React, { useState, useMemo } from 'react';
import Container from '../common/Container';
import { useVisibility } from '../../hooks/useVisibility';
import { useSolutions } from '../../contexts/SolutionContext';

const problemsConfig = [
    {
        category: "리더십",
        front: {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M23.449,9.627a2.013,2.013,0,0,0-1.87-.587c-.214.043-.423.1-.629.156a10.829,10.829,0,0,0-7.1-5.032,2.5,2.5,0,1,0-3.7,0A10.829,10.829,0,0,0,3.051,9.2c-.206-.059-.415-.113-.629-.156a2.012,2.012,0,0,0-1.87.587,1.991,1.991,0,0,0-.484,1.886l2.9,10.493A1,1,0,0,0,3,24H21a1,1,0,0,0,.03-1.994l2.907-10.515A1.984,1.984,0,0,0,23.449,9.627ZM12,6a8.516,8.516,0,0,1,7.087,4.005,6.854,6.854,0,0,0-2,1.807,6,6,0,0,0-10.163,0,6.841,6.841,0,0,0-2-1.807A8.516,8.516,0,0,1,12,6Zm6.958,16H5.045L2.026,11C4,11.4,6,12.9,6,15a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,1,0,2,0c0-2.1,2-3.6,4-4.021Z"/>
                </svg>
            ),
            engTitle: "LEADERSHIP",
            title: "리더십",
            question: "어떤 리더십 원칙을 세울 것인가?",
            keywords: ["#리더십 원칙", "#의사결정", "#실행력"],
            importance: "명확한 리더십은 조직의 모든 에너지를\n하나의 목표로 정렬시킵니다.",
            gradient: "bg-gradient-to-br from-leadership-navy to-strategy-blue"
        },
        back: {
            painPointsTitle: "혹시 이런 고민을 하시나요?",
            painPoints: [
                "리더들의 의사결정이 너무 느리고<br />자주 번복됩니다.",
                "다음 세대를 이끌어갈<br />리더가 보이지 않습니다.",
                "팀장들이 팀원들을 제대로<br />이끌지 못하는 것 같습니다.",
                "급변하는 환경에 리더들이<br />적응하지 못하고 있습니다."
            ],
            solutionTitle: "APX는 이렇게 돕습니다",
            gradient: "bg-gradient-to-br from-leadership-navy to-strategy-blue"
        }
    },
    {
        category: "조직구조",
        front: {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="m11,6h2c1.379,0,2.5-1.121,2.5-2.5v-1c0-1.379-1.121-2.5-2.5-2.5h-2c-1.378,0-2.5,1.121-2.5,2.5v1c0,1.379,1.122,2.5,2.5,2.5Zm-.5-3.5c0-.275.224-.5.5-.5h2c.275,0,.5.225.5.5v1c0,.275-.225.5-.5.5h-2c-.276,0-.5-.225-.5-.5v-1Zm2.5,15.5h-2c-1.378,0-2.5,1.121-2.5,2.5v1c0,1.379,1.122,2.5,2.5,2.5h2c1.379,0,2.5-1.121,2.5-2.5v-1c0-1.379-1.121-2.5-2.5-2.5Zm.5,3.5c0,.275-.225-.5-.5.5h-2c-.276,0-.5-.225-.5-.5v-1c0-.275.224-.5.5-.5h2c.275,0,.5.225.5.5v1Zm8-3.5h-2c-1.379,0-2.5,1.121-2.5,2.5v1c0,1.379,1.121,2.5,2.5,2.5h2c1.379,0,2.5-1.121,2.5-2.5v-1c0-1.379-1.121-2.5-2.5-2.5Zm.5,3.5c0,.275-.225-.5-.5.5h-2c-.275,0-.5-.225-.5-.5v-1c0-.275.225.5.5-.5h2c.275,0,.5.225.5.5v1Zm-17.5-3.5h-2c-1.378,0-2.5,1.121-2.5,2.5v1c0,1.379,1.122,2.5,2.5,2.5h2c1.378,0,2.5-1.121,2.5-2.5v-1c0-1.379-1.122-2.5-2.5-2.5Zm.5,3.5c0,.275-.224-.5-.5-.5h-2c-.276,0-.5-.225-.5-.5v-1c0-.275.224-.5.5-.5h2c.276,0,.5.225.5.5v1Zm-2.5-6v-1c0-1.93,1.57-3.5,3.5-3.5h5v-2.5c0-.553.448-1,1-1s1,.447,1,1v2.5h5c1.93,0,3.5,1.57,3.5,3.5v1c0,.553-.447,1-1,1s-1-.447-1-1v-1c0-.827-.673-1.5-1.5-1.5h-5v2.5c0,.553-.448,1-1,1s-1-.447-1-1v-2.5h-5c-.827,0-1.5.673-1.5,1.5v1c0,.553-.448,1-1,1s-1-.447-1-1Z"/>
                </svg>
            ),
            engTitle: "ORGANIZATION",
            title: "조직구조",
            question: "어떤 구조로 일할 것인가?",
            keywords: ["#조직구조", "#R&R", "#프로세스"],
            importance: "최적의 구조는 뛰어난 전략을\n탁월한 실행으로 잇는 고속도로가 됩니다.",
            gradient: "bg-gradient-to-br from-process-gray to-gray-700"
        },
        back: {
            painPointsTitle: "혹시 이런 고민을 하시나요?",
            painPoints: [
                "누가 무슨 일을 하는지 불분명해<br />책임 소재가 애매합니다.",
                "부서 간 협업이 잘 되지 않고<br />서로 떠넘기기 바쁩니다.",
                "불필요한 회의와 보고 때문에<br />정작 중요한 일에 쓸 시간이 없습니다.",
                "전략은 좋은데, 실행 단계에서<br />항상 문제가 발생합니다."
            ],
            solutionTitle: "APX는 이렇게 돕습니다",
            gradient: "bg-gradient-to-br from-process-gray to-gray-700"
        }
    },
    {
        category: "인재와 역량",
        front: {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current">
                    <path d="M470.549,111.573L313.237,36.629c-34.628-20.684-77.728-21.051-112.704-0.96L41.451,111.573  c-0.597,0.299-1.216,0.619-1.792,0.96c-37.752,21.586-50.858,69.689-29.272,107.441c7.317,12.798,18.08,23.284,31.064,30.266  l43.883,20.907V375.68c0.026,46.743,30.441,88.039,75.072,101.931c31.059,8.985,63.264,13.384,95.595,13.056  c32.326,0.362,64.531-4,95.595-12.949c44.631-13.891,75.046-55.188,75.072-101.931V271.104l42.667-20.395v175.957  c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333v-256C512.143,145.615,492.363,122.473,470.549,111.573z   M384,375.787c0.011,27.959-18.129,52.69-44.8,61.077c-27.046,7.728-55.073,11.479-83.2,11.136  c-28.127,0.343-56.154-3.408-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763,33.707  c17.46,10.368,37.401,15.816,57.707,15.765c19.328,0.137,38.331-4.98,54.976-14.805L384,291.477V375.787z M452.267,211.733  l-160.896,76.8c-22.434,13.063-50.241,12.693-72.32-0.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903  c3.2-5.934,7.998-10.853,13.85-14.201l159.893-76.373c22.441-13.034,50.233-12.665,72.32,0.96l157.312,74.944  c11.569,6.424,18.807,18.555,18.965,31.787C469.354,193.441,462.9,205.097,452.267,211.733L452.267,211.733z"/>
                </svg>
            ),
            engTitle: "TALENT",
            title: "인재와 역량",
            question: "누가 어떤 역량으로 일할 것인가?",
            keywords: ["#핵심인재", "#역량개발", "#평가보상"],
            importance: "올바른 인재는 전략을 현실로 만들고,\n미래 성장의 씨앗을 심습니다.",
            gradient: "bg-gradient-to-br from-performance-green to-apx-deep-growth"
        },
        back: {
            painPointsTitle: "혹시 이런 고민을 하시나요?",
            painPoints: [
                "우리 회사에 꼭 필요한 인재를<br />뽑기가 너무 힘듭니다.",
                "애써 뽑은 좋은 인재들이<br />자꾸 회사를 떠납니다.",
                "평가와 보상이 공정하지 않다는<br />불만이 많습니다.",
                "직원들이 성장하고 있다는 느낌을<br />받지 못하는 것 같습니다."
            ],
            solutionTitle: "APX는 이렇게 돕습니다",
            gradient: "bg-gradient-to-br from-performance-green to-apx-deep-growth"
        }
    },
    {
        category: "문화와 몰입",
        front: {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/>
                </svg>
            ),
            engTitle: "CULTURE",
            title: "문화와 몰입",
            question: "어떤 분위기에서 일할 것인가?",
            keywords: ["#조직문화", "#가치와신념", "#몰입"],
            importance: "강력한 문화는 뛰어난 인재를 끌어당기고\n붙잡는 보이지 않는 자산입니다.",
            gradient: "bg-gradient-to-br from-culture-coral to-red-500"
        },
        back: {
            painPointsTitle: "혹시 이런 고민을 하시나요?",
            painPoints: [
                "회사의 핵심가치가 구호로만 존재하고,<br />실제 행동으로 이어지지 않습니다.",
                "조직 내 소통이 단절되어 있고,<br />중요한 정보가 공유되지 않습니다.",
                "구성원들의 주인의식이나 열정이<br />부족하다고 느껴집니다.",
                "세대 간의 가치관 차이로 인한<br />갈등이 점점 심해집니다."
            ],
            solutionTitle: "APX는 이렇게 돕습니다",
            gradient: "bg-gradient-to-br from-culture-coral to-red-500"
        }
    },
    {
        category: "성과관리",
        front: {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="m5.918,11.986c-.545-.091-.912-.607-.821-1.151.566-3.381,3.47-5.835,6.903-5.835.392,0,.783.033,1.166.097.545.092.912.607.82,1.152-.091.544-.599.912-1.152.82-.272-.046-.554-.069-.834-.069-2.452,0-4.526,1.752-4.931,4.165-.082.489-.672.821-1.151.821Zm2.648,7.448l1.25-2.22c.306-.543-.087-1.215-.71-1.215-.289,0-.556.153-.703.402l-1.449,2.465h-.354v-2.067c0-.442-.358-.8-.8-.8s-.8.358-.8.8v6.4c0,.442.358.8.8.8s.8-.358.8-.8v-2.733h.612l1.378,3.057c.131.29.419.476.737.476.583,0,.974-.598.741-1.132l-1.502-3.433Zm-2.648-7.448c-.055,0,.056.009,0,0h0ZM12,0C5.383,0,0,5.383,0,12c0,1.746.367,3.431,1.092,5.007.168.366.53.582.909.582.14,0,.281-.029.417-.092.501-.23.722-.824.49-1.326-.603-1.312-.908-2.716-.908-4.171C2,6.486,6.486,2,12,2s10,4.486,10,10c0,1.426-.293,2.802-.872,4.09-.227.504,0,1.096.502,1.322.508.227,1.098,0,1.322-.502.695-1.548,1.048-3.2,1.048-4.91C24,5.383,18.617,0,12,0Zm2,12c0-.189-.035-.368-.083-.541l3.786-3.749c.393-.388.396-1.021.008-1.414-.39-.392-1.022-.396-1.414-.007l-3.814,3.776c-.155-.039-.315-.065-.483-.065-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2Zm3.8,4h0c-.442,0-.8.358-.8.8v6.4c0,.442.358.8.8.8h0c.442,0,.8-.358.8-.8v-6.4c0-.442-.358-.8-.8-.8Zm-1.701,2.5c0,1.381-1.119,2.5-2.5,2.5h-.5v2.2c0,.442-.358.8-.8.8s-.8-.358-.8-.8v-6.4c0-.442.358.8.8-.8h1.3c1.381,0,2.5,1.119,2.5,2.5Zm-1.522,0c0-.551-.449-1-1-1h-.555v2h.555c.551,0,1-.449,1-1Z"/>
                </svg>
            ),
            engTitle: "PERFORMANCE",
            title: "성과관리",
            question: "어떻게 측정하고 개선할 것인가?",
            keywords: ["#성과관리", "#KPI", "#데이터"],
            importance: "측정할 수 없는 것은 관리할 수 없고,\n관리할 수 없는 것은 개선할 수 없습니다.",
            gradient: "bg-gradient-to-br from-talent-orange to-orange-600"
        },
        back: {
            painPointsTitle: "혹시 이런 고민을 하시나요?",
            painPoints: [
                "회사의 목표와 개인의 목표가<br />따로 놀고 있습니다.",
                "평가가 리더의 주관적인 감으로<br />이루어지는 것 같습니다.",
                "열심히 일한 사람이 제대로<br />보상받지 못하는 구조입니다.",
                "직감이나 경험에만 의존해<br />중요한 의사결정을 내리고 있습니다."
            ],
            solutionTitle: "APX는 이렇게 돕습니다",
            gradient: "bg-gradient-to-br from-talent-orange to-orange-600"
        }
    }
];


const ProblemSection: React.FC = () => {
    const [sectionRef, isVisible] = useVisibility<HTMLDivElement>({ threshold: 0.1 });
    const [flippedStates, setFlippedStates] = useState(() => Array(problemsConfig.length).fill(false));
    const { solutions, loading } = useSolutions();

    const problems = useMemo(() => {
        if (loading) return problemsConfig;

        return problemsConfig.map(prob => {
            const relevantSolutions = solutions
                .filter(s => s.solution_category_5q === prob.category)
                .map(s => s.solution_name_kr);
            
            return {
                ...prob,
                solutions: relevantSolutions.slice(0, 3) // Show up to 3 solutions per category
            };
        });
    }, [solutions, loading]);

    const handleFlip = (index: number) => {
        setFlippedStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
            <Container className="max-w-[1600px]">
                <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                    <h2 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-semibold text-text-primary mb-6 leading-tight tracking-tight-title">
                        <span className="md:hidden">이런 고민,<br/>하고 계신가요?</span>
                        <span className="hidden md:inline">이런 고민, 하고 계신가요?</span>
                    </h2>
                    <p className="text-body-lg text-text-secondary leading-relaxed">
                        <span className="md:hidden">
                            조직은 성장을 가로막는 수많은<br/>
                            복합적인 문제에 직면합니다.<br/>
                            APX는 문제의 현상이 아닌<br/>
                            근본적인 원인을 해결하여<br/>
                            지속가능한 성장을 설계합니다.
                        </span>
                        <span className="hidden md:inline">
                            조직은 성장을 가로막는 수많은 복합적인 문제에 직면합니다.<br />
                            APX는 문제의 현상이 아닌 근본적인 원인을 해결하여 지속가능한 성장을 설계합니다.
                        </span>
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`flip-card h-[480px] transition-all duration-700 ease-out cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${flippedStates[index] ? 'is-flipped' : ''}`}
                            style={{ transitionDelay: `${150 + index * 100}ms` }}
                            onClick={() => handleFlip(index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleFlip(index);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={flippedStates[index]}
                            aria-label={`${problem.front.title} 카드, ${flippedStates[index] ? '요약 보기' : '자세히 보기'}`}
                        >
                            <div className="flip-card-inner soft-shadow-lg">
                                {/* Front of the card */}
                                <div className={`flip-card-front ${problem.front.gradient} text-white flex flex-col text-left`}>
                                    <div className="py-6 px-5 flex-grow">
                                        <div className="mb-6">
                                            <div className="bg-white/20 rounded-full flex items-center justify-center w-[60px] h-[60px]">
                                                {typeof problem.front.icon === 'string' ? (
                                                    <span className="text-4xl">{problem.front.icon}</span>
                                                ) : (
                                                    problem.front.icon
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-caption font-semibold uppercase tracking-wider text-white/80 mb-2">{problem.front.engTitle}</p>
                                        <h3 className="text-h4 font-bold mb-2">{problem.front.title}</h3>
                                        <p className="text-body-lg mb-4 leading-snug tracking-tight-title">{problem.front.question}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                          {problem.front.keywords.map((keyword, i) => (
                                              <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-caption font-medium">{keyword}</span>
                                          ))}
                                      </div>
                                    </div>
                                    <div className="bg-black/20 backdrop-blur-sm pt-4 pb-6 px-5">
                                        <p className="text-body-sm text-white/90 leading-relaxed whitespace-pre-line">{problem.front.importance}</p>
                                        <div className="opacity-70 mt-3 flex items-center gap-1">
                                            <span className="text-caption font-medium">자세히 보기</span>
                                            <span className="text-caption font-medium">&gt;&gt;</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Back of the card */}
                                <div className={`flip-card-back ${problem.back.gradient} text-white pt-10 px-5 pb-10 flex flex-col justify-start text-left overflow-y-auto`}>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-3">
                                          {problem.back.painPointsTitle}
                                        </h4>
                                        <ul className="space-y-1.5 text-body-sm mb-4 pl-1">
                                          {problem.back.painPoints.map((point, i) => (
                                            <li key={i} className="flex items-start">
                                              <span className="text-white/80 mr-2 mt-1">•</span>
                                              <span className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                                            </li>
                                          ))}
                                        </ul>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-white/20">
                                      <h4 className="text-lg font-bold text-white mb-3">
                                        {problem.back.solutionTitle}
                                      </h4>
                                      <ul className="space-y-1.5 text-body-sm pl-1">
                                         {(problem as any).solutions?.map((solution: string, i: number) => (
                                             <li key={i} className="flex items-start">
                                                 <span className="text-white/80 mr-2 mt-1">✓</span>
                                                 <span className="text-white/90 leading-relaxed">{solution}</span>
                                             </li>
                                        ))}
                                      </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ProblemSection;