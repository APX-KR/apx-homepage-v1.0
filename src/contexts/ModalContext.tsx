import React, { createContext, useState, useContext, ReactNode } from 'react';

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [initialMessage, setInitialMessage] = useState('');
    const [isComingSoonPopupOpen, setComingSoonPopupOpen] = useState(false);
    const [isSolutionModalOpen, setSolutionModalOpen] = useState(false);
    const [selectedSolution, setSelectedSolution] = useState(null);

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

    const openSolutionModal = (solution) => {
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