import React from 'react';
import Container from './Container';

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-white/80 hover:text-white transition-colors duration-300 text-body-sm">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-apx-deep-growth text-white">
            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12">
                    {/* Column 1: Company Info */}
                    <div className="lg:col-span-4 text-body-sm text-white/90">
                        <a href="https://www.apxc.co.kr" className="mb-6 inline-block">
                            <img src="https://storage.googleapis.com/apxhomepage-asset/APX_Logo(W).png" alt="APX Consulting Logo" className="h-10 w-auto" />
                        </a>
                        <div className="space-y-2">
                            <p className="font-semibold text-white">(주)에이피엑스컨설팅</p>
                            <p><span className="font-semibold text-white/70 mr-2">대표이사</span>김혜숙</p>
                            <p><span className="font-semibold text-white/70 mr-2">사업자등록번호</span>368-87-03618</p>
                            <p><span className="font-semibold text-white/70 mr-2">본사</span>06234 서울특별시 강남구 테헤란로 128, 317호</p>
                            <p><span className="font-semibold text-white/70 mr-2">이메일</span>support@apxc.co.kr</p>
                        </div>
                    </div>

                    {/* Column 2: Solutions */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">솔루션</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="#">리더십 역량</FooterLink></li>
                            <li><FooterLink href="#">인재경영</FooterLink></li>
                            <li><FooterLink href="#">조직운영</FooterLink></li>
                            <li><FooterLink href="#">문화혁신</FooterLink></li>
                            <li><FooterLink href="#">성과관리</FooterLink></li>
                            <li><FooterLink href="#">인사분석</FooterLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Academy */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">아카데미</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="#">리더십 아카데미</FooterLink></li>
                            <li><FooterLink href="#">공통역량 아카데미</FooterLink></li>
                            <li><FooterLink href="#">직무전문 아카데미</FooterLink></li>
                            <li><FooterLink href="#">조직문화 아카데미</FooterLink></li>
                        </ul>
                    </div>

                     {/* Column 4: Company */}
                     <div className="lg:col-span-2">
                        <h3 className="font-semibold text-white mb-4 text-body-base">회사</h3>
                        <ul className="space-y-3">
                             <li><FooterLink href="#">인사이트</FooterLink></li>
                             <li><FooterLink href="#">성공사례</FooterLink></li>
                             <li><FooterLink href="#">회사소개</FooterLink></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-white/30 text-left text-white/70 text-body-sm">
                    <p>&copy; {new Date().getFullYear()} APX Consulting. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;