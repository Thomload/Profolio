import './App.css'
import  Nav from "./nav/nav";
import { Routes, Route} from "react-router-dom";

import Home from "./routes/home";
import Portofolios from "./routes/portofolios";
import Contact from "./routes/contact";
import * as data from "./nav/links.json";
import{ JSX } from "react";

const links = (data as any).links;

const componentMap: Record<string, JSX.Element> = {
  "/home": <Home />,
  "/portofolios": <Portofolios />,
  "/contact": <Contact />
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {links.map((link: { href: string }) => (
          <Route key={link.href} path={link.href} element={componentMap[link.href]} />
        ))}
      </Routes>
    </>
  );
}

export default App