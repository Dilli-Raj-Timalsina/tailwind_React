import { useState } from "react";
import "./App.css";
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup.tsx";
function App() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <Message></Message>
      <ListGroup></ListGroup>
    </div>
  );
}

export default App;
