export default function Child({ count }) {
  return (
    <div className="allchild child">
      {console.log("Child render")}
      <p>Child: {count} </p>
    </div>
  );
}
