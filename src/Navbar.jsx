
import "./Navbar.css";

function Navbar({activeMenu}) {
  return (
    <div className="navbar">
        <a href="/" className={`menu ${activeMenu === "/" ? "menu-active" : ""}`}>Home</a>
        <a href="/about" className={`menu ${activeMenu === "/about" ? "menu-active" : ""}` }>About</a>
        <a href="/contact" className={`menu ${activeMenu === "/contact" ? "menu-active" : ""}`}>Contact</a>
    </div>
  )
}

export default Navbar;
