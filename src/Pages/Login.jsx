import React, { useState } from 'react';
import './Dash.css';


function Login() {
    const login = { username: 'jstar', password: 'cobra' };
    const [values, setValues] = useState({ user: '', pass: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const checkDetails = (e) => {
        e.preventDefault();
        if (values.user === login.username && values.pass === login.password) {
            // Successful login
            alert('Logged in successfully');
            setValues({user:'',pass:''})
            setError('');
            window.location.href="/DashBoard"
        } else {
            // Failed login
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form action="" onSubmit={checkDetails}>
                    <input type="text" name="user" value={values.user} onChange={handleChange} placeholder="Username" />
                    <input type="password" name="pass" value={values.pass} onChange={handleChange} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    );
}

export default Login;
