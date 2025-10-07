import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "Das zentrale UI-Bauelement – gestalte die Benutzeroberfläche, indem du mehrere Komponenten kombinierst.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Gibt (möglicherweise dynamischen) HTML-ähnlichen Code zurück, der das tatsächliche Markup definiert, das gerendert wird.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Macht Komponenten konfigurierbar (und damit wiederverwendbar), indem Eingabedaten an sie übergeben werden.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "Von React verwaltete Daten, die bei einer Änderung dazu führen, dass die Komponente neu gerendert und die Benutzeroberfläche aktualisiert wird.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Komponenten sind die Bausteine von React-Anwendungen. Eine Komponente ist ein in sich geschlossenes Modul (HTML + optionales CSS + JS), das eine Ausgabe rendert.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX ist eine Syntaxerweiterung für JavaScript. Sie ähnelt einer Template-Sprache, hat aber die volle Ausdruckskraft von JavaScript (z. B. kann dynamischer Inhalt ausgegeben werden).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Komponenten akzeptieren beliebige Eingaben, sogenannte Props. Sie funktionieren ähnlich wie Funktionsargumente.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State ermöglicht es React-Komponenten, ihre Ausgabe im Laufe der Zeit zu verändern – als Reaktion auf Benutzeraktionen, Netzwerkantworten oder andere Ereignisse.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
