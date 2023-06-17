import "./App.css";
import { useState } from "react";

function Button1() {
  return <button>Button1</button>;
}

function Button2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("You clicked me!");
    console.log(count);
  }
  return <button onClick={handleClick}>Button2</button>;
}
///////////////////////////////
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));
console.log(listItems);

function MyButton() {
  let isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <Button1 />;
  } else {
    content = <Button2 />;
  }
  return (
    <>
      <h1 className="tagH1">This is another tag</h1>
      <p>This is inner paragraph.</p>
      {content}
      <Button2 />
      <ul>{listItems}</ul>
    </>
  );
}

export default MyButton;
