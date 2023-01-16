import axios from "axios";
import Header from "../../components/Header"
import { useState } from "react";
import { render } from "@testing-library/react";
import { STATUS_CODES } from "http";


const url = 'https://http.cat'
const api = axios.create({
    baseURL: url
});

const PageCat = () => {
    const [cat, setCat] = useState("")

    const getHttpCat = ()=>{
        const response = api.get(cat)
        console.log(response)

    }

    getHttpCat()


    return (
        <div>
            <Header />
            <h1>HTTP Cat</h1>

            <select value={cat} onChange={(e) => setCat(e.target.value)}>
                <option value={100}>100</option>
                <option value={101}>101</option>
                <option value={102}>102</option>
                <option value={122}>122</option>
                <option value={200}>200</option>
                <option value={201}>201</option>
                <option value={202}>202</option>
                <option value={203}>203</option>
                <option value={204}>204</option>
                <option value={205}>205</option>
                <option value={206}>206</option>
                <option value={207}>207</option>
                <option value={300}>300</option>
                <option value={301}>301</option>
                <option value={302}>302</option>
                <option value={303}>303</option>
                <option value={304}>304</option>
                <option value={305}>305</option>
                <option value={306}>306</option>
                <option value={307}>307</option>
                <option value={308}>308</option>
                <option value={400}>400</option>
                <option value={401}>401</option>
            </select>
            
        </div>
    );
}

export default PageCat