import React, { useState, useEffect } from 'react'
const url = 'https://randomuser.me/api/'

const RandomUsers = () =>{
    const [users, setUsers] =useState([])

const fetchUserData = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users.results);
}

useEffect(() => {
    fetchUserData
}, [])

return (
    <div>
    "Users Components"
    </div>
)
} 

export default RandomUsers