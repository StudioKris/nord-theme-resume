import "./App.css";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience, { Company } from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";
import Languages from "./components/Languages/Languages";
import Skills from "./components/Skills/Skills";

import competencies from "./assets/competencies.json";
import labels from "./assets/labels.json";
import me from "./assets/me.json";
import skills from "./assets/skills.json";
import Competencies from "./components/Competencies/Competencies";
import FloatingActionButton from "./components/FAB/FloatingActionButton";
import Hero from "./components/HeroBanner/HeroBanner";
import LeftCard from "./components/LeftCard/LeftCard";

function App() {
  const companiesMap = new Map<string, Company>(Object.entries(me.companies));

  return (
    <>
      <div className="app">
        <div className="hero-banner-holder">
          <Hero {...me.me} />
        </div>
        <div className="split">
          <img src="./split.svg" alt="My Happy SVG" />
        </div>
        <div className="justify-between bg-nord0" id="About">
          <About {...me.about} />
        </div>
        <div className="main">
          <div className="main-left">
            <LeftCard title={labels.languages}>
              <Languages languages={me.languages} />
            </LeftCard>
            <LeftCard title={labels.education}>
              <Education eduction={me.education} />
            </LeftCard>
            <LeftCard title={labels.toFoolAway}>
              <Hobbies hobbies={me.hobbies} />
            </LeftCard>
          </div>
          <div className="main-right">
            <Experience companies={companiesMap} experiences={me.experiences} />
          </div>
        </div>
        <div className="extra">
          <Competencies competencies={competencies} />
          <Skills skillGroups={skills} />
        </div>
        <div className="footer">
          Design{" "}
          <a href="https://github.com/StudioKris/nord-theme-resume">
            Nord Theme Resume
          </a>{" "}
          from <a href="https://studiokris.com/cv/">StudioKris</a>
        </div>
      </div>

      <FloatingActionButton
        pdfUrl={me.pdfUrl}
        filename={me.me.firstname + "-" + me.me.lastname + ".pdf"}
      />
    </>
  );
}

export default App;
