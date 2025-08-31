import React, { useState } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import { useModal, ModalProvider } from '../../contexts/ModalContext.tsx';
import ContactModal from './ContactModal.tsx';
import SolutionDetailModal from './SolutionDetailModal.tsx';
import { SolutionProvider } from '../../contexts/SolutionContext.tsx';
import { InsightProvider } from '../../contexts/InsightContext.tsx';


const ComingSoonPopup = () => {
    const { isComingSoonPopupOpen, closeComingSoonPopup } = useModal();

    if (!isComingSoonPopupOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4" 
            onClick={closeComingSoonPopup}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
        >
            <div 
                className="bg-white rounded-2xl soft-shadow-xl w-full max-w-sm text-center p-8" 
                onClick={(e) => e.stopPropagation()}
            >
                <h3 id="popup-title" className="text-h4 font-semibold text-text-primary mb-4">
                    준비 중입니다
                </h3>
                <p className="text-body-base text-text-secondary mb-8">
                    현재 페이지는 업데이트 준비 중입니다. <br/>곧 좋은 모습으로 찾아뵙겠습니다.
                </p>
                <button
                    onClick={closeComingSoonPopup}
                    className="w-full sm:w-auto px-8 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300"
                >
                    확인
                </button>
            </div>
        </div>
    );
};

// This component provides the application shell and global modals. It's wrapped
// by the necessary context providers to function correctly.
const AppShell = ({ children }: { children: React.ReactNode }) => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    
    return (
        <div>
            <Header onMegaMenuToggle={setIsMegaMenuOpen} />
            <main className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMegaMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
                {children}
            </main>
            <Footer />
            <ContactModal />
            <ComingSoonPopup />
            <SolutionDetailModal />
        </div>
    );
};


// This component has been refactored into a true RootLayout, analogous to `layout.tsx`
// in a Next.js App Router setup. It's responsible for composing all global context
// providers, ensuring that state is available throughout the entire application.
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SolutionProvider>
            <InsightProvider>
                <ModalProvider>
                    <AppShell>
                        {children}
                    </AppShell>
                </ModalProvider>
            </InsightProvider>
        </SolutionProvider>
    );
}