import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const validateToken = async () => {
        const storageData = localStorage.getItem('authToken');
        if (storageData) {
            const data = await api.validateToken(storageData);
            if (data.user) {
                setUser(data.user);
                return true
            }
        }
    }

    useEffect(() => {
        validateToken()
    });

    const signin = async (username: string, password: string) => {
        const data = await api.signin(username, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true
        }
        return false
    }

    const signout = async () => {
        await api.logout();
        setUser(null)
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}