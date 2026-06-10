import Child4 from "./Child4";

const Child3 = ({ theme }) => {
  return (
    <div className={`p-4 bg-blue-200`}>
      <Child4 theme={theme} />
    </div>
  );
};

export default Child3;
