import React from 'react';
import Container from '../components/common/Container.tsx';
import PageHeader from '../components/common/PageHeader.tsx';

const SectionCard = ({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl soft-shadow-lg p-8 md:p-12">
        <div className="mb-6">
            <p className="text-body-sm font-semibold text-apx-growth-green">{subtitle}</p>
            <h3 className="text-h4 font-bold text-text-primary mt-1">{title}</h3>
        </div>
        <div className="text-body-lg text-text-secondary leading-relaxed space-y-4 break-keep">
            {children}
        </div>
    </div>
);


export default function PerspectivePage() {
  return (
    <>
      <PageHeader
        engTitle="APX'S PERSPECTIVE"
        title="문제의 현상이 아닌 원인을 해결합니다"
        description={
          <>
            APX는 눈에 보이는 문제의 이면에 숨겨진 진짜 원인을 찾아내고,
            <br />
            일시적인 처방이 아닌 지속가능한 성장 시스템을 설계하는 것을 핵심 철학으로 삼습니다.
          </>
        }
      />
      <div className="py-24 md:py-32 bg-bg-secondary space-y-12">
        <Container>
            <div className="max-w-4xl mx-auto space-y-16">
                <section id="philosophy" className="scroll-mt-[120px] md:scroll-mt-[140px]">
                    <SectionCard
                        title="왜 원인에 집중하는가?"
                        subtitle="OUR PHILOSOPHY"
                    >
                        <p>
                            조직이 겪는 대부분의 문제는 복잡하게 얽힌 여러 원인의 '결과'로 나타나는 현상입니다. 많은 경우 우리는 현상에만 집중하여 임시방편적인 해결책을 내놓지만, 이는 또 다른 문제를 야기할 뿐입니다.
                        </p>
                        <p>
                            APX는 '진짜 문제가 무엇인가(Right Problem)'를 정의하는 것에서부터 출발합니다. 우리는 데이터와 깊이 있는 인터뷰를 통해 문제의 근본 원인을 파고들어, 가장 효과적이고 본질적인 해결책을 설계합니다.
                        </p>
                    </SectionCard>
                </section>

                <section id="methodology" className="scroll-mt-[120px] md:scroll-mt-[140px]">
                    <SectionCard
                        title="어떻게 답을 찾아가는가?"
                        subtitle="OUR METHODOLOGY"
                    >
                        <p>
                            APX는 정해진 답을 판매하는 솔루션 공급자가 아닙니다. 우리는 고객사의 '생각의 파트너(Thought Partner)'로서 함께 답을 찾아가는 여정을 함께합니다.
                        </p>
                        <p>
                            우리는 APX 고유의 프레임워크와 다양한 분석 툴킷을 활용하여 객관적인 데이터를 확보하고, 이를 바탕으로 고객사 구성원들과의 긴밀한 워크숍과 토론을 통해 모두가 공감하고 실행할 수 있는 최적의 해결책을 도출합니다.
                        </p>
                    </SectionCard>
                </section>

                <section id="process" className="scroll-mt-[120px] md:scroll-mt-[140px]">
                    <SectionCard
                        title="어떻게 성과로 만드는가?"
                        subtitle="OUR PROCESS"
                    >
                        <p>
                            훌륭한 아이디어도 실행되지 않으면 의미가 없습니다. APX는 진단으로 끝나지 않고, 아이디어가 실질적인 성과로 이어지고 조직에 내재화될 때까지 함께합니다.
                        </p>
                        <p>
                            <strong>[진단 → 설계 → 실행 및 내재화]</strong>로 이어지는 3단계 프로세스를 통해, 우리는 고객의 목표가 현실이 되고, 컨설팅이 끝난 후에도 조직 스스로 성장할 수 있는 시스템을 구축하는 것을 최종 목표로 합니다.
                        </p>
                    </SectionCard>
                </section>
            </div>
        </Container>
      </div>
    </>
  );
}
