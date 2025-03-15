import { forwardRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getPlayerOneState, getPlayerTwoState } from "../redux/selectors/playerselectors";
import { playerOneUpdate } from "../redux/slices/playerone";
import { playerTwoUpdate } from "../redux/slices/playertwo";
import { useNavigate } from "react-router-dom";
import "../index.css";


function Dashboard():React.JSX.Element{

    const[isFriend,setIsFriend] = useState<boolean>(false);
    const formRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        if (isFriend && formRef.current) {
            window.scrollTo({
                top: formRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    },[isFriend,formRef])
    
    return(
        <div id="dashboard">
            <div id="text-box">Welcome to tic-tac-toe</div>
            <div id="choice">
                <button type="button" id="btn">Play with Ai 🔥</button>
                <button type="button" id="btn" onClick={
                    ()=>{setIsFriend(true)}
                }>Play with a Friend 🚀</button>
                {/* conditional rendering */}
                {isFriend && <Form ref={formRef}/>}
            </div>
        </div>
    )
}


const Form = forwardRef<HTMLDivElement>((_,ref)=>{

    const playerOneState = useSelector(getPlayerOneState);
    const playerTwoState = useSelector(getPlayerTwoState);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    return (
        <div id="form" ref={ref}>
            <input 
                type="text" 
                placeholder="Player-1-Name" 
                id="input"
                value={playerOneState}
                onChange={(e)=>{
                    dispatch(playerOneUpdate(e.target.value))
                }}/>
            <input 
                type="text" 
                placeholder="Player-2-Name" 
                id="input"
                value={playerTwoState}
                onChange={(e)=>{
                    dispatch(playerTwoUpdate(e.target.value))
                }}
                />
            <button 
                onClick={()=>navigate('/game')}
                id="btn"
                >Play ⚔️</button>
        </div>
    )
})

export default Dashboard;   