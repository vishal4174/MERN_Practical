import {  Link } from "react-router-dom";

const Navbar = () => {

    const removeData = () => {
        localStorage.removeItem("data");
        localStorage.removeItem("token");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Library</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/books">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users">Users</a>
                    </li>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login">
                                <button className="btn btn-primary" onClick={removeData}>Log out</button>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar