import { useState } from 'react';
import './index.css';

interface gridProps{
    status: string;
    grid: HTMLInputElement[][];
    xTrun: boolean;
}

function App():React.JSX.Element {
    const[status,setStatus] = useState<string>("unsolved");
    const[grid, setGrid] = useState<HTMLInputElement[][]>();
    const[xTurn,setXTrun] = useState<boolean>(true);
    return(
        <Grid status={status} grid={grid} xTrun={xTurn}/>
    )
}

function Grid({status,grid,xTrun}:gridProps):React.JSX.Element{
    return(
        <div id='grid'>
            {/* these all the transpiled into react.createElement */}
            {
                Array.from({length:9}, (_,i) => (
                    <Cell key={i} status={status} grid={grid} xTrun={xTrun}/>
                ))
            }
        </div>
    )
}

function Cell({status,grid,xTrun}:gridProps):React.JSX.Element {
    const[value,setv] = useState<string>("");
    return(
        <input id='grid-cell' value={value} onChange={
            // (e)=>setValue(handleOnChange(status,e.target.value))
            (e)=>setv()
        }></input>
    )
}

function handleOnChange(status:string,value:string,xTrun:boolean):string{
    if (value!=='x'&& xTrun===true && status==="unsolved") return "";

    return value;
}

function checkGrid(grid:string[][],value:string):boolean{
    for (let i=0; i<3; ++i){
        if (grid[i][2]!==value || grid[i][0]!==value || grid[0][i]!==value || grid[2][i]!==value || grid[i][i]!==value){
            return false;
        }
    }return true;
}

export default App;