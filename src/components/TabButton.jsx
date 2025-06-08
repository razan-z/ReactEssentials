// Using Children Props

/*
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
*/

/*
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
*/

// Using Attributes
export default function TabButton({ label, onSelect }) {
  // in regular vanilla js
  // document.querySelector('button').addEventListener('click',() => {});
  return (
    <li>
      <button onClick={onSelect}>{label}</button>
    </li>
  );
}
