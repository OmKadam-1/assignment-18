
import "./About.css";
import Navbar from "./Navbar.jsx";


function About() {
  return (
    <div className="about-container"> 
      <h1 className="about-heading">About</h1>
      <Navbar activeMenu="/about"/>

    </div>
  )
}

export default About;
