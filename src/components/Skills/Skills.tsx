import labels from "../../assets/labels.json";
import "./Skills.css";

type SkillProps = {
  skillGroups: SkillGroups[];
};
type SkillGroups = {
  name: string;
  skills: SkillRowProps[];
};
type SkillRowProps = {
  name: string;
  level: number;
  details: string;
};

const levelMap = [
  "",
  labels.skills.levels.lvl1,
  labels.skills.levels.lvl2,
  labels.skills.levels.lvl3,
  labels.skills.levels.lvl4,
  labels.skills.levels.lvl5,
];

const SkillGroupRow = ({ name, skills }: SkillGroups) => (
  <>
    <tr className="skill-group-head">
      <td>{name}</td>
      <td></td>
      <td></td>
    </tr>
    {skills
      .sort((a, b) => b.level - a.level)
      .map((skill, i) => (
        <SkillRow {...skill} key={i} />
      ))}
  </>
);

const SkillRow = ({ name, level, details }: SkillRowProps) => (
  <tr>
    <td>{name}</td>
    <td>
      <b>{levelMap[level]}</b>
    </td>
    <td>{details}</td>
  </tr>
);

export default ({ skillGroups }: SkillProps) => (
  <section className="skills">
    <h2>{labels.skills.label}</h2>
    <table>
      <thead>
        <tr>
          <th>{labels.skills.column.name}</th>
          <th>{labels.skills.column.level}</th>
          <th>{labels.skills.column.details}</th>
        </tr>
      </thead>
      <tbody>
        {skillGroups.map((skillGroups, i) => (
          <SkillGroupRow {...skillGroups} key={i} />
        ))}
      </tbody>
    </table>
    <legend>
      {labels.skills.legend}: {levelMap.slice(1).join(", ")}
    </legend>
  </section>
);
