import { useState } from "react";

import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                key={concept.title}
                onSelect={() => handleSelect(concept.title.toLowerCase())}
                label={concept.title}
                isSelected={selectedTopic === concept.title.toLowerCase()}
              />
            ))}
          </menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
