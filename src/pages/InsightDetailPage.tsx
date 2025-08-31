import React from 'react';
import { useInsights } from '../contexts/InsightContext.tsx';
import Container from '../components/common/Container.tsx';
import Link from '../components/common/Link.tsx';

const categoryColors = {
  '리더십': 'text-strategy-blue',
  '조직구조': 'text-process-gray',
  '조직문화': 'text-culture-coral',
  '성과관리': 'text-performance-green',
  '인재와 역량': 'text-talent-orange',
};

type InsightDetailPageProps = {
  slug: string;
};

export default function InsightDetailPage({ slug }: InsightDetailPageProps) {
  const { getInsightBySlug, loading } = useInsights();
  const article = getInsightBySlug(slug);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-96">
            <p className="text-text-secondary">아티클을 불러오는 중입니다...</p>
        </div>
    );
  }

  if (!article) {
    return (
        <div className="py-24 text-center">
            <Container>
                <h1 className="text-h3 text-text-primary mb-4">아티클을 찾을 수 없습니다.</h1>
                <p className="text-body-lg text-text-secondary mb-8">요청하신 페이지를 찾을 수 없거나, 삭제되었을 수 있습니다.</p>
                <Link 
                    href='/insights'
                    className="px-8 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300"
                >
                    인사이트 목록으로 돌아가기
                </Link>
            </Container>
        </div>
    );
  }

  return (
    <div className="bg-bg-primary py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link 
            href='/insights' 
            className="inline-flex items-center gap-2 text-apx-growth-green font-semibold mb-8 hover:text-apx-deep-growth transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            목록으로 돌아가기
          </Link>

          <header className="mb-10 border-b border-border-light pb-10">
            <p className={`font-bold ${categoryColors[article.category] || 'text-text-secondary'} mb-2`}>{article.category}</p>
            <h1 className="text-h2-mobile md:text-h2-tablet lg:text-h2 font-bold text-text-primary leading-tight tracking-tight-title">{article.title}</h1>
            <div className="text-body-sm text-text-tertiary mt-4">
              <span>{article.author}</span> · <span>{article.date}</span>
            </div>
          </header>

          <div className="aspect-video overflow-hidden rounded-2xl mb-12 soft-shadow-lg">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <article className="text-body-lg text-text-primary leading-relaxed space-y-8 whitespace-pre-line break-keep">
            {article.content}
          </article>
        </div>
      </Container>
    </div>
  );
}