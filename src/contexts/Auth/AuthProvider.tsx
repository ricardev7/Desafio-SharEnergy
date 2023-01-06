
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const signin = async (username: string, password: string) => {
        const data = await api.signin(username, password);
        if(data.user && data.token) {
            setUser(data.user);
            return true
        }
        return false
    }

    const signout = async () =>{
        await api.logout();
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}