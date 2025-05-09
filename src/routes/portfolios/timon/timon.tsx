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
      </header>

      <section className="hero">
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem"}}>
          
          <h2>I'm Timon</h2>
          <p>
            Ich bin 16 Jahre alt und komme aus der Schweiz. In meiner Freizeit engagiere ich mich als Leiter bei der Jungwacht & Blauring Döttingen, spiele Volleyball und gehe gerne wandern. Zurzeit bin ich im ersten Lehrjahr meiner Ausbildung zum Plattformentwickler. Die Entwicklung von Programmen und das Einrichten von Netzwerken faszinieren mich besonders und bereiten mir viel Freude.
          </p>
        </div>
      </section>

      <section id="about" className="section">
      <h2>Sprachen</h2>
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
            tags={["Kundensupport" , "Fiber", "FTTH"]}
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
