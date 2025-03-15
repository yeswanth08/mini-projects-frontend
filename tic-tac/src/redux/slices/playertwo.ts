import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { value: "" };

const playerTwo = createSlice({
    name: "playerTwo",
    initialState,
    reducers: {
        update: (state, action:PayloadAction<string>) => { state.value = action.payload}
    }
})


export const{update: playerTwoUpdate} = playerTwo.actions;
export default playerTwo.reducer;