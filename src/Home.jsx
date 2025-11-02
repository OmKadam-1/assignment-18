
import "./Home.css";
import Navbar from "./Navbar.jsx";


function Home() {
  return (
    <div className="home-container"> 
      <h1 className="home-heading">Home</h1>
      <Navbar activeMenu="/home"/>

    </div>
  )
}

export default Home;
