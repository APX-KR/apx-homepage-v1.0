import React from 'react';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[110] flex items-center justify-center p-4" onClick={onClose} aria-modal="true" role="dialog">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 border-b border-border-light flex justify-between items-center">
                    <h2 className="text-h4 font-bold text-text-primary">개인정보 처리방침</h2>
                    <button onClick={onClose} className="text-text-tertiary hover:text-text-primary text-3xl font-light" aria-label="Close modal">&times;</button>
                </div>
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-text-secondary text-body-sm leading-relaxed">
                    <h3 className="text-h6 font-bold text-text-primary">개인정보 처리에 관한 동의서 (문의 서비스 이용자용)</h3>
                    <p>(주)에이피엑스컨설팅(이하 '회사')은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법령에 따라, 문의 서비스 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리 방침을 수립·공개하며, 이에 대한 정보주체의 동의를 받고자 합니다.</p>
                    <p>본 동의서의 내용을 자세히 읽고 숙지하신 후 동의 여부를 신중하게 결정하여 주시기 바랍니다.</p>
                    
                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제1조 (개인정보의 처리 목적)</h4>
                        <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>서비스 제공 및 문의 처리:</strong> 문의사항 접수, 문의자 신원 확인, 사실관계 조사를 위한 연락, 처리 결과 통보 등</li>
                            <li><strong>기록 보존:</strong> 서비스 이용 관련 분쟁 발생 시 원인 규명 및 해결을 위한 기록 보존</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제2조 (처리하는 개인정보의 항목)</h4>
                        <p>회사는 문의 서비스 제공을 위해 필요한 최소한의 개인정보만을 아래와 같이 수집합니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>필수항목:</strong> 회사명, 부서명, 성함, 연락처, 이메일, 문의 내용</li>
                            <li><strong>선택항목:</strong> 직위, 직책</li>
                        </ul>
                        <p className="mt-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">※ 주의: '문의내용' 작성 시, 주민등록번호, 여권번호, 운전면허번호 등 법령에 근거하여 처리가 허용된 경우를 제외한 고유식별정보나, 사상, 신념, 노동조합 가입 여부, 건강 상태 등 민감한 정보가 포함되지 않도록 각별히 유의하여 주시기 바랍니다. 이용자의 부주의로 인한 불필요한 정보 노출에 대해 회사는 원칙적으로 책임을 지지 않습니다.</p>
                    </div>

                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제3조 (개인정보의 처리 및 보유 기간)</h4>
                        <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 보유·이용기간 내에서 개인정보를 처리 및 보유합니다.</p>
                        <p>② 문의 서비스 제공을 위한 개인정보의 처리 및 보유 기간은 다음과 같습니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>보유 근거:</strong> 정보주체의 동의, 내부 분쟁 관리 규정</li>
                            <li><strong>보유 기간:</strong> 문의 접수 후 처리 완료일로부터 3년</li>
                            <li><strong>보유 기간 경과 후 조치:</strong> 보유 기간이 경과한 개인정보는 지체 없이 파기합니다.</li>
                        </ul>
                        <p>③ 단, 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령의 규정에 의하여 보존할 필요가 있는 경우, 회사는 해당 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.</p>
                    </div>

                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제4조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h4>
                        <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
                        <p>② 권리 행사는 개인정보보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
                        <p>③ 정보주체는 본 개인정보 처리에 대한 동의를 거부할 권리가 있습니다. 다만, 필수항목의 처리에 대한 동의를 거부하실 경우, 문의 서비스의 정상적인 이용이 제한될 수 있음을 알려드립니다.</p>
                    </div>

                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제5조 (개인정보의 파기)</h4>
                        <p>회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차 및 방법은 다음과 같습니다.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>파기절차:</strong> 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                            <li><strong>파기방법:</strong> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-body-base font-bold text-text-primary mb-2">제6조 (동의)</h4>
                        <p>본인은 상기 제1조 내지 제5조의 내용을 모두 확인하고 명확히 이해하였으며, 이에 따라 (주)에이피엑스컨설팅이 본인의 개인정보를 처리하는 것에 대하여 자유로운 의사에 따라 동의합니다.</p>
                    </div>
                </div>
                <div className="p-6 border-t border-border-light mt-auto bg-gray-50 text-right">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2.5 bg-apx-growth-green text-white font-semibold text-body-base leading-none rounded-full border-2 border-transparent hover:bg-apx-deep-growth transition-all duration-300"
                    >
                        확인 및 닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;