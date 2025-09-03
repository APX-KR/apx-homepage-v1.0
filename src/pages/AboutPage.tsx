import React from 'react';
import Container from '../components/common/Container.tsx';
import PageHeader from '../components/common/PageHeader.tsx';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        engTitle="ABOUT APX"
        title="우리는 생각의 파트너입니다"
        description={
          <>
            APX는 단순한 문제 해결사를 넘어, 고객의 가장 신뢰받는 '생각의 파트너'가 되는 것을 목표로 합니다.
            <br />
            우리는 고객과 함께 고민하고, 가장 근본적인 원인을 찾아내어 지속가능한 성장 구조를 설계합니다.
          </>
        }
      />

      <section className="py-24 md:py-32 bg-bg-primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h3 font-semibold text-text-primary mb-6">Our Mission</h2>
            <p className="text-h4 font-bold text-apx-growth-green mb-6">'고객 조직의 잠재력을 성장 시스템으로 구현해 지속 가능한 성과를 만든다.'</p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              우리는 모든 조직이 가진 고유한 잠재력을 발견하고, 그것이 실질적인 성과로 이어질 수 있도록 돕습니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h3 font-semibold text-text-primary mb-6">Our Vision</h2>
            <p className="text-h4 font-bold text-apx-growth-green mb-6">'조직의 성장을 고민하는 모든 리더가 가장 먼저 찾는 '생각의 파트너'가 된다.'</p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              우리는 단순한 문제 해결사를 넘어, 고객과 함께 고민하고 가장 근본적인 원인을 찾아내어 지속가능한 성장을 함께 만들어갑니다.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-bg-primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h3 font-semibold text-text-primary mb-12">Our Core Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-strategy-blue mb-3">시스템 관점</h3>
                <p className="text-body-base text-text-secondary break-keep">눈앞의 문제에 매몰되지 않고, 단기적인 성과와 장기적인 건강성의 균형을 맞추며 항상 전체 최적화를 우선합니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-talent-orange mb-3">본질 통찰</h3>
                <p className="text-body-base text-text-secondary break-keep">반복되는 패턴과 구조를 파악하여, 해결책이 진짜 원인과 정합성을 갖는지 검증하고, 가장 본질적인 해결책을 설계합니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-performance-green mb-3">성장 동반</h3>
                <p className="text-body-base text-text-secondary break-keep">우리는 고객이 스스로 성장할 수 있도록 돕습니다. 프로젝트가 끝났을 때, 고객에게 시스템과 역량이 남아 자립할 수 있도록 하는 것을 목표로 합니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-analytics-teal mb-3">체계적 탁월함</h3>
                <p className="text-body-base text-text-secondary break-keep">성공 패턴을 방법론으로 만들고 핵심 프로세스를 표준화하여, 탁월함이 지속적으로 재현될 수 있는 시스템을 구축합니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}