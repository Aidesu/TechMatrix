import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/api.jsx";

export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = { email, password };

        try {

            const infoLogin = await loginUser(credentials);

            if (infoLogin.success) {
                setMessage("Login successful !")
            } else {
                setMessage(infoUser.message || "Password or email invalid");
            }

        } catch (err) {
            setMessage("Server error")
        }
    }

    return (
        <>
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div class="divLogin">
                        <label htmlFor="email" class="labelLogin" >Email address : </label>
                        <input
                            class="inputLogin"
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="divLogin">
                        <label htmlFor="password" class="labelLogin" >Password : </label>
                        <input
                            class="inputLogin"
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /></div>

                    <Link to="/register">Sign in</Link>
                    <p class="loginMessage">{message}</p>
                    <button type='submit'>Login</button>
                </form>

            </main>
        </>
    )
}

