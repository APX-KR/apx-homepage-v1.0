
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
    isContactModalOpen: boolean;
    openContactModal: (initialMessage?: string) => void;
    closeContactModal: () => void;
    initialMessage: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState('');

    const openContactModal = (message = '') => {
        setInitialMessage(message);
        setContactModalOpen(true);
    };

    const closeContactModal = () => {
        setContactModalOpen(false);
        setInitialMessage(''); // Reset message on close
    };

    return (
        <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal, initialMessage }}>
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