export interface Solution {
    solution_code: string;
    solution_name_kr: string;
    solution_name_en: string;
    solution_summary: string;
    solution_category_5q: string;
    solution_category_gnb: '진단과 분석' | '전략 컨설팅' | '역량 개발';
    problem_definition: string;
    modules: string;
    methodologies: string;
    deliverables: string;
    project_scope: string;
    project_target: string;
    prerequisite_code: string;
    successor_code: string;
    tags: string[];
    status: '활성 (Active)' | '비활성 (Inactive)';
}

export interface Insight {
    slug: string;
    category: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    imageUrl: string;
    content: string;
}
