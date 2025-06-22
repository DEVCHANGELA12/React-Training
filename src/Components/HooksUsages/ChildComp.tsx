import React from "react";

interface IChildComp {
  handleClick: () => void;
}
const ChildComp = React.memo((props: IChildComp) => {
  const { handleClick } = props;
  console.log("Child Comp rendered... again");
  const demoFunc = () => {
    handleClick();
  };
  return <h2 onClick={demoFunc}>Child Comp</h2>;
});
export default ChildComp;
