export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
// children is by default, that anything was put in between opening and closing tages instead of props, could not be changed anymore, but other props can be changed any name you want.

// destructing {}

// I will deliberately start with on and then select here, that's another convention you will see a lot in react projects means that props should in the end receive a function
// should start with on, means this prop should be set to function that will ultimately be triggered based on some event.