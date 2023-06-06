import { AiOutlineArrowRight } from "react-icons/ai";
import labels from "../../assets/labels.json";
import "./HeroBanner.css";

type HeroProps = {
  firstname: string;
  lastname: string;
  contact: string;
  spotlight: string;
  occupation: string;
};
export default ({
  firstname,
  lastname,
  contact,
  spotlight,
  occupation,
}: HeroProps) => (
  <>
    <section className="hero-banner">
      <div className="hero-banner-left">
        <h1>{occupation}</h1>
        <h2>
          {firstname} {lastname}
        </h2>
        <p>{spotlight}</p>
        <a href={contact} target="blank" className="primary-button">
          {labels.heroBanner.contactMe}
        </a>
        <a href="#About" className="link-box">
          {labels.heroBanner.more}{" "}
          <AiOutlineArrowRight className="link-box-icon" />
        </a>
      </div>
      <div className="hero-banner-right">
        <div className="photo"></div>
      </div>
    </section>
  </>
);
