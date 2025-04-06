// Using Props we can pass data to our components

// import { Fragment } from 'react';
import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (selectedItem: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //event Handler
  //   const handleClick = (event:MouseEvent)=> console.log(event);
  //   const selectedIndex = 0
  // State Hook. Hook is a function which
  // [variable (selected index), updater function ] Each component will have its own state

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const [stringIndex, setStringIndex] = useState('');
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            onClick={() => {
                setSelectedIndex(i);
                onSelectItem(item);
            }}
            key={item + { i }}
            // className="list-group-item"
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function ListGroup2() {
  return (
    // <Fragment>
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
    // </Fragment>
  );
}
export default ListGroup;
