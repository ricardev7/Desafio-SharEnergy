import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo_share.png'
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import './Login.css'


export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async () => {
        if (username && password) {
            const isLogged = await auth.signin(username, password);
            if (isLogged) {
                navigate('/home')
            } else {
                alert("Login ou senha inválido, tente novamente.")
            }
        }
    }

    return (
        <div className='container-login'>
            <div>
                <img src={Logo} className='logomarca' />
                <h3>Bem-vindo</h3>
                <h2>Faça o login:</h2>

                <div className='btn-group'>
                    <div className='user-input'>
                        <FaUserAlt />
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder={"Digite seu login"}
                        />
                    </div>
                    <div className='user-input'>
                    <RiLockPasswordFill />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button onClick={handlelogin}>Login</button>
                </div>
            </div>
        </div>
    )
}