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
            {/* 
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            /> 
            */}

            {/* an alternative way after adding data.js */}
            {/*             
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> 
            */}

            {/* using destructuring since the atributs (props) have the same name as the data's key  */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}

            {/* Using for loop (❌ WRONG in JSX) */}
            {/* 
            for(const concept of CORE_CONCEPTS)
            {<CoreConcept {...concept} />}; 
            */}

            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Using Children */}
            {/* <TabButton>Component</TabButton> */}
            {/* Using Attributes */}
            {/* <TabButton label="Components" /> */}
            {/* Using map function*/}
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
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
