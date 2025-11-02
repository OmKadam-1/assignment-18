
import "./Navbar.css";
function Navbar({ activeMenu }) {
    return (
        <div className="navbar">
            <a href="/" className={`menu `}>Home</a>
            <a href="/About" className={`menu `}>About</a>
            <a href="/Contact" className={`menu `} >Contact</a>
        </div>
    );
}
export default Navbar;