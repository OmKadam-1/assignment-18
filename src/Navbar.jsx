
import "./Navbar.css";
function Navbar({ activeMenu }) {
    return (
        <div className="navbar">
            <a href="/" className={`menu ${activeMenu === "/" ? "menu-active" : ""}`}>Home</a>
            <a href="/About" className={`menu ${activeMenu === "/About" ? "menu-active" : ""}`}>About</a>
            <a href="/Contact" className={`menu ${activeMenu === "/Contact" ? "menu-active" : ""}`} >Contact</a>
        </div>
    );
}
export default Navbar;