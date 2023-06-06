import labels from "../../assets/labels.json";
import "./Experience.css";

export type Company = {
  name: string;
  location: string;
};
type Experience = {
  name: string;
  compagny: string;
  years: string;
  missionShort: string;
  missionLong: string[];
  missions: string[];
  additionals: Additional[];
};
type Additional = {
  label: string;
  details: string[];
};
type ExperienceProps = {
  experiences: Experience[];
  companies: Map<string, Company>;
};
type MissionsProps = {
  missions: string[];
};
type AdditionalsProps = {
  additionals: Additional[];
};
type ExperienceRowProps = {
  experience: Experience;
  companies: Map<string, Company>;
};

const Missions = ({ missions }: MissionsProps) => (
  <>
    <h4>{labels.experience.missions}:</h4>
    <ul className="list-with-dot">
      {missions.map((mission, i) => (
        <li key={i}>{mission}</li>
      ))}
    </ul>
  </>
);

const Additionals = ({ additionals }: AdditionalsProps) => (
  <>
    {additionals.map((additional, i) => (
      <>
        <h4 key={i}>{additional.label}:</h4>
        <p className="tech">{additional.details.sort().join(", ")}</p>
      </>
    ))}
  </>
);

const ExperienceRow = ({ experience, companies }: ExperienceRowProps) => (
  <article className="mission">
    <h3 className="h3-end-with-line">
      <span className="timeline">{experience.years}</span>
      {experience.name}
    </h3>
    <div className="info">
      <span className="compangy">
        {companies.get(experience.compagny)?.name}
      </span>
      <span className="location">
        {companies.get(experience.compagny)?.location}
      </span>
    </div>
    {experience.missionLong.map((mission, i) => (
      <p key={i}>{mission}</p>
    ))}
    <Missions missions={experience.missions} />
    <Additionals additionals={experience.additionals} />
  </article>
);

export default ({ experiences, companies }: ExperienceProps) => (
  <section className="experience mb-10">
    <h2>{labels.experience.label}</h2>
    {experiences.map((experience, key) => (
      <ExperienceRow experience={experience} companies={companies} key={key} />
    ))}
  </section>
);
