import "./Languages.css";

type LanguageProps = {
  code: string;
  name: string;
  level: string;
};
type LanguagesProps = {
  languages: LanguageProps[];
};
export default ({ languages }: LanguagesProps) => (
  <ul>
    {languages.map((language, key) => (
      <li key={key}>
        <p key={key}>
          <span className={"fi fi-" + language.code}></span>
          <b>{language.name}</b>, {language.level}
        </p>
      </li>
    ))}
  </ul>
);
