import './App.css';
import Nav from "./nav/nav";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/portofolios/home/home";
import Contact from "./routes/contact";
import Portofolios from "./routes/portofolios";

import Damiano from './routes/portofolios/damiano';
import Marius from './routes/portofolios/marius';
import Rafael from './routes/portofolios/rafael';
import Thomas from './routes/portofolios/thomas';
import Timon from './routes/portofolios/timon';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portofolios" element={<Portofolios />} />

        <Route path="/portofolios/damiano" element={<Damiano />} />
        <Route path="/portofolios/marius" element={<Marius />} />
        <Route path="/portofolios/rafael" element={<Rafael />} />
        <Route path="/portofolios/thomas" element={<Thomas />} />
        <Route path="/portofolios/timon" element={<Timon />} />
      </Routes>
    </>
  );
}

export default App;
