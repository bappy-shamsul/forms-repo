

const ReusableForm = ({children, formTitle, handleSubmit, submitBtn='Submit' }) => {
    const handleLocalSubmit = e => {
        e.preventDefault()
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            <form onSubmit={handleLocalSubmit}>
                <div>
                    {/* <h2>Sign Up</h2> */}
                    {children}
                </div>
                <input type="text" name="name" placeholder="Name"></input>
                <br></br>
                <input type="text" name="email" placeholder="E-mail"></input>
                <br></br>
                <input type="password" name="password" placeholder="Password"></input>
                <br></br>
                <input type="submit" value={submitBtn}></input>
                {/* <button type="submit" value={submitBtn}>Submit</button> */}
            </form>
        </div>
    );
};

export default ReusableForm;