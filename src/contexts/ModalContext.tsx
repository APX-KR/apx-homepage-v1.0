import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Solution } from '../types.ts';

// FIX: Define a type for the context value.
interface ModalContextType {
    isContactModalOpen: boolean;
    openContactModal: (message?: string) => void;
    closeContactModal: () => void;
    initialMessage: string;
    isComingSoonPopupOpen: boolean;
    openComingSoonPopup: () => void;
    closeComingSoonPopup: () => void;
    isSolutionModalOpen: boolean;
    openSolutionModal: (solution: Solution) => void;
    closeSolutionModal: () => void;
    selectedSolution: Solution | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState('');
    const [isComingSoonPopupOpen, setComingSoonPopupOpen] = useState(false);
    const [isSolutionModalOpen, setSolutionModalOpen] = useState(false);
    // FIX: Type the state for the selected solution.
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

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

    const openSolutionModal = (solution: Solution) => {
        setSelectedSolution(solution);
        setSolutionModalOpen(true);
    };

    const closeSolutionModal = () => {
        setSolutionModalOpen(false);
        setSelectedSolution(null);
    };


    return (
        <ModalContext.Provider value={{ 
            isContactModalOpen, 
            openContactModal, 
            closeContactModal, 
            initialMessage, 
            isComingSoonPopupOpen, 
            openComingSoonPopup, 
            closeComingSoonPopup,
            isSolutionModalOpen,
            openSolutionModal,
            closeSolutionModal,
            selectedSolution
        }}>
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