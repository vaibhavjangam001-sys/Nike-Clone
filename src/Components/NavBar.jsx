import { useEffect, useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {

    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
        document.body.style.overflow = "auto"
    };

  }, [menuOpen]);

  return (
    <nav className="container">
      <div>
        <img src="/Nike-Clone/images/brand_logo.png" alt="Logo" />
      </div>

      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li onClick={()=>setMenuOpen(false)}><span className="menu-text">MENU</span></li>
        <li onClick={()=>setMenuOpen(false)}><span className="menu-text">LOCATION</span></li>
        <li onClick={()=>setMenuOpen(false)}><span className="menu-text">ABOUT</span></li>
        <li onClick={()=>setMenuOpen(false)}><span className="menu-text">CONTACT</span></li>
        <li className="Login" onClick={()=>setMenuOpen(false)}><span className="menu-text">LOGIN</span></li>
      </ul>

      <div>
        <button className="btn nav-sign">SIGN UP</button>
        <button className="btn nav-login">Login</button>
      </div>
      
    </nav>
  );
};

export default NavBar;
