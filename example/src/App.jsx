import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./Button.jsx";
import FieldChange from "./Field";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton />
      <h1>Hello From The eWeb</h1>
      <FieldChange />
    </>
  );
}

export default App;
