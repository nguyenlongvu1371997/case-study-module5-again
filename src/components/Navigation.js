import '../css/Navigation.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function Navigation() {
    return (
        <div class="container-fluid bg-white sticky-top">
            <div class="container"></div>
            <header>
                <div className="logo">
                    <h1>Resort Name</h1>
                </div>
                <nav>
                    <ul>
                        <li><button className="nav-item nav-link"><Link to={`/`}>Home</Link></button></li>
                        <li> <a className="nav-item nav-link active"><Link to={`/service`}>Service</Link></a></li>
                        <li> <a className="nav-item nav-link"><Link to={`/contract`}>Contract</Link></a></li>
                        <li> <a className="nav-item nav-link"><Link to={`/customer`}>Customer</Link></a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}



export default Navigation;

