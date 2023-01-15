import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";
import { useContext } from "react"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />
    }

    return children;
}