import labels from "../../assets/labels.json";
import "./Competencies.css";

type CompetenciesProps = {
  competencies: CompetenciesGroupProps[];
};
type CompetenciesGroupProps = {
  label: string;
  competencies: string[];
};

const CompetenciesGroup = ({ label, competencies }: CompetenciesGroupProps) => (
  <article className="competencies-group">
    <h3 className="h3-end-with-line">{label}</h3>
    <ul className="list-with-dot">
      {competencies.map((competency, i) => (
        <li key={i}>{competency}</li>
      ))}
    </ul>
  </article>
);

export default ({ competencies }: CompetenciesProps) => (
  <section className="competencies">
    <h2>{labels.competencies}</h2>
    <div>
      {competencies.map((group, i) => (
        <CompetenciesGroup {...group} key={i} />
      ))}
    </div>
  </section>
);
