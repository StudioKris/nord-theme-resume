import ReactHtmlParser from "react-html-parser";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import labels from "../../assets/labels.json";
import "./About.css";

type AboutProps = {
  details: string;
  mantra: string;
};
export default ({ details, mantra }: AboutProps) => (
  <>
    <section className="about">
      <h2>{labels.aboutMe}</h2>
      <article>
        <div className="about-left">
          <p>{ReactHtmlParser(details)}</p>
        </div>
        <div className="about-right">
          <blockquote>
            <span className="icon">
              <BsFillChatRightQuoteFill />
            </span>{" "}
            {mantra}
          </blockquote>
        </div>
      </article>
    </section>
  </>
);
