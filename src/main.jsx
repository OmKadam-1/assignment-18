
import { createRoot } from 'react-dom/client';
import { BrowserRouter ,Routes,Route} from "react-router";

import './index.css';
import Home from "./Home.jsx";
import About from './About.jsx';
import Contact from './Contact.jsx';


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
  </Routes>
  </BrowserRouter>
)

