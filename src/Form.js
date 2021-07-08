const Form = ({ handleUsers }) => {

    const handleSubmit = e => {
        e.preventDefault();
        const user = { name: e.target[0].value, age: e.target[1].value, id: Math.random() };
        handleUsers(user);
        // e.target[0].value = '';
        // e.target[1].value = '';
        e.target.reset();
        return user;
    }

    return (
        <div className="form">
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Age(Years)</label>
                    <input type="number" />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default Form;