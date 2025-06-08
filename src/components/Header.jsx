import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";
function getRandomInt(arr) {
  const maxLen = arr.length;
  return Math.floor(Math.random() * maxLen);
}

export default function Header() {
  const reactDescription = ["Fundamental", "Crucial", "Core"];
  const description = reactDescription[getRandomInt(reactDescription)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts -will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
