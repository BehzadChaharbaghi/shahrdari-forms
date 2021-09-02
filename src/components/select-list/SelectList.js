import React from 'react';
import { Form } from 'react-bootstrap';

const SelectList = ({ data }) => {
    return (
        <Form.Select aria-label="Request type">
            {data.map((item) => <option value={item.title} key={item.id}>{item.title}</option>)}
        </Form.Select>
    );
};

export default SelectList;