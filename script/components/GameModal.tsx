
import React from 'react';
import type { Game } from '../types.ts';
import { BoxIcon, DownloadIcon, ReviewsIcon, CloseIcon, DownloadCloudFillIcon } from './Icons.tsx';

interface GameModalProps {
    game: Game;
    onClose: () => void;
    onDownload: () => void;
}

const InfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex flex-col items-center text-gray-200">
        <div className="text-cyan-400 text-2xl mb-1">{icon}</div>
        <div className="font-semibold">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
    </div>
);

const GameModal: React.FC<GameModalProps> = ({ game, onClose, onDownload }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative bg-[#1c2128] rounded-2xl p-6 md:p-8 max-w-lg md:max-w-2xl w-full mx-auto shadow-2xl animate-slideInUp text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-white text-3xl transition-transform duration-200 hover:rotate-90 hover:text-red-400"
                    aria-label="Close script details"
                >
                    <CloseIcon />
                </button>
                
                <div className="w-full text-center -mt-16 md:-mt-20">
                    <img 
                        src={game.image} 
                        alt={`${game.name} Script Icon`}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover inline-block border-8 border-[#1c2128] rounded-2xl shadow-lg"
                        onError={(e) => (e.currentTarget.src = 'https://placehold.co/180x180/1c2128/ffffff?text=SCRIPT')}
                    />
                </div>

                <h2 className="mt-4 font-bold text-2xl md:text-3xl text-cyan-400">{game.name}</h2>
                <p className="text-gray-300 my-4 leading-relaxed">{game.description}</p>
                
                <div className="flex justify-evenly items-center my-6 flex-wrap gap-4">
                    <InfoItem icon={<BoxIcon />} value={game.size} label="Size" />
                    <InfoItem icon={<DownloadIcon />} value={game.downloads} label="Downloads" />
                    <InfoItem icon={<ReviewsIcon />} value={game.reviews} label="Reviews" />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={onDownload}
                        className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold py-3 px-12 rounded-full text-lg shadow-[0_0.4rem_1rem_0_rgba(6,182,212,0.4)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0.6rem_1.2rem_0_rgba(6,182,212,0.6)] flex items-center justify-center w-full sm:w-auto mx-auto sm:mx-0 gap-2"
                        aria-label={`Get ${game.name} script`}
                    >
                       <DownloadCloudFillIcon />
                       <span>Get Script</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameModal;