import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    let auth = false

    const token = localStorage.getItem("token")
    const expiration = localStorage.getItem("expiration")
    if (token !== undefined && new Date().getTime() < expiration) {
        auth = true
    }


    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:6060/auth", {
            email: email,
            password: password
        })
            .then((response) => {
                    localStorage.setItem("id", response.data?.id)
                    localStorage.setItem("token", response.data?.token)
                    localStorage.setItem("expiration", Date.parse(response.data?.expiration))
                    navigate("/")
            }).catch((e)=>{
                console.log(e)
                alert("Inexistant User")
            })
    }

    return (
        <div className="Login">
            <form onSubmit={handleLogin}>
                <p>
                    <label>Email</label><br />
                    <input type="text" name="first_name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    );
};

export default Login;