import useInputState from "./Test";


const Hookks = () => {
    // const [name, changeName] = useInputState('Naimoon Nahar')
    // const [email, changeEmail] = useInputState('nahar@gmail.com')
    const useName = useInputState('');
    const useEmail = useInputState('')

    const handleSubmit = (event) =>{
        console.log(useEmail, useName)
        // console.log(name, email)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...useName} type="text" name="name" placeholder="Name"></input>
                {/* <input value={name} onChange={changeName} type="text" name="name" placeholder="Name"></input> */}
                <br></br>
                <input {...useEmail} type="text" name="email" placeholder="E-mail"></input>
                {/* <input value={email} onChange={changeEmail} type="text" name="email" placeholder="E-mail"></input> */}
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Hookks;