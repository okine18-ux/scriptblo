
import React from 'react';
import type { Game } from '../types.ts';
import { DownloadCloudIcon } from './Icons.tsx';

interface GameCardProps {
    game: Game;
    onSelect: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
    return (
        <div 
            className="flex flex-col bg-[#161b22] rounded-2xl p-4 text-center shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-[0_0_25px_0_rgba(6,182,212,0.3)]"
            onClick={onSelect}
            onKeyPress={(e) => e.key === 'Enter' && onSelect()}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${game.name} script`}
        >
            <div className="relative mb-4">
                <img 
                    src={game.image} 
                    alt={`${game.name} script icon`} 
                    className="w-32 h-32 mx-auto object-cover rounded-2xl border-2 border-cyan-700"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/130x130/161b22/ffffff?text=SCRIPT')}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white font-bold rounded-full px-3 py-1 text-xs border-4 border-[#161b22] shadow-md">
                    SCRIPT
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-center mt-2">
                <h3 className="font-bold text-white text-base truncate" title={game.name}>{game.name}</h3>
                <div className="flex justify-center items-center text-cyan-300 text-xs mt-2 font-medium gap-3">
                    <div className="flex items-center gap-1.5">
                        <DownloadCloudIcon />
                        <span aria-label={`${game.downloads} downloads`}>{game.downloads}+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;