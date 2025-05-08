import "./App.css";
import Nav from "./nav/nav";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Contact from "./routes/contact/contact";
import Portfolios from "./routes/portfolios";

import Damiano from "./routes/portfolios/damiano";
import Marius from "./routes/portfolios/marius";
import Rafael from "./routes/portfolios/rafael";
import Thomas from "./routes/portfolios/thomas";
import Timon from "./routes/portfolios/timon/timon";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolios" element={<Portfolios />} />

        <Route path="/portfolios/damiano" element={<Damiano />} />
        <Route path="/portfolios/marius" element={<Marius />} />
        <Route path="/portfolios/rafael" element={<Rafael />} />
        <Route path="/portfolios/thomas" element={<Thomas />} />
        <Route path="/portfolios/timon/timon" element={<Timon />} />
      </Routes>
    </>
  );
}

export default App;
