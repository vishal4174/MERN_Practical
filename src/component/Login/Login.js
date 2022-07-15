import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosInstance from "../../Services/AxiosInstance";

export default function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password !== "") {
            setError(false);
            var formData = new URLSearchParams();
            formData.append("email", email);
            formData.append("password", password);
            AxiosInstance.post("/login", formData)
                .then(async (res) => {
                    if (res.data.data[0]) {
                        localStorage.setItem("data", JSON.stringify(res.data.data));
                        localStorage.setItem("token", res.data.token);
                        navigate("/books");
                    }
                })
                .catch((err) => console.log(err, "err"));
        } else {
            setError(true);
        }
    };

    const errorMessage = () => {
        return (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"
                style={{
                    display: error ? "" : "none",
                }}
            >
                Please enter all the fields
            </div>
        );
    };

    return (

        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="messages">
                    {errorMessage()}
                </div>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            onChange={handleEmail}
                            placeholder="Email address"
                            value={email}
                            type="text"
                            name="email"
                            className="form-control mt-1"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            onChange={handlePassword}
                            type="password"
                            value={password}
                            name="password"
                            placeholder="password"
                            className="form-control mt-1"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
