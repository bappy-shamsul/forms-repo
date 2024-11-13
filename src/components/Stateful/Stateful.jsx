import { useState } from "react";
import './Stateful.css'

const Stateful = () => {
    const [name, setName] = useState('B@ppy');
    const [email, setEmail] = useState("ap.shamsul@gmail.com")
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

const setNameValue = e =>{
    console.log(e.target.value)
    setName(e.target.value)
}
const setEmailValue = e =>{
    console.log(e.target.value)
    setEmail(e.target.value)
}
const setPasswordValue = e =>{
    console.log(e.target.value)
    setPassword(e.target.value)
}

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name, email, password);
        if(password.length < 8){
            setError('Please add till at least 8')
        }else{
            setError('')
        }
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input value={name} onChange={setNameValue} type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input value={email} onChange={setEmailValue} type="text" name="email" placeholder="E-mail"></input>
                <br></br>
                <input required onChange={setPasswordValue} type="password" name="password" placeholder="Password"></input>
                <br></br>
                <button>Submit</button>
            </form>
            {
                error && <p className="error-msg">{error}</p>
            }
        </div>
    );
};

export default Stateful;