import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const store = configureStore({
    reducer: {
        counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;