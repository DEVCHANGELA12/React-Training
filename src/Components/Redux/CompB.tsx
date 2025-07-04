import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrease, increase, reset } from "./counterReducer";

const CompB = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ border: "2px solid red", padding: "10px", marginTop: "10px", marginX:"10px" }}>
      <Typography variant="h4">Comp B</Typography>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button
          type="button"
          onClick={() => dispatch(increase())}
          variant="outlined"
        >
          Increase
        </Button>
        <Button
          type="button"
          onClick={() => dispatch(decrease())}
          variant="outlined"
        >
          Decrease
        </Button>
        <Button
          type="button"
          onClick={() => dispatch(reset())}
          variant="outlined"
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default CompB;
