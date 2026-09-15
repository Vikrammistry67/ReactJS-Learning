import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
    };

    console.log(email);
    console.log(password)


    return (
        <div>
            <div><h1>Login</h1></div>

            <div>
                <form onSubmit={handleForm}>
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                    <br /> <br />
                    <input
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                    <br /> <br />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login