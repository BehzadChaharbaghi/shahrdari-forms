import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { RequestLetterPostApi, GetRequestType } from '../../../../api/api-request';

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity"
import SelectList from '../../../../components/UI/Select/SelectList';
import Input from './../../../../components/UI/Input/Input';

const url = "Create"
const RequestLetter = () => {
    // variable and states
    const [lettetNumber, setLettetNumber] = useState();
    const [letterReference, setLetterReference] = useState();
    const [description, setDescription] = useState();
    const [letterDate, setLetterDate] = useState();
    const [requestType, setRequestType] = useState([]);

    // validate
    const validateCode = (infoLetterRequest) => {
        if (!infoLetterRequest.lettetNumber) return "لطفا شماره را وارد کنید";
        if (!infoLetterRequest.letterReference) return "لطفا مرجع صدور نامه را وارد کنید";
        if (!infoLetterRequest.description) return "لطفا توضیحات را وارد کنید";
        if (!infoLetterRequest.letterDate) return "لطفا تاریخ را وارد کنید";
    };
    // buyer request function
    const handleLetterRequest = () => {
        const infoLetterRequest = {
            lettetNumber: lettetNumber,
            letterReference: letterReference,
            description: description,
            letterDate: letterDate,
        };
        // handle error
        const error = validateCode(infoLetterRequest);
        if (error) return console.warn(error);
        // handle Api
        RequestLetterPostApi(infoLetterRequest, url, (isOK, data) => {
            if (!isOK) return console.log(data);
            console.log(data);
        })
    }
    // get type request
    useEffect(() => {
        const url = "GetAll"
        GetRequestType(url, (isOK, data) => {
            if (!isOK) return console.warn(data);
            setRequestType(data);
        }, [])
    })

    return (
        <Container>
            <h1 className="mt-5 p-3 text-center rounded">Request Letter Page</h1>
            <Row className="mt-5 shadow-lg">
                <Col lg={9} md={8} sm={12} className="p-5 m-auto rounded-lg">
                    <Form dir="rtl" autoComplete="on">
                        <SelectList data={requestType} />
                        <Form.Group className="mb-3" controlId="formBasicLetterNumber">
                            <Form.Label>شماره نامه</Form.Label>
                            <Input inputtype="input" type="text" placeholder="لطفا شماره نامه را وارد کنید ..." onChange={(e) => setLettetNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLetterReference">
                            <Form.Label>مرجع صدور نامه</Form.Label>
                            <Input inputtype="input" type="tel" placeholder="لطفا مرجع صدور نامه را وارد کنید ..." onChange={(e) => setLetterReference(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLetterDate">
                            <Form.Label style={{ display: "block" }}>تاریخ</Form.Label>
                            <DatePicker
                                value={letterDate}
                                placeholder="تاریخ"
                                calendar={persian}
                                animations={[opacity()]}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                            // onChange={(e) => setLetterDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>توضیحات درخواست </Form.Label>
                            <Input inputtype="textarea" rows={3} type="text" autoComplete="on" placeholder="توضیحات درخواست خود را وارد کنید ..." onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Button className="mt-5" variant="success" style={{ width: '100%' }} onClick={() => handleLetterRequest()}>
                            ثبت درخواست نامه
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RequestLetter;