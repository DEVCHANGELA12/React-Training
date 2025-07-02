import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

const CompA = () => {
  const counter = useSelector((state: RootState) => state.counterReducer);
    console.log("counter", counter);
  return (
    <Box sx={{ border: "2px solid red", padding: "10px", marginX:"10px" }}>
      <Typography variant="h4">CompA</Typography>
      <Typography variant="h6">Count Value: {counter.count}</Typography>
    </Box>
  );
};

export default CompA;
