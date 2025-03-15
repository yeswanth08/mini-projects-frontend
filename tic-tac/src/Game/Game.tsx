import { useState } from 'react';
import '../index.css';
import { useSelector } from 'react-redux';
import { getPlayerOneState, getPlayerTwoState } from '../redux/selectors/playerselectors';

interface gridProps {
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    xTurn: boolean;
    setxTurn: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  interface cellProps extends gridProps {
    row: number;
    col: number;
    grid: string[][];
    setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
  }
  
  interface handleProps extends cellProps {
    value: string;
  }
  
  function Game(): React.JSX.Element {

    const [status, setStatus] = useState<string>("unsolved");
    const [xTurn, setxTurn] = useState<boolean>(true);
  
    return (
      <Grid status={status} xTurn={xTurn} setStatus={setStatus} setxTurn={setxTurn} />
    );

  }
  
  function Grid({ status, xTurn, setStatus, setxTurn }: gridProps): React.JSX.Element {

    const [grid, setGrid] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
    const playerOneState = useSelector(getPlayerOneState);
    const playerTwoState = useSelector(getPlayerTwoState);

    return (
      <div id="main-card">
              <div id="grid">
                {grid.map((row, rowIndex) => {
                  return (
                    <div key={rowIndex}>
                      {row.map((_, colIndex) => {
                        return (
                          <Cell
                            key={`${rowIndex}-${colIndex}`}
                            row={rowIndex}
                            col={colIndex}
                            status={status}
                            setStatus={setStatus}
                            grid={grid}
                            setGrid={setGrid}
                            xTurn={xTurn}
                            setxTurn={setxTurn}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div id="player-details">
                <div>
                {playerOneState} 
                  <div id='sign'>
                    X
                  </div>
                </div>
                <div>
                {playerTwoState}
                <div id='sign'>
                    O
                  </div>
                </div>
              </div>
      </div>
    )
  }
  
  function Cell({
    row,
    col,
    status,
    setStatus,
    grid,
    setGrid,
    xTurn,
    setxTurn
  }: cellProps): React.JSX.Element {
    return (

      <input
        id="grid-cell"
        value={grid[row][col]}
        onChange={(e) => {
          handleOnChange({
            value: e.target.value,
            grid: grid,
            setGrid: setGrid,
            xTurn: xTurn,
            setxTurn: setxTurn,
            status: status,
            setStatus: setStatus,
            row: row,
            col: col
          });
        }}
      />
    );
  }
  
  function handleOnChange({
    value,
    grid,
    setGrid,
    xTurn,
    setxTurn,
    status,
    setStatus,
    row,
    col
  }: handleProps): void {

    if (status === "solved") {
      let player = "X";
      if (!xTurn) player = "O";
      window.alert(`Game Solved 🚀${player} won`);
      return;
    }
    if ((xTurn && value !== "x") || (!xTurn && value !== "o")) return;
    if (grid[row][col] !== "")  return;
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
    if (checkGrid(newGrid, value)) {
      setStatus("solved");
      let player = "X";
      if (!xTurn) player = "O";
      window.alert(`Game Solved 🚀${player} won`);
      return;
    }
    setxTurn(!xTurn);
  }
  
  function checkGrid(grid: string[][], value: string): boolean {

      if (grid[0][1]===value && grid[0][2]===value && grid[0][0]===value) return true;
      if (grid[1][0]===value && grid[2][0]===value && grid[0][0]===value) return true;
      if (grid[1][1]===value && grid[2][2]===value && grid[0][0]===value) return true;
      return false;
  }
  
  export default Game;