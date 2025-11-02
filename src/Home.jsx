import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home-container">
      <h1 className="heading">Home</h1>
      <Navbar activeMenu="/"/>
    </div>
  )
}

export default Home;