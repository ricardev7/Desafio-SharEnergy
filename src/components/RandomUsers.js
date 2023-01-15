
import React, { useState, useEffect } from 'react'
import '../pages/Home/Home.css'

const url = 'https://randomuser.me/api/?results=12&inc=name,email,dob,login,picture&nat=br'

const RandomUsers = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

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
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <div className='main-content'>

                {users.filter((user) => (user.email + user.login.username + (user.name.first+ " "+user.name.last)).toLowerCase().includes(search))
                    .map((user) => {
                        
                        const { name: { first, last }, login: { username }, email, dob: { age }, picture: { large } } = user

                        return (
                            <div key={user.login.uuid} className='container_user bg-dark text-white'>
                                <div className='content-img'><img src={large} alt='people' /></div>
                                <div className='content-text'>
                                    <ul style={{ listStyle: "none" }}>
                                        <li key={first}>{first + " " + last}</li>
                                        <li key={username} >{"@" + username}</li>
                                        <li key={email}>{email}</li>
                                        <li key={age}>{"Idade: " + age + " anos"}</li>
                                    </ul>
                                </div>
                            </div>

                        )
                    })}
            </div>
        </div >
    )
}

export default RandomUsers