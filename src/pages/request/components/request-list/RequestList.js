import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ListRequestType from './components/ListRequestType';

const RequestList = () => {
    const [type, setType] = useState("letter")
    
    const handleCheckbox = (value) => {
        setType(value);
    }

    return (
        <div>
            <Form.Group className="mb-3" controlId="formTypeRequest">
                <Form.Check value="letter" type="checkbox" label="نامه وار" onChange={e => handleCheckbox(e.target.value)} />
                <Form.Check value="buyer" type="checkbox" label="خریدار" onChange={e => handleCheckbox(e.target.value)} />
            </Form.Group>
            {type === "letter" && <ListRequestType type={"1"} />}
            {type === "buyer" && <ListRequestType type={"2"} />}
        </div>
    );
};

export default RequestList;