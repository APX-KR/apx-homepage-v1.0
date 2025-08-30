
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
    isContactModalOpen: boolean;
    openContactModal: (initialMessage?: string) => void;
    closeContactModal: () => void;
    initialMessage: string;
    isComingSoonPopupOpen: boolean;
    openComingSoonPopup: () => void;
    closeComingSoonPopup: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState('');
    const [isComingSoonPopupOpen, setComingSoonPopupOpen] = useState(false);

    const openContactModal = (message = '') => {
        setInitialMessage(message);
        setContactModalOpen(true);
    };

    const closeContactModal = () => {
        setContactModalOpen(false);
        setInitialMessage(''); // Reset message on close
    };

    const openComingSoonPopup = () => setComingSoonPopupOpen(true);
    const closeComingSoonPopup = () => setComingSoonPopupOpen(false);


    return (
        <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal, initialMessage, isComingSoonPopupOpen, openComingSoonPopup, closeComingSoonPopup }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
