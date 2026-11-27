import { useEffect, useState } from 'react';
import './Navbar.css';

const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = 'Home';
      links.forEach((label) => { const el = document.getElementById(label.toLowerCase()); if (el && window.scrollY >= el.offsetTop - 180) current = label; });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><div className="nav-wrap">
    <a className="brand" href="#home" aria-label="MyName home">MyName<span>&lt;/&gt;</span></a>
    <button className={`menu-toggle ${open ? 'open' : ''}`} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
      {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className={active === link ? 'active' : ''} onClick={() => setOpen(false)}>{link}</a>)}
    </nav>
  </div></header>;
}
