
import React from 'react';
import { CloseIcon, CommunityIcon, BellIcon } from './Icons.tsx';

interface CommunityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onShowToast: (message: string) => void;
}

const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose, onShowToast }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative bg-[#1c2128] rounded-2xl p-6 md:p-8 max-w-lg w-full mx-auto shadow-2xl animate-slideInUp text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-white text-3xl transition-transform duration-200 hover:rotate-90 hover:text-red-400"
                    aria-label="Close community info"
                >
                    <CloseIcon />
                </button>
                
                <div className="w-full text-center">
                    <div className="inline-block p-4 bg-cyan-500/20 rounded-full mb-4">
                        <CommunityIcon className="text-5xl text-cyan-400" />
                    </div>
                </div>

                <h2 className="mt-2 font-bold text-2xl md:text-3xl text-cyan-400">Community Hub Coming Soon!</h2>
                <p className="text-gray-300 my-4 leading-relaxed">
                    Get ready to connect with other Roblox fans! We're building an awesome community space where you can:
                </p>
                <ul className="text-left text-gray-300 list-disc list-inside mx-auto max-w-md space-y-2 my-6">
                    <li>Rate and review your favorite scripts.</li>
                    <li>Join discussions and share tips.</li>
                    <li>Follow script creators for updates.</li>
                    <li>Showcase your high scores and gameplay!</li>
                </ul>

                <div className="mt-8 flex justify-center">
                    <button 
                        onClick={() => {
                            onShowToast('Thanks! We will notify you when it is ready!');
                            onClose();
                        }}
                        className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-[0_0.4rem_1rem_0_rgba(6,182,212,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0.6rem_1.2rem_0_rgba(6,182,212,0.6)] flex items-center justify-center gap-2"
                        aria-label="Notify me when community features are available"
                    >
                       <BellIcon />
                       <span>Notify Me!</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunityModal;