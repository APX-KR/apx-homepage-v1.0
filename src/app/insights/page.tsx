'use client';

import React from 'react';
import Container from '../../components/common/Container';
import PageHeader from '../../components/common/PageHeader';

const mockArticles = [
  {
    category: '리더십',
    title: 'MZ세대 팀원들과 함께 성장하는 리더의 5가지 조건',
    summary: '디지털 네이티브 세대인 MZ 팀원들의 잠재력을 이끌어내고, 동반 성장하기 위한 새로운 리더십 패러다임을 제시합니다.',
    author: '김혜숙 대표',
    date: '2024.07.15',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/insight-article-01.png',
  },
  {
    category: '조직문화',
    title: '실패를 두려워하지 않는 ‘심리적 안정감’은 어떻게 만드는가?',
    summary: '혁신적인 아이디어와 빠른 실행을 가능하게 하는 핵심 요소, 심리적 안정감. 우리 조직에 심리적 안정감을 뿌리내리는 구체적인 방법을 알아봅니다.',
    author: 'APX 리서치팀',
    date: '2024.06.28',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/insight-article-02.png',
  },
  {
    category: '성과관리',
    title: 'OKR, 성공적으로 도입하려면 무엇부터 시작해야 할까?',
    summary: '단순한 목표 관리 툴을 넘어, 조직 전체를 하나의 목표로 정렬시키는 OKR의 성공적인 도입을 위한 A to Z 가이드.',
    author: '김혜숙 대표',
    date: '2024.06.12',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/insight-article-03.png',
  },
  {
    category: '인재와 역량',
    title: '우리 회사에 맞는 핵심인재, 어떻게 정의하고 유지할 것인가',
    summary: '모든 회사에 통용되는 핵심인재는 없습니다. 우리 조직의 성장 단계와 전략에 맞는 핵심인재를 정의하고, 그들을 놓치지 않는 방법을 소개합니다.',
    author: 'APX 리서치팀',
    date: '2024.05.21',
    imageUrl: 'https://storage.googleapis.com/apxhomepage-asset/insight-article-04.png',
  },
];

const categoryColors: { [key: string]: string } = {
  '리더십': 'text-strategy-blue',
  '조직문화': 'text-culture-coral',
  '성과관리': 'text-performance-green',
  '인재와 역량': 'text-talent-orange',
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        engTitle="INSIGHTS"
        title="지속가능한 성장을 위한 생각들"
        description="APX는 컨설팅 현장에서 얻은 경험과 깊이 있는 연구를 바탕으로 조직의 성장에 대한 새로운 관점과 아이디어를 공유합니다."
      />

      <div className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          {/* Filter and Search Section - Placeholder */}
          <div className="mb-16 p-6 bg-white rounded-2xl soft-shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <span className="font-bold text-text-primary">카테고리:</span>
              <a href="#" className="font-semibold text-apx-growth-green hover:underline">전체</a>
              <a href="#" className="font-medium text-text-secondary hover:text-apx-growth-green">리더십</a>
              <a href="#" className="font-medium text-text-secondary hover:text-apx-growth-green">조직문화</a>
              <a href="#" className="font-medium text-text-secondary hover:text-apx-growth-green">성과관리</a>
              <a href="#" className="font-medium text-text-secondary hover:text-apx-growth-green">인재와 역량</a>
            </div>
            <div className="relative w-full md:max-w-xs">
              <input type="search" placeholder="검색..." className="w-full pl-4 pr-10 py-2 border border-border-light rounded-full focus:outline-none focus:ring-2 focus:ring-apx-growth-green" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mockArticles.map((article, index) => (
              <a href="#" key={index} className="group bg-white rounded-2xl soft-shadow-md hover:soft-shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1.5">
                <div className="aspect-video overflow-hidden">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className={`font-bold ${categoryColors[article.category] || 'text-text-secondary'} mb-2`}>{article.category}</p>
                  <h3 className="text-h4 font-bold text-text-primary leading-snug mb-4 flex-grow">{article.title}</h3>
                  <p className="text-body-base text-text-secondary mb-6">{article.summary}</p>
                  <div className="text-body-sm text-text-tertiary mt-auto">
                    <span>{article.author}</span> · <span>{article.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination - Placeholder */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-1">
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200" disabled>&lt;</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-apx-growth-green text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200">&gt;</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}