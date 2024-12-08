import { useState } from "react";
import { navLinks } from "../costants";

const Navbar = () => {
  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({id, href, name}) => (
          <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={toggleMenu}>{name}</a>
          </li>
        ))}
      </ul>
    )
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen)=> !prevIsOpen);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-5 nx-auto c-space">
          <a
            href="/"
            className="text-white/70 text-netural-400 hover:text-white text-xl trasition-colors font-bold "
          >
            Tiza Portfolio
          </a>
          <button onClick={toggleMenu} className="text-netural-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
          <nav className="sm:flex hidden" aria-label="main navigation">
            <NavItems/>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5"><NavItems/></nav>
      </div>
    </header>
  );
};

export default Navbar;
