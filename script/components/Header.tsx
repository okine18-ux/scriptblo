
import React from 'react';
import { ListIcon, CommunityIcon } from './Icons.tsx';

interface HeaderProps {
    onToggleNav: () => void;
    onToggleCommunity: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleNav, onToggleCommunity }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 bg-black/30 backdrop-blur-md border-b border-white/20 shadow-lg">
            <button 
                onClick={onToggleNav} 
                className="text-white text-3xl transition-colors duration-300 hover:text-cyan-400"
                aria-label="Navigation Menu"
            >
                <ListIcon />
            </button>
            <div className="h-10 sm:h-12">
                <img 
                    src="https://avatars.mds.yandex.net/i?id=2a0e7069a4b811589b59829f2339ccd3fbc5dc0d-5204758-images-thumbs&n=13" 
                    alt="Roblox Scripts Hub Logo" 
                    className="h-full object-contain"
                />
            </div>
            <button 
                onClick={onToggleCommunity} 
                className="text-white text-3xl transition-colors duration-300 hover:text-cyan-400"
                aria-label="Community"
            >
                <CommunityIcon />
            </button>
        </header>
    );
};

export default Header;
