import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { RequestBuyerApi, GetRequestType } from '../../../../api/api-request';
import Input from '../../../../components/UI/Input/Input';
import SelectList from '../../../../components/UI/Select/SelectList';

const url = "Create"
const RequestBuyer = () => {
    // variable and states
    const [buyerName, setBuyerName] = useState();
    const [buyerMobile, setBuyerMobile] = useState();
    const [buyerCode, setBuyerCode] = useState();
    const [description, setDescription] = useState();
    const [requestType, setRequestType] = useState([]);

    // validate
    const validateCode = (infoBuyerRequest) => {
        if (!infoBuyerRequest.buyerName) return "لطفا نام خریدار را وارد کنید";
        if (!infoBuyerRequest.buyerMobile) return "لطفا شماره موبایل خود را وارد کنید";
        if (!infoBuyerRequest.buyerCode) return "لطفا کد خرید را وارد کنید";
        if (!infoBuyerRequest.description) return "لطفا توضیحات را وارد کنید";
    };
    // buyer request function
    const handleBuyerRequest = () => {
        const infoBuyerRequest = {
            buyerName: buyerName,
            buyerMobile: buyerMobile,
            buyerCode: buyerCode,
            description: description,
        };
        // handle error
        const error = validateCode(infoBuyerRequest);
        if (error) return console.warn(error);
        // handle Api
        RequestBuyerApi(infoBuyerRequest, url, (isOK, data) => {
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
            <h1 className="mt-5 p-3 text-center rounded">Request Buyer Page</h1>
            <Row className="mt-5 shadow-lg">
                <Col lg={9} md={8} sm={12} className="p-5 m-auto rounded-lg">
                    <Form dir="rtl" autoComplete="on">
                        <SelectList data={requestType} />
                        <Form.Group className="mb-3" controlId="formBasicBuyerName">
                            <Form.Label>نام خریدار</Form.Label>
                            <Input inputtype="input" type="text" placeholder="لطفا نام خود را وارد کنید ..." onChange={(e) => setBuyerName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicBuyerMobile">
                            <Form.Label>موبایل خریدار</Form.Label>
                            <Input inputtype="input" type="tel" placeholder="لطفا شماره موبایل خود را وارد کنید ..." onChange={(e) => setBuyerMobile(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicBuyerCode">
                            <Form.Label>کد خریدار</Form.Label>
                            <Input inputtype="input" type="number" placeholder="لطفا کد خرید را وارد کنید ..." onChange={(e) => setBuyerCode(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>توضیحات درخواست خرید</Form.Label>
                            <Input inputtype="input" rows={3} type="text" autoComplete="on" placeholder="توضیحات درخواست خود را وارد کنید ..." onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <Button className="mt-5" variant="success" style={{ width: '100%' }} onClick={() => handleBuyerRequest()}>
                            ثبت درخواست خرید
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RequestBuyer;