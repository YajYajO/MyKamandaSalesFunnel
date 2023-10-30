import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/loginSalesperson', {
                username: username,
                password: password,
            });
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/chat'); 
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </p>
            <p>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default LogInForm;
