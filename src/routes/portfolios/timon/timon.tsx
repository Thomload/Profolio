import React from "react";
import "./timon.css";
import ThemeSwitcher from "./themeswitch"
import LanguageProgress from "./LanguageProgress";
import ProjectCard from "./ProjectCard"


const Timon: React.FC = () => {
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
        <div style={{ padding: "2rem", maxWidth: "800px" }}>
          <LanguageProgress language="Deutsch" percentage={100} description="Muttersprache" />
          <LanguageProgress language="Englisch" percentage={75} description="Fliessend" />
          <LanguageProgress language="Französisch" percentage={40} description="Grundlagen"/>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projekte</h2>
        <ul className="projects">
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <ProjectCard
            title="Cablex"
            description="Bei Kunden probleme von Router/Kabel beheben."
            tags={["Kundensupport, Fiber, FTTH"]}
          />
          <ProjectCard
             title="Codemix"
             description="Erlernen von verschiedenen Sprachen, im Team Projekte erstellen"
             tags={["Web", "Frontend", "Teamarbeit"]}
          />
    </div>
        </ul>
      </section>
    </div>
  );
};

export default Timon;
