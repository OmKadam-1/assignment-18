import { createRoot } from 'react-dom/client';
import './index.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
console.log( `You are on : ${window.location.pathname}`);

const path = window.location.pathname;

const root = createRoot(document.getElementById('root'));

console.log("Current path:" , path);

if (path === "/") {
  root.render(<Home/> );
} else if (path === "/about") {
  root.render(<About/>);
} else if (path === "/contact") {
  root.render(<Contact/>);
} else {
  root.render(<h1>404 - Page Not Found</h1>)
}