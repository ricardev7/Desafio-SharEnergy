import Header from "../../components/Header";
import { useEffect, useState } from "react";
import './Home.css'
import Pagination from "../../components/Pagination";

const url = 'https://randomuser.me/api/?results=70&inc=name,email,dob,login,picture&nat=br'
const Home = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [usersPerPages, setUsersPerPages] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(users.length / usersPerPages)
    const startIndex = currentPage * usersPerPages;
    const endIndex = startIndex + usersPerPages;
    const currentUsers = users.slice(startIndex, endIndex)

    const fetchUserData = async () => {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users.results)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <Header />
            <h1>Random Users</h1>

            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch((e.target.value).toLocaleLowerCase())}></input>

            <div className='main-content'>

                {currentUsers.filter((user: any) => (user.email + user.login.username + (user.name.first + " " + user.name.last)).toLowerCase().includes(search))
                    .map((user: any) => {

                        const { name: { first, last }, login: { username }, email, dob: { age }, picture: { large } } = user

                        return (
                            <div key={user.login.uuid} className='container_user bg-dark text-white'>
                                <div className='content-img'><img src={large} alt='people' /></div>
                                <div className='content-text'>
                                    <ul style={{ listStyle: "none" }}>
                                        <li key={first}><h5>{first + " " + last}</h5></li>
                                        <li key={username} >{"@" + username}</li>
                                        <li key={email}>{email}</li>
                                        <li key={age}>{"Idade: " + age + " anos"}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <Pagination pages={pages} setCurrentPage={setCurrentPage} />        
        </div >
    )
}

export default Home