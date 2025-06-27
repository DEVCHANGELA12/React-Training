import useToggle from "../../CustomHooks/useToggle";

export default function CustomHookComp() {
  const { toggle, value } = useToggle();
  return (
    <>
      <h1 style={{marginBottom:"10px"}}>Custom Hook Usage</h1>
      <button
        type="button"
        style={{backgroundColor:"purple", color:"white"}}
        onClick={() => toggle()}
      >
        {value ? "OFF": "ON"}
      </button>
      <div style={{marginTop:"10px"}}>Value : {String(value)}</div>
    </>
  );
}
