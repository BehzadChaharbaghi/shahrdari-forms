import React, { useState } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from 'react-bootstrap';

import { authApi } from './../../api/api_auth';
import { Link } from 'react-router-dom';

const url = "forgetPassword"
const ForgetPassword = () => {

    const [nationalCode, setNationalCode] = useState()

    const validateForgetPassword = (user) => {
        if (!user.nationalCode) return "نام کاربری حتما باید وارد بشه";
    }
    const handleForgetPassword = () => {
        const infoForgetPassword = {
            nationalCode: nationalCode
        }

        // handel error 
        const error = validateForgetPassword(infoForgetPassword)
        if (error) return console.warn(error);

        //handel Api
        authApi(infoForgetPassword, url, (isOK, data) =>{
            if (!isOK) return console.log(data);
            console.log(data);
        })

    }

    return (

        <Container>
            <h4 className="mt-5 p-3 text-center rounded">فراموشی رمز عبور</h4>
            <Row className="mt-5 shadow-lg">
                <Col lg={9} md={6} sm={12} className="m-auto p-5"  >
                    <Form dir="rtl" autoComplete="on">
                        <Form.Group className="mb-4" controlId="fromBasicNationalCode">
                            <Form.Control
                                value={nationalCode}
                                onChange={(e) => setNationalCode(e.target.value)}
                                type="number"
                                placeholder="کد ملی خود را وارد کنید ..."
                            />
                        </Form.Group>
                        <Link to="/ResetPassword">
                            <Button
                                onClick={() => { handleForgetPassword() }}
                                variant="primary"
                                className="mt-4"
                                style={{ width: '100%' }}
                            >
                                ارسال کد
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgetPassword;