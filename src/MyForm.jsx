import {useState} from 'react'
import './MyForm.css'

const MyForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeFname = (event) => {
      const name = event.target.value;
      setFirstName(name);
      console.log("First Name " + firstName)
    }
    const handleChangeLname = (event) => {
        const name = event.target.value;
        setLastName(name);
        console.log("Last Name " + lastName)
      }
      const handleChangeEmail = (event) => {
        const name = event.target.value;
        setEmail(name);
        console.log("Email " + email)
      }

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(firstName + " " + lastName + " " + email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
            <label>First Name:</label>
                <input
                    type = "text"
                    name = "lname"
                    value = {firstName}
                    onChange={handleChangeFname}
                />
            </p><p>
            <label>Last Name:</label>
                <input
                    type = "text"
                    name = "fname"
                    value = {lastName}
                    onChange={handleChangeLname}
                />
            </p><p>
            <label>Email:</label>
                <input
                    type = "text"
                    name = "email"
                    value = {email}
                    onChange={handleChangeEmail}
                />
            </p><p>
                <button type = "submit">Submit</button>
            </p>
        </form>

    )
}

export default MyForm
