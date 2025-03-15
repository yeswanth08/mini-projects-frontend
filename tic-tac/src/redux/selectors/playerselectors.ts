import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const playerOneState = (state: RootState) => state.playerOne;
const playerTwoState = (state: RootState) => state.playerTwo;

export const getPlayerOneState = createSelector(
    [playerOneState],
    (playerOne) => playerOne.value
)

export const getPlayerTwoState = createSelector(
    [playerTwoState],
    (playerTwo) => playerTwo.value
)