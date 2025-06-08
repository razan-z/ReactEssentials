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
export default function TabButton({ label, onSelect, isSelected }) {
  // in regular vanilla js
  // document.querySelector('button').addEventListener('click',() => {});
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
}
