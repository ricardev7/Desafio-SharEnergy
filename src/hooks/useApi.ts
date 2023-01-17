import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});


export const useApi = () => ({

    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token })
        console.log(response.data)
        return response.data;
    },

    signin: async (username: string, password: string) => {
        const response = await api.post('/login', { username, password })
        console.log(response.data)
        return response.data
    },

    logout: async () => {
        const response = await api.post('logout');
        return response.data;
    },

    createClient: async (name: string, email: string, phone: string, adress: string, cpf: string) => {
        const response = await api.post('/create', { name, email, phone, adress, cpf })
        console.log(response.data)
        return response.data
    }
})

