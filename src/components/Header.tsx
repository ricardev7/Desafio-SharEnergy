import { Link } from "react-router-dom";

function Header() {
    return(
    <div>
        <header>
            <nav>
                <Link to="/home">Random User</Link>
                <Link to="/cat">HTTP Cat</Link>
                <Link to="/dog">Random Dog</Link>
                <Link to="/clients">Clientes</Link>
            </nav>
        </header>
        <hr />
    </div>
)}

export default Header