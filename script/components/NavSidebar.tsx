
import React from 'react';
import { HomeIcon, StarIcon, NewIcon, CategoryIcon, AboutIcon, CloseIcon } from './Icons.tsx';

interface NavSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onShowToast: (message: string) => void;
}

const NavLink: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void; }> = ({ icon, label, onClick }) => (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className="flex items-center p-4 text-lg text-gray-200 rounded-lg hover:bg-cyan-500/20 transition-colors duration-200">
        <span className="text-cyan-400 mr-4 text-xl">{icon}</span>
        <span>{label}</span>
    </a>
);

const NavSidebar: React.FC<NavSidebarProps> = ({ isOpen, onClose, onShowToast }) => {
    return (
        <>
            <div 
                className={`fixed inset-0 bg-black/60 z-[1000] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
                aria-hidden={!isOpen}
            ></div>
            <aside 
                className={`fixed top-0 left-0 h-full w-72 bg-[#1c2128] shadow-2xl z-[1001] p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                role="navigation"
                aria-label="Main Navigation"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-2xl">
                        <CloseIcon />
                    </button>
                </div>
                <nav className="flex flex-col gap-2">
                    <NavLink icon={<HomeIcon />} label="Home" onClick={onClose} />
                    <NavLink icon={<StarIcon />} label="Top Scripts" onClick={() => onShowToast('Top Scripts page is coming soon!')} />
                    <NavLink icon={<NewIcon />} label="New Releases" onClick={() => onShowToast('New Releases page is coming soon!')} />
                    <NavLink icon={<CategoryIcon />} label="Categories" onClick={() => onShowToast('Categories page is coming soon!')} />
                    <NavLink icon={<AboutIcon />} label="About" onClick={() => onShowToast('About page is coming soon!')} />
                </nav>
            </aside>
        </>
    );
};

export default NavSidebar;