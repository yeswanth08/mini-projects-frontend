import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: "" };

const playerOne = createSlice({
    name: "playerOne",
    initialState,
    reducers:{
        update: (state,action:PayloadAction<string>) => {state.value = action.payload}
    }
})

export const {update: playerOneUpdate} = playerOne.actions;
export default playerOne.reducer;