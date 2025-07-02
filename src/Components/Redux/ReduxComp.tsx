import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CompA from "./CompA";
import CompB from "./CompB";
import { Provider } from "react-redux";
import store from "./store";

const ReduxComp = () => {
    return (
      <Provider store={store}>
        <Box>
          <Typography variant="h3">Redux Comp</Typography>
          <CompA />
          <CompB />
        </Box>
      </Provider>
    );
};

export default ReduxComp;
