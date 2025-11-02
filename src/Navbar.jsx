
import "./Navbar.css";
function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className={`menu `}>Home</a>
            <a href="/about" className={`menu `}>About</a>
            <a href="/contact" className={`menu `} >Contact</a>
        </div>
    );
}
export default Navbar;