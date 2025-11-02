
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header.tsx';
import SearchBar from './components/SearchBar.tsx';
import GameGrid from './components/GameGrid.tsx';
import GameModal from './components/GameModal.tsx';
import Footer from './components/Footer.tsx';
import NavSidebar from './components/NavSidebar.tsx';
import CommunityModal from './components/CommunityModal.tsx';
import { InfoIcon } from './components/Icons.tsx';
import { gamesData } from './constants.ts';
import type { Game } from './types.ts';

// Add type definition for the global locker function to avoid TS errors
declare global {
    interface Window {
        _iD: () => void;
    }
}

// --- TOAST NOTIFICATION COMPONENT ---
interface ToastProps {
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[1000] bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-slideInDown"
            role="alert"
            aria-live="assertive"
        >
            <InfoIcon />
            <span>{message}</span>
        </div>
    );
};
// --- END TOAST COMPONENT ---


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

    const filteredGames = useMemo(() => {
        if (!searchTerm) {
            return gamesData;
        }
        const lowercasedFilter = searchTerm.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
        return gamesData.filter(game =>
            game.name.toLowerCase().includes(lowercasedFilter) ||
            game.description.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm]);

    const handleGameSelect = (game: Game) => {
        setSelectedGame(game);
    };

    const handleCloseModal = () => {
        setSelectedGame(null);
    };
    
    const showToast = (message: string) => {
        setToastMessage(message);
    };

    const handleDownload = () => {
        if (!selectedGame) return;

        if (typeof window._iD === 'function') {
            window._iD();
        } else {
            console.error('Content locker function not found.');
            showToast('Error: Could not start the script process.');
        }
    };

    return (
        <div className="bg-[rgba(13,17,23,0.85)] min-h-screen pt-20 sm:pt-24">
            <NavSidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} onShowToast={showToast} />
            <CommunityModal isOpen={isCommunityModalOpen} onClose={() => setIsCommunityModalOpen(false)} onShowToast={showToast} />

            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
            
            <Header 
                onToggleNav={() => setIsNavOpen(true)} 
                onToggleCommunity={() => setIsCommunityModalOpen(true)} 
            />

            <main className="container mx-auto px-4">
                <section className="mb-8">
                    <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <h1 className="text-center text-4xl sm:text-5xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500 [text-shadow:0_0_15px_rgba(6,182,212,0.4)]">
                        Top Roblox Scripts
                    </h1>
                </section>

                <GameGrid games={filteredGames} onGameSelect={handleGameSelect} />
            </main>

            {selectedGame && (
                <GameModal 
                    game={selectedGame} 
                    onClose={handleCloseModal} 
                    onDownload={handleDownload}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;