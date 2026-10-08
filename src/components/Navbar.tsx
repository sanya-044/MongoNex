 import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-10 py-4 flex items-center justify-between">
      <Link to="/" onClick={closeMenu} className="text-xl font-black uppercase tracking-widest text-white">
        Mongonex<span className="text-neutral-500">.</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
        <Link to="/founders" className="hover:text-white transition-colors">Founders</Link>
        <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-neutral-900 py-6 px-6 flex flex-col gap-5 text-sm font-medium uppercase tracking-widest text-neutral-400 md:hidden shadow-2xl">
          <Link to="/" onClick={closeMenu} className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-white transition-colors">About Us</Link>
          <Link to="/founders" onClick={closeMenu} className="hover:text-white transition-colors">Founders</Link>
          <Link to="/projects" onClick={closeMenu} className="hover:text-white transition-colors">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-white transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
}