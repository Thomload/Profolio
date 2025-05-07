import React from "react";
import "./timon.css";
import ThemeSwitcher from "./themeswitch"









const Portfolio: React.FC = () => {
  return (
    <div>
      <header className="header">
        <ThemeSwitcher/>
        <nav>
          <div>
            <a href="#about">Über mich</a>
            <a href="#projects">Projekte</a>
            <a href="#contact">Kontakt</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h2>Timon Villiger</h2>
        <p> text</p>
      </section>

      <section id="about" className="section">
        <h2>Über mich</h2>
        <p>16 Jahre alt</p>
        <p></p>
      </section>

      <section id="projects" className="section">
        <h2>Projekte</h2>
        <ul className="projects">
          <li>
            <h3>Cablex</h3>
            <p>bro ka </p>
          </li>
          <li>
            <h3>Codemix</h3>
            <p>weis selber nd</p>
          </li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Kontakt</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-Mail" required />
          <textarea placeholder="Nachricht" rows={5} required />
          <button type="submit">Senden</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy;Timon</p>
      </footer>
    </div>
  );
};

export default Portfolio;
