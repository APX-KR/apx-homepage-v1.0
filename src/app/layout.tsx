import type { Metadata } from 'next';
import React from 'react';
import { SolutionProvider } from '../contexts/SolutionContext';
import { InsightProvider } from '../contexts/InsightContext';
import { ModalProvider } from '../contexts/ModalContext';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactModal from '../components/common/ContactModal';
import SolutionDetailModal from '../components/common/SolutionDetailModal';

import '../index.css';

export const metadata: Metadata = {
  title: 'APX Consulting Inc. | 조직의 잠재력을 성과로',
  description: 'APX는 문제의 현상이 아닌 근본적인 원인을 해결하여 조직의 지속가능한 성장을 설계합니다. 리더십, 조직구조, 인재, 문화, 성과관리에 대한 전문적인 솔루션을 만나보세요.',
  keywords: 'APX Consulting, 경영 컨설팅, 조직문화, 리더십, 성과관리, 성장 전략, HR 컨설팅',
  metadataBase: new URL('https://www.apxc.co.kr'),
  openGraph: {
    type: 'website',
    url: 'https://www.apxc.co.kr',
    title: 'APX Consulting Inc. | 조직의 잠재력을 성과로',
    description: 'APX는 문제의 현상이 아닌 근본적인 원인을 해결하여 조직의 지속가능한 성장을 설계합니다.',
    images: [
      {
        url: 'https://storage.googleapis.com/apxhomepage-asset/HeroSectionBG04.png',
        width: 1200,
        height: 630,
        alt: 'APX Consulting Hero Image',
      },
    ],
    siteName: 'APX Consulting Inc.',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APX Consulting Inc. | 조직의 잠재력을 성과로',
    description: 'APX는 문제의 현상이 아닌 근본적인 원인을 해결하여 조직의 지속가능한 성장을 설계합니다.',
    images: ['https://storage.googleapis.com/apxhomepage-asset/HeroSectionBG04.png'],
  },
  icons: {
    icon: 'https://storage.googleapis.com/apxhomepage-asset/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
};

const ComingSoonPopup = () => {
    // This component will need to be converted to a client component
    // to use hooks like useModal. For now, we stub it out.
    // The logic will be moved to a client component wrapper.
    return null;
};

// We wrap client-side stateful components in a single client boundary
// to keep the root layout as a Server Component.
const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    'use client';
    const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);

    return (
        <>
            <Header onMegaMenuToggle={setIsMegaMenuOpen} />
            <main className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMegaMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
                {children}
            </main>
            <Footer />
            <ContactModal />
            <SolutionDetailModal />
            {/* <ComingSoonPopup /> can be added here once converted */}
        </>
    );
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "(주)에이피엑스컨설팅",
          "alternateName": "APX Consulting Inc.",
          "url": "https://www.apxc.co.kr",
          "logo": "https://storage.googleapis.com/apxhomepage-asset/APX_Logo(G).png",
          "contactPoint": { "@type": "ContactPoint", "email": "support@apxc.co.kr", "contactType": "customer service" },
          "address": { "@type": "PostalAddress", "streetAddress": "테헤란로 128, 317호", "addressLocality": "서울특별시 강남구", "postalCode": "06234", "addressCountry": "KR" }
        })}} />
      </head>
      <body className="bg-bg-primary text-text-primary">
          <SolutionProvider>
              <InsightProvider>
                  <ModalProvider>
                      <ClientWrapper>
                          {children}
                      </ClientWrapper>
                  </ModalProvider>
              </InsightProvider>
          </SolutionProvider>
      </body>
    </html>
  )
}
