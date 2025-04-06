import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Counter from './components/Counter';
import ToDoList from "./components/ToDoList";
const cityList = [
  "New York",
  "San Jose",
  "New Brunswick",
  "London",
  "Manchester",
];
const fruitList = ["Apple", "Mango", "Guava", "Grapes", "Strawberry"];

const handleSelectedItem = (item: string) => {
  console.log(item);
};
function App() {
  
  const handleClose = ()=>{
    setAlertVisiblity(false);
  }
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {<Message />}
      <hr />
      <Counter />
      <hr />
      <ToDoList/>
      <hr />
      <ListGroup
        items={cityList}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <hr />
      <ListGroup
        items={fruitList}
        heading="Fruits"
        onSelectItem={handleSelectedItem}
      />
      {/* Using props to pass html content */}
      <hr />
      { alertVisible &&
      <Alert onClose={handleClose}>
        This Html Content is passed through the functional component of Alert to transform it.
      </Alert>
      }
      <hr />
      {/* <Button onClick={() => console.log("Clicked")} color="secondary"> */}
      <Button onClick={() => setAlertVisiblity(true)} color="secondary">
        <span>Click me!!</span>
      </Button>
    </div>
  );
}

export default App;
