import { useContext } from "react";
import MyContext from "../context/MyContext";

const ContextConsumer = () => {
  const { name, age } = useContext(MyContext);
  return (
    <div>
      {name} is {age} years old.
    </div>
  );
};

export default ContextConsumer;
