export default function FieldChange() {
  return (
    <Card>
      <Avatar
        size={56}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

function Avatar({ size, person }) {
  console.log(size);
  return (
    <img className="avatar" alt={person.name} width={size} height={size} />
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
