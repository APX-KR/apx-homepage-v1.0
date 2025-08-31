import React from 'react';
import Container from './Container.tsx';
import Link from 'next/link';

const FooterLink = ({ path, children }: { path: string, children: React.ReactNode }) => {
    return (
        <Link href={path} className="text-white hover:opacity-80 transition-opacity duration-300 text-body-sm">
            {children}
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className="bg-apx-deep-growth text-white">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Column 1: Company Info */}
                    <div className="lg:col-span-4 text-body-sm text-white">
                        <Link href="/" className="mb-6 inline-block">
                            <img src="https://storage.googleapis.com/apxhomepage-asset/APX_Logo(W).png" alt="APX Consulting Logo" className="h-10 w-auto" />
                        </Link>
                        <div className="space-y-2">
                            <p className="font-semibold text-white">(주)에이피엑스컨설팅</p>
                            <p><span className="font-semibold text-white mr-2">대표이사</span>김혜숙</p>
                            <p><span className="font-semibold text-white mr-2">사업자등록번호</span>368-87-03618</p>
                            <p><span className="font-semibold text-white mr-2">본사</span>06234 서울특별시 강남구 테헤란로 128, 317호</p>
                            <p><span className="font-semibold text-white mr-2">이메일</span>support@apxc.co.kr</p>
                        </div>
                    </div>

                    {/* Column 2: APX의 관점 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">APX의 관점</h3>
                        <ul className="space-y-3">
                            <li><FooterLink path="/perspective#philosophy">철학</FooterLink></li>
                            <li><FooterLink path="/perspective#methodology">방법론</FooterLink></li>
                            <li><FooterLink path="/perspective#process">프로세스</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: P&O 솔루션 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">P&O 솔루션</h3>
                        <ul className="space-y-3">
                            <li><FooterLink path="/solutions#diagnose">진단과 분석</FooterLink></li>
                            <li><FooterLink path="/solutions#strategy">전략 컨설팅</FooterLink></li>
                            <li><FooterLink path="/solutions#development">역량 개발</FooterLink></li>
                        </ul>
                    </div>
                    
                    {/* Column 4: BPO 서비스 */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">BPO 서비스</h3>
                        <ul className="space-y-3">
                            <li><FooterLink path="/services#cfo-service">CFO 구독 서비스</FooterLink></li>
                            <li><FooterLink path="/services#coo-service">COO 구독 서비스</FooterLink></li>
                            <li><FooterLink path="/services#package-service">경영지원 패키지</FooterLink></li>
                        </ul>
                    </div>

                     {/* Column 5: Insights & About */}
                     <div className="lg:col-span-2">
                        <div className="space-y-3">
                            <Link href='/insights' className="block font-semibold text-white text-body-base hover:opacity-80 transition-opacity duration-300">
                                인사이트
                            </Link>
                            <Link href='/about' className="block font-semibold text-white text-body-base hover:opacity-80 transition-opacity duration-300">
                                회사소개
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/30 text-left text-white text-body-sm">
                    <p>&copy; {new Date().getFullYear()} APX Consulting. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;