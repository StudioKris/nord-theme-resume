import "./Education.css";

type EductionItemProps = {
  location: string;
  major: string;
  years: string;
};
type EductionProps = {
  eduction: EductionItemProps[];
};
export default ({ eduction }: EductionProps) => (
  <ul className="eduction">
    {eduction.map((eductionItem, key) => (
      <li key={key}>
        <b>{eductionItem.major}</b>
        <span>
          {eductionItem.location} {eductionItem.years}
        </span>
      </li>
    ))}
  </ul>
);
