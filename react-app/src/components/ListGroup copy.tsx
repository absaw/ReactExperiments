// import { Fragment } from 'react';
import { MouseEvent, useState } from "react";

function ListGroup() {
  const cityList = [
    "New York",
    "San Jose",
    "New Brunswick",
    "London",
    "Manchester",
  ];
  //event Handler
//   const handleClick = (event:MouseEvent)=> console.log(event);
//   const selectedIndex = 0
// State Hook. Hook is a function which 
// [variable (selected index), updater function ] Each component will have its own state

  const [selectedIndex,setSelectedIndex]=useState(2);
  
//   const [stringIndex, setStringIndex] = useState('');
  return (
    <>
      <h1>Cities</h1>
      <ul className="list-group">
        {cityList.map((city, i) => (
          <li
            onClick={()=>setSelectedIndex(i)}
            key={city + { i }}
            // className="list-group-item"
            className={selectedIndex===i?"list-group-item active":"list-group-item"}
          >
            {city}
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
