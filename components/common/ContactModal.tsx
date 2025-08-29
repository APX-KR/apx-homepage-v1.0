import React, { useState, useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpQ1DFCQkuH4TuoXVBnVUg0HoEASQqODA2AsR2O2DaxO0W_OJJ51o29kPsGopoc8sT4w/exec';

const ContactModal: React.FC = () => {
    const { isContactModalOpen, closeContactModal, initialMessage } = useModal();
    
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [inquiryType, setInquiryType] = useState('대면 상담 요청');
    const [message, setMessage] = useState('');
    const [agreed, setAgreed] = useState(false);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    useEffect(() => {
        if (initialMessage) {
            setMessage(initialMessage);
        }
    }, [initialMessage]);
    
    useEffect(() => {
        // 모달이 열릴 때 상태 초기화 (초기 메시지는 유지)
        if (isContactModalOpen) {
            setName('');
            setCompany('');
            setDepartment('');
            setJobTitle('');
            setPosition('');
            setEmail('');
            setPhone('');
            setInquiryType('대면 상담 요청');
            setAgreed(false);
            setIsSubmitting(false);
            setIsSubmitted(false);
            setSubmitError(null);
            setMessage(initialMessage);
            setIsPrivacyModalOpen(false); // Close privacy modal when contact modal re-opens
        }
    }, [isContactModalOpen, initialMessage]);


    if (!isContactModalOpen) {
        return null;
    }

    const isFormValid = name && company && department && email && phone && message && agreed;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        setIsSubmitting(true);
        setSubmitError(null);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('company', company);
        formData.append('department', department);
        formData.append('jobTitle', jobTitle);
        formData.append('position', position);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('inquiryType', inquiryType);
        formData.append('message', message);

        try {
            // The 'no-cors' mode is used to prevent CORS errors when submitting to Google Apps Script.
            // We can't read the response, but the request will be sent.
            // If fetch completes without throwing an error, we assume it's successful.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });

            setIsSubmitted(true);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleClose = () => {
        closeContactModal();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4" onClick={handleClose} aria-modal="true" role="dialog">
                <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
                     <button onClick={handleClose} className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary text-3xl font-light z-10" aria-label="Close modal">&times;</button>
                    
                    {isSubmitted ? (
                        <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center h-96">
                            <h3 className="text-h3 font-bold text-strategy-blue mb-4">문의가 성공적으로 접수되었습니다.</h3>
                            <p className="text-body-base text-text-secondary mb-8">검토 후 빠른 시일 내에 회신드리겠습니다.</p>
                            <button 
                                onClick={handleClose}
                                className="w-full sm:w-auto px-8 py-3 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300"
                            >
                                확인
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="p-6 md:p-8 border-b border-border-light">
                                <h3 className="text-h3 font-bold text-text-primary leading-tight tracking-tight-title">문의하기</h3>
                                <p className="text-body-base text-text-secondary mt-1">APX의 솔루션이 궁금하신가요? 아래 정보를 남겨주시면 신속하게 답변드리겠습니다.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="company" className="block text-body-sm font-medium text-text-secondary mb-1">회사명 <span className="text-error">*</span></label>
                                        <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="department" className="block text-body-sm font-medium text-text-secondary mb-1">부서명 <span className="text-error">*</span></label>
                                        <input type="text" id="department" value={department} onChange={e => setDepartment(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="jobTitle" className="block text-body-sm font-medium text-text-secondary mb-1">직위</label>
                                        <input type="text" id="jobTitle" value={jobTitle} onChange={e => setJobTitle(e.target.value)} className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="position" className="block text-body-sm font-medium text-text-secondary mb-1">직책</label>
                                        <input type="text" id="position" value={position} onChange={e => setPosition(e.target.value)} className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-body-sm font-medium text-text-secondary mb-1">성함 <span className="text-error">*</span></label>
                                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-body-sm font-medium text-text-secondary mb-1">연락처 <span className="text-error">*</span></label>
                                        <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-body-sm font-medium text-text-secondary mb-1">이메일 <span className="text-error">*</span></label>
                                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue" />
                                    </div>
                                    <div>
                                        <label htmlFor="inquiryType" className="block text-body-sm font-medium text-text-secondary mb-1">문의 유형</label>
                                        <select id="inquiryType" value={inquiryType} onChange={e => setInquiryType(e.target.value)} className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue bg-white">
                                            <option>대면 상담 요청</option>
                                            <option>비대면 상담 요청</option>
                                            <option>제안서 요청</option>
                                            <option>협력 제안</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-body-sm font-medium text-text-secondary mb-1">문의 내용 <span className="text-error">*</span></label>
                                    <textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} required className="w-full px-3 py-2 border border-border-light rounded-md focus:outline-none focus:ring-2 focus:ring-strategy-blue"></textarea>
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="agreed" checked={agreed} onChange={e => setAgreed(e.target.checked)} required className="h-4 w-4 text-apx-growth-green border-gray-300 rounded focus:ring-apx-growth-green mt-1" />
                                    <label htmlFor="agreed" className="ml-2 text-body-sm text-text-secondary">
                                        <button type="button" onClick={(e) => { e.preventDefault(); setIsPrivacyModalOpen(true); }} className="underline hover:text-text-primary text-left">개인정보 수집 및 이용</button>에 동의합니다. <span className="text-error">*</span>
                                    </label>
                                </div>
                            </form>
                             <div className="p-6 md:p-8 border-t border-border-light mt-auto bg-gray-50">
                                {submitError && <p className="text-error text-center text-body-sm mb-4">{submitError}</p>}
                                <button 
                                    type="submit" 
                                    onClick={handleSubmit}
                                    disabled={!isFormValid || isSubmitting}
                                    className="w-full bg-apx-growth-green text-white py-3 rounded-full font-semibold text-body-base leading-none hover:bg-apx-deep-growth transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? '접수 중...' : '문의 접수하기'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
        </>
    );
};

export default ContactModal;