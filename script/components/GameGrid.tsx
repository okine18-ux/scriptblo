
import React from 'react';
import GameCard from './GameCard.tsx';
import type { Game } from '../types.ts';

interface GameGridProps {
    games: Game[];
    onGameSelect: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onGameSelect }) => {
    if (games.length === 0) {
        return <div className="text-center text-gray-300 text-lg my-16">No Roblox scripts found matching your search.</div>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {games.map(game => (
                <GameCard key={game.name} game={game} onSelect={() => onGameSelect(game)} />
            ))}
        </div>
    );
};

export default GameGrid;