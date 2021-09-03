import React from 'react';
import { Form } from 'react-bootstrap';

const Input = (props) => {
    let inputElement = null

    switch (props.inputtype) {
        case 'input':
            inputElement = <Form.Control as="input" {...props} />
            break
        case 'textarea':
            inputElement = <Form.Control as="textarea" {...props} />
            break
        default:
            inputElement = <Form.Control as="input" {...props} />
    }
    return (
        <div>{inputElement}</div>
    );
};

export default Input;