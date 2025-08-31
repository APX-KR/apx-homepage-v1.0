'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Container from '../../components/common/Container.tsx';
import PageHeader from '../../components/common/PageHeader.tsx';
import { useInsights } from '../../contexts/InsightContext.tsx';
import Link from 'next/link';

const categoryColors = {
  '리더십': 'text-strategy-blue',
  '조직구조': 'text-process-gray',
  '조직문화': 'text-culture-coral',
  '성과관리': 'text-performance-green',
  '인재와 역량': 'text-talent-orange',
};

const filters = [
    { key: 'All', label: '전체' },
    { key: '리더십', label: '리더십' },
    { key: '조직구조', label: '조직구조' },
    { key: '조직문화', label: '조직문화' },
    { key: '성과관리', label: '성과관리' },
    { key: '인재와 역량', label: '인재와 역량' },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { insights, loading } = useInsights();
  const articlesRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 4;

  const filteredArticles = useMemo(() => {
    if (loading) return [];
    return insights.filter(article => {
      const categoryMatch = activeCategory === 'All' || article.category === activeCategory;
      const searchMatch = searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery, insights, loading]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredArticles]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    articlesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-1">
                <button 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    &lt;
                </button>
                {pageNumbers.map(number => (
                    <button 
                        key={number}
                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentPage === number ? 'bg-apx-growth-green text-white font-bold' : 'hover:bg-gray-200'}`}
                        onClick={() => handlePageChange(number)}
                        aria-current={currentPage === number ? 'page' : undefined}
                    >
                        {number}
                    </button>
                ))}
                <button 
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed" 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
  };

  return (
    <>
      <PageHeader
        engTitle="INSIGHTS"
        title="지속가능한 성장을 위한 생각들"
        description={
          <>
            APX는 컨설팅 현장에서 얻은 경험과 깊이 있는 연구를 바탕으로
            <br />
            조직의 성장에 대한 새로운 관점과 아이디어를 공유합니다.
          </>
        }
      />

      <div className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          {/* Filter and Search Section */}
          <div className="sticky top-[99px] z-20 bg-bg-secondary/90 backdrop-blur-lg py-4 mb-10 border-y border-border-light">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                   <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {filters.map(item => (
                          <button
                              key={item.key}
                              onClick={() => setActiveCategory(item.key)}
                              className={`px-5 py-2.5 text-body-sm font-semibold rounded-full transition-colors duration-300 leading-none ${activeCategory === item.key ? 'bg-apx-growth-green text-white' : 'bg-apx-growth-green/10 text-apx-deep-growth hover:bg-apx-growth-green/20'}`}
                          >
                              {item.label}
                          </button>
                      ))}
                  </div>
                  <div className="relative w-full md:w-auto md:min-w-[320px]">
                      <input 
                          type="text"
                          placeholder="인사이트 검색 (예: 리더십, OKR)"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-5 pr-12 py-3 border border-border-light rounded-full focus:outline-none focus:ring-2 focus:ring-apx-growth-green text-body-base bg-white"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-5 top-1/2 -translate-y-1/2 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  </div>
              </div>
          </div>

          {/* Articles Grid */}
          <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-28">
            {loading ? (
                <div className="col-span-1 md:col-span-2 text-center py-20 text-text-secondary">인사이트를 불러오는 중입니다...</div>
            ) : paginatedArticles.length > 0 ? (
                paginatedArticles.map((article) => (
                  <Link key={article.slug} href={`/insights/${article.slug}`} className="group bg-white rounded-2xl soft-shadow-md hover:soft-shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="aspect-video overflow-hidden">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <p className={`font-bold ${categoryColors[article.category] || 'text-text-secondary'} mb-2`}>{article.category}</p>
                      <h3 className="text-h4 font-bold text-text-primary leading-snug mb-4 flex-grow">{article.title}</h3>
                      <p className="text-body-base text-text-secondary mb-6 break-keep">{article.summary}</p>
                      <div className="text-body-sm text-text-tertiary mt-auto">
                        <span>{article.author}</span> · <span>{article.date}</span>
                      </div>
                    </div>
                  </Link>
                ))
            ) : (
                <div className="col-span-1 md:col-span-2 text-center py-20">
                    <img src="https://storage.googleapis.com/apxhomepage-asset/Search_Illustration_Empty.png" alt="No results found" className="w-48 mx-auto mb-6" />
                    <p className="text-body-lg text-text-secondary">해당 조건에 맞는 인사이트가 없습니다.</p>
                </div>
            )}
          </div>
          
          {!loading && renderPagination()}
        </Container>
      </div>
    </>
  );
}