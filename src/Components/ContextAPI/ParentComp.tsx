import { ContextFile } from "./ContextFile";
import ChildComp from "./ChildComp";
import { Box, Typography } from "@mui/material";

import ChildComp2 from "./ChildComp2";

const ParentComp = () => {
  return (
    <ContextFile>
      <Box sx={{ border: "2px solid red", padding: "15px" }}>
        <Typography variant="h2">This is Parent Comp</Typography>
        <ChildComp />
        <ChildComp2 />
      </Box>
    </ContextFile>
  );
};

export default ParentComp;
