import React, { useState } from 'react'
import { useApi } from '../hooks/useApi'

const InputCreate = () => {
    const api = useApi();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [cpf, setCpf] = useState('')

    const handleSaveClient = async () => {
        const saveClient = await api.createClient(name, email, phone, adress, cpf)
        if (saveClient) {
            alert('Cliente cadastrado com suceso ')
            
        } else {
            alert("Verique os campos, e tente novamente.")
        }
    }

    return (
        <div>
            <h5>Cadastro de clientes:</h5>
            <div className='container'>
                <form onSubmit={handleSaveClient}>
                    <div><input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" placeholder='Nome completo' required /></div>
                    <div><input value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required /></div>
                    <div><input value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Telefone' required /></div>
                    <div><input value={adress} name='adress' onChange={(e) => setAdress(e.target.value)} type="text" placeholder='Endereço' required /></div>
                    <div><input value={cpf} name='cpf' onChange={(e) => setCpf(e.target.value)} type="number" placeholder='CPF...' required /></div>
                    <div><button type="submit" className='btn btn-secondary'>Cadastrar</button></div>
                </form>
            </div>
        </div >
    )
}

export default InputCreate