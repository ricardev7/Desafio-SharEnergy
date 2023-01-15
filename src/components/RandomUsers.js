import React, { useState, useEffect } from 'react'
const url = 'https://randomuser.me/api/?results=50&nat=br'

const RandomUsers = () => {
    const [users, setUsers] = useState([])

    const fetchUserData = async () => {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users.results);
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <>
            <section>
                {users.map((user) => {
                    return (
                        <div key={user.login.uuid} className='card' >
                            <div className='div-img'>
                                {<img src={user.picture.large} />}
                            </div>
                            <div>
                                <ul>
                                    <li key={user.login.username}>{"@"+user.login.username}</li>
                                    <li key={user.name}>{"Nome: "+user.name.first + " " + user.name.last}</li>
                                    <li key={user.email}>{"Email: "+ user.email}</li>
                                    <li key={user.dob.age}>{"Idade: "+ user.dob.age}</li>
                                </ul>
                            </div>

                        </div>
                    )
                })}

            </section>

        </>

    )
}

export default RandomUsers