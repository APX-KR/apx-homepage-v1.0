export interface Solution {
    solution_code: string;
    solution_name_kr: string;
    solution_name_en: string;
    solution_category_gnb: "진단과 분석" | "전략 컨설팅" | "역량 개발";
    solution_category_5q: '리더십' | '조직구조' | '인재와 역량' | '문화와 몰입' | '성과관리';
    solution_summary: string;
    tags: string[];
    status: string;
    problem_definition: string;
    modules: string;
    methodologies: string;
    deliverables: string;
    project_scope: string;
    project_target: string;
}

export interface Insight {
    slug: string;
    title: string;
    category: '리더십' | '조직구조' | '조직문화' | '성과관리' | '인재와 역량';
    summary: string;
    imageUrl: string;
    author: string;
    date: string;
    content: string;
}
