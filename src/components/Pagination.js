import React from 'react'

const Pagination = ({ pages, setCurrentPage}) => {
   

    return (
        <div>{Array.from(Array(pages), (user, index) =>{
            return <button type='button' className='btn btn-outline-secondary m-1' value={index} onClick={(e) => setCurrentPage(Number(e.target.value)) }>{index+1}</button>
        })}</div>

    )
}

export default Pagination