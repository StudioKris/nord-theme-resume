type HobbiesProps = {
  hobbies: string[];
};

export default ({ hobbies }: HobbiesProps) => <p>{hobbies.join(", ")}</p>;
