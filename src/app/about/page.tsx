'use client';

import React from 'react';
import Container from '../../components/common/Container';
import PageHeader from '../../components/common/PageHeader';

const teamMembers = [
  {
    name: '김혜숙',
    role: '대표 컨설턴트',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/profile-placeholder.png',
  },
  {
    name: '이름',
    role: '시니어 컨설턴트',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/profile-placeholder.png',
  },
  {
    name: '이름',
    role: '컨설턴트',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/profile-placeholder.png',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        engTitle="ABOUT APX"
        title="우리는 생각의 파트너입니다"
        description="APX는 단순한 문제 해결사를 넘어, 고객의 가장 신뢰받는 '생각의 파트너'가 되는 것을 목표로 합니다. 우리는 고객과 함께 고민하고, 가장 근본적인 원인을 찾아내어 지속가능한 성장 구조를 설계합니다."
      />

      <section className="py-24 md:py-32 bg-bg-primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h3 font-semibold text-text-primary mb-6">Our Mission & Vision</h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-12">
              우리의 미션은 <span className="text-apx-growth-green font-semibold">'조직의 잠재력을 성과로 바꾸는 성장 아키텍처를 설계하는 것'</span>입니다. 우리는 모든 조직이 가진 고유한 잠재력을 발견하고, 그것이 실질적인 성과로 이어질 수 있도록 돕습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-strategy-blue mb-3">Core Value 1: 본질</h3>
                <p className="text-body-base text-text-secondary">문제의 현상이 아닌 근본적인 원인을 파고들어 해결책을 찾습니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-talent-orange mb-3">Core Value 2: 파트너십</h3>
                <p className="text-body-base text-text-secondary">정답을 주기보다, 고객과 함께 최적의 답을 찾아가는 과정을 중시합니다.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl soft-shadow-md">
                <h3 className="text-h5 font-bold text-performance-green mb-3">Core Value 3: 지속가능성</h3>
                <p className="text-body-base text-text-secondary">일회성 캠페인이 아닌, 조직에 내재화되어 계속 작동하는 시스템을 구축합니다.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-h2 font-semibold text-text-primary mb-6">Meet Our Team</h2>
                <p className="text-body-lg text-text-secondary leading-relaxed mb-16">
                    APX는 각 분야 최고의 전문성과 풍부한 경험을 갖춘 컨설턴트들로 구성되어 있습니다.<br/>우리는 하나의 팀으로서 고객의 성공을 위해 헌신합니다.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 justify-center max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div className="relative w-48 h-48 mx-auto mb-4">
                            <img
                                className="rounded-full w-full h-full object-cover soft-shadow-lg"
                                src={member.imageUrl}
                                alt={`Profile of ${member.name}`}
                            />
                        </div>
                        <h3 className="text-h5 font-bold text-text-primary">{member.name}</h3>
                        <p className="text-body-base text-text-secondary">{member.role}</p>
                    </div>
                ))}
            </div>
        </Container>
      </section>
    </>
  );
}