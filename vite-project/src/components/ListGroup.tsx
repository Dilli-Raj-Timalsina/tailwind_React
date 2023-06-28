function ListGroup() {
  const items = ["Nischal", "Timalsina", "Rahul", "Yadav"];

  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={Math.random()} onClick={(e) => console.log(e)}>
            {item}
          </li>
        ))}
      </ol>
    </>
  );
}
export default ListGroup;
