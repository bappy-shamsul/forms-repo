import { useEffect, useRef, useState } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');

    useEffect(()=>{
        passwordRef.current.focus()
    }, [])

    const handleSubmit = e =>{
        e.preventDefault()
        // console.log(nameRef.current.value)
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)
        if(passwordRef.current.value.length < 8){
            console.log(passwordRef.length)
            setError('give more than 7')
        }else{
            setError('')
        }
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input defaultValue={'Shamsul'} ref={nameRef} type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input defaultValue={'abc@gmail.com'} ref={emailRef} type="text" name="email" placeholder="E-mail"></input>
                <br></br>
                <input ref={passwordRef} type="password" name="password"></input>
                <br></br>
                <button>Submit</button>
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default RefForm;