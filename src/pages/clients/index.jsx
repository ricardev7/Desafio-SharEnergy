import { useState } from "react";
import Header from "../../components/Header";
import { useApi } from "../../hooks/useApi";


const Clients = () => {
    const api = useApi();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [cpf, setCpf] = useState('')
    const [clients, setClients] = useState([])

    const handleSaveClient = async (e) => {
        e.preventDefault()
        const saveClient = await api.createClient(name, email, phone, adress, cpf)
        setClients([...clients, saveClient])
    }


    function addClientContent(event){
        event.prevent.default()
        setClients([name, email, phone, adress, cpf])
    }

    return (
        <div>
            <Header />
            <div>
                <h5>Cadastro de clientes:</h5>
                <div className='container'>
                    <form onSubmit={handleSaveClient}>
                        <div><input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" placeholder='Nome completo' required /></div>
                        <div><input value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required /></div>
                        <div><input value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} type="number" placeholder='Telefone' required /></div>
                        <div><input value={adress} name='adress' onChange={(e) => setAdress(e.target.value)} type="text" placeholder='Endereço' required /></div>
                        <div><input value={cpf} name='cpf' onChange={(e) => setCpf(e.target.value)} type="number" placeholder='CPF...' required /></div>
                        <div><button  type="submit" className='btn btn-secondary'>Cadastrar</button></div>
                    </form>
                </div>
                {clients.map((client, index) => {
                    const { name, email, phone, adress, cpf } = client
                    return (
                        <div key={index} className="clientsRegistered">
                            <div><p>Nome: {name}</p></div>
                            <div><p>Email: {email} </p></div>
                            <div><p>Telefone: {phone} </p></div>
                            <div><p>Endereço: {adress} </p></div>
                            <div><p>CPF: {cpf} </p></div>
                        </div>
                    )
                })}

            </div >
        </div>
    )
}

export default Clients