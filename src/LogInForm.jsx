import {useState} from 'react'
import './LoginForm.css';

const LogInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeFname = (event) => {
      const name = event.target.value;
      setUsername(name);
      console.log("username " + username)
    }
    const handleChangeLname = (event) => {
        const name = event.target.value;
        setPassword(name)
        console.log("password " + password)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(username + " " + password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
            <label>Username</label>
                <input
                    type = "text"
                    name = "lname"
                    value = {firstName}
                    onChange={handleChangeFname}
                />
            </p><p>
            <label>Password</label>
                <input
                    type = "text"
                    name = "fname"
                    value = {lastName}
                    onChange={handleChangeLname}
                />
            </p><p>
                <button type = "submit">Submit</button>
            </p>
        </form>

    )
}

export default LogInForm