import Header from "../../components/Header"
import React, { useEffect, useState } from "react"

const url = "http://random.dog/woof.json?filter=mp4,webm"

const PageDog = () => {
    const [imgDog, setImgDog] = useState('')

    const fetchDogData = async () => {
        const resp = await fetch(url);
        const dogsImgs = await resp.json();
        setImgDog(dogsImgs.url)
    } 
    
    useEffect(()=>{
        fetchDogData()
    },[])

    return (
        <div>
            <Header />
            <h1>Random Dog</h1>

            <button value={imgDog} onClick={fetchDogData} className="btn btn btn-outline-primary">Refresh</button>

            <div className="container">
                <img src={imgDog} className="img-thumbnail" alt=""  style={{ maxHeight: "600px", margin: "30px" }} />
            </div>
        </div>
    )
}

export default PageDog