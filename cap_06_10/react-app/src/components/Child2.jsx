import Child3 from "./Child3";

const Child2 = ({ theme }) => {
  return (
    <div className={`p-4 bg-blue-400`}>
      <Child3 theme={theme} />
    </div>
  );
};

export default Child2;
