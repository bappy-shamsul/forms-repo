

const Forms = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input type="text" name="email" placeholder="E-mail"></input>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Forms;