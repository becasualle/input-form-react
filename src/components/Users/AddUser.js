import React, { useState } from 'react';
// add card component for common general styles
import Card from '../UI/Card';
// add styles module css for this component
import styles from './AddUser.module.css';

import Button from '../UI/Button';

const AddUser = props => {

    // create initial states for username and age that user input
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    // when user click submit keep current username and age
    const addUserHandler = event => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    }

    // on every letter that user input update enteredUsername and enteredAge
    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    return (
        // When set classname in component have to call it in this component using props
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                {/* Add onChange to call function on every letter that user types in */}
                <input id="username" type="text" onChange={usernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler} />
                <Button type="submit" onClick={addUserHandler}>Add user</Button>
            </form>
        </Card>
    );
}

export default AddUser;