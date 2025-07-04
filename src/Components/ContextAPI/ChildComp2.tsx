import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CounterContext, type ICount } from "./ContextFile";

const ChildComp2 = () => {
  const { increase, decrease, reset, count } =
    useContext<ICount>(CounterContext);
  return (
    <Box sx={{ border: "2px solid black", padding: "10px", marginTop: "10px" }}>
      <Typography variant="h4">This is child component 2</Typography>
      <Typography>Count: {count}</Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button type="button" onClick={() => increase()} variant="outlined">
          Increase
        </Button>
        <Button type="button" onClick={() => decrease()} variant="outlined">
          Decrease
        </Button>
        <Button type="button" onClick={() => reset()} variant="outlined">
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default ChildComp2;
