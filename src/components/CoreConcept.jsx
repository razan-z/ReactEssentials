// We imported CORE_CONCEPTS in curly braces

/*
function CoreConcept(props) {
// function CoreConcept({...props}) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
} 
*/

// U can use also object destructuring by adding curly braces
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
