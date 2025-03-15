import Game from "./Game/Game";
import Dashboard from "./Dashboard/Dashboard";
import Ai from "./Ai/Ai";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/Protectedroute";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/game" element={
                    <ProtectedRoute>
                        <Game/>
                    </ProtectedRoute>
                }/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/ai-game" element={<Ai/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
