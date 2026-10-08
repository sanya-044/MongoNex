 import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <Link to="/" className="text-xl font-black uppercase tracking-widest text-white">
        Mongonex<span className="text-neutral-500">.</span>
      </Link>

      <nav className="flex items-center gap-6 sm:gap-10 text-xs uppercase tracking-[0.2em] font-medium">
        <Link
          to="/"
          className={`transition-colors hover:text-white ${isActive("/") ? "text-white underline underline-offset-8" : "text-neutral-400"}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`transition-colors hover:text-white ${isActive("/about") ? "text-white underline underline-offset-8" : "text-neutral-400"}`}
        >
          About Us
        </Link>
        <Link
          to="/founders"
          className={`transition-colors hover:text-white ${isActive("/founders") ? "text-white underline underline-offset-8" : "text-neutral-400"}`}
        >
          Founders
        </Link>
        <Link
          to="/projects"
          className={`transition-colors hover:text-white ${isActive("/projects") ? "text-white underline underline-offset-8" : "text-neutral-400"}`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}