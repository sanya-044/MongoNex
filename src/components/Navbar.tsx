 import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-10 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-black uppercase tracking-widest text-white">
        Mongonex<span className="text-neutral-500">.</span>
      </Link>

      <div className="flex items-center gap-6 sm:gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-white transition-colors">
          About Us
        </Link>
        <Link to="/founders" className="hover:text-white transition-colors">
          Founders
        </Link>
        <Link to="/projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-white transition-colors text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
}