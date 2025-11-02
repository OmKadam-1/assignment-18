import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./home";
import Contact from "./contact";
import About from "./about";
import Navbar from "./Navbar.jsx";
const root = createRoot(document.getElementById('root'));

const path = window.location.pathname;
console.log("Current path:", path);
if (path == '/') {
  root.render(<Home />)
} else if (path == '/About') {
  root.render(<About />)
} else if (path == '/Contact') {
  root.render(<Contact />)
} else {
  root.render(<h1>404-Page Not Found</h1>)
}

