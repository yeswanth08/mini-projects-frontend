import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { getPlayerOneState, getPlayerTwoState } from "../redux/selectors/playerselectors";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const playerOneState = useSelector(getPlayerOneState);
    const playerTwoState = useSelector(getPlayerTwoState);

    if (!playerOneState || !playerTwoState) return <Navigate to="/" />;
    
    return <>{children}</>;
};

export default ProtectedRoute;