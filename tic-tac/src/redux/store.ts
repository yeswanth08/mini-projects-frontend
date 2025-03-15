import { configureStore } from "@reduxjs/toolkit";
import playerOne from "./slices/playerone";
import playerTwo from "./slices/playertwo";

export const store = configureStore({
    reducer:{
        playerOne: playerOne,
        playerTwo: playerTwo
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch