import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);
  const handleAdd = () =>{
    setCount(count + 1)
  };
  const handleReduce = () => {
    const newCount = count -1;
    setCount(newCount)
  }
  return (
    <div style={{border: '1px solid red', backgroundColor:"#CBC3E3", padding: '5px', borderRadius: '5px'}}>
      <h2>Count: {count} </h2>
      <p>mark: {count}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce} style={{marginLeft:"5px"}}>Reduce</button>
    </div>
  );
}