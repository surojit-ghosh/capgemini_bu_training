import Child2 from "./Child2"

const Child1 = ({ theme }) => {
  return (
    <div className={`p-4 bg-blue-600`}>
      <Child2 theme={theme} />
    </div>
  )
}

export default Child1