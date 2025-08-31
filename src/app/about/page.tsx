import React from 'react';
import Container from '../../components/common/Container.tsx';
import PageHeader from '../../components/common/PageHeader.tsx';

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
            <p className="text-h4 font-bold text-apx-growth-green mb-6">'조직의 잠재력을 성과로 바꾸는 성장 아키텍처를 설계하는 것'</p>
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
            <p className="text-h4 font-bold text-apx-growth-green mb-6">'고객의 가장 신뢰받는 생각의 파트너가 되는 것'</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-strategy-blue mb-3">본질</h3>
                <p className="text-body-base text-text-secondary break-keep">문제의 현상이 아닌 근본적인 원인을 파고들어 해결책을 찾습니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-talent-orange mb-3">파트너십</h3>
                <p className="text-body-base text-text-secondary break-keep">정답을 주기보다, 고객과 함께 최적의 답을 찾아가는 과정을 중시합니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-performance-green mb-3">임팩트</h3>
                <p className="text-body-base text-text-secondary break-keep">보고서로 끝나지 않고, 실제 조직의 행동 변화와 성과 창출로 이어지도록 돕습니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}