// import { useState } from "react";
import useStateInput from "./Hook";


const Hooks = () => {
    // const [name, handleNameChange] = useStateInput('Dalia fuul');
    // const [email, handleEmailChange] = useStateInput('dalia@moa.gov.bd')

    const useNameChange = useStateInput('Jony vai')
    const useEmailChange = useStateInput('jony@hmail.com')

    const handleSubmit  = e =>{
        console.log(useNameChange, useEmailChange)
        // console.log(name, email)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input  value={name} onChange={handleNameChange} type="text" name="name" placeholder="Name"></input> */}
                <input  {...useNameChange} type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input {...useEmailChange} type="text" name="email" placeholder="E-mail"></input>
                {/* <input value={email} onChange={handleEmailChange} type="text" name="email" placeholder="E-mail"></input> */}
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Hooks;