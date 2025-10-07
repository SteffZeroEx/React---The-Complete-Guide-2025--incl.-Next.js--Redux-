import imgReact from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Elementare ", "Wesentliche ", "Kern-"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={imgReact} alt="Stylized atom" />
      <h1>React Grundlagen</h1>
      <p>{description}React-Konzepte, die du für fast jede App benötigst, die du bauen wirst!</p>
    </header>
  );
}
