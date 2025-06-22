import { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const CallBackComp = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Handle clicked called! Count is:", count1);
  }, [count1]);
  
  //   const handleClick = () => {
  //     console.log('Handle clicked called! Count is:', count);
  //   };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>Simple useCallback Example</h2>
      <p>Count: {count1}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setCount2(count2 + 1)}
      >
        Increment Count2
      </button>
      <br />
      {/* <button onClick={handleClick}>Log Count with useCallback</button> */}
      <ChildComp handleClick={handleClick} />
    </div>
  );
};
export default CallBackComp;
