import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={handleChanges}
                        value={newSmurf.name}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="age"
                        placeholder="age"
                        onChange={handleChanges}
                        value={newSmurf.age}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="height"
                        placeholder="height"
                        onChange={handleChanges}
                        value={newSmurf.height}
                    />
                </div>
                <Button className = "submitButton" type="submit">Create Smurf</Button>

            </form>
        </div>
    );
};

export default SmurfForm;