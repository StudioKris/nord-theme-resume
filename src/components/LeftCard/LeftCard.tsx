import { ReactNode } from "react";
import "./LeftCard.css";

type LeftCardProps = {
  title: string;
  children: ReactNode;
};

export default ({ children, title }: LeftCardProps) => (
  <>
    <section className="left-box">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  </>
);
