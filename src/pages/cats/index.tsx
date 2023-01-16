
import Header from "../../components/Header"
import { useState } from "react";

const url = 'https://http.cat/'


const PageCat = () => {
    const [cat, setCat] = useState('100')
    const statuscode = [100, 101, 102, 200, 201, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 500, 501, 502, 503, 504, 505]

    return (
        <div>
            <Header />
            <h1>HTTP Cat</h1>
            <h5>Selecione um número abaixo:</h5>
            <select style={{padding: " 1px 8px"}} value={cat} onChange={(e) => setCat(e.target.value)}>
                {statuscode.map((code) => {
                    return (
                        <option value={code}>{code}</option>   
                    )
                })

                }
            </select>
            <div style={{
                margin: "20px"
            }}>
                     <img className="img-fluid" src={url+cat} alt={"..."} />
            </div>



        </div>
    );
}

export default PageCat