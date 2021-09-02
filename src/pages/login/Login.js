import React, { useState } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';
import { AuthApi } from './../../api/api_auth';
import { Link } from 'react-router-dom';

const url = "login"

const Login = () => {

    const [nationalCode, setNationalCode] = useState()
    const [password, setPassword] = useState();

    const validateLogin = (user) => {
        if (!user.nationalCode) return "نام کاربری فراموش نشه";
        if (!user.password) return "باید حتما پسورد وارد بشه";
    }
    const handleLogin = () => {
        const infoLogin = {
            nationalCode: nationalCode,
            password: password
        };
        // handle error
        const error = validateLogin(infoLogin)
        if (error) return console.warn(error);
        // handle Api
        AuthApi(infoLogin, url, (isOK, data) => {
            if (!isOK) return console.log(data);
            console.log(data);
        })
    }

    return (

        <Container>
            <h4 className="mt-5 p-3 text-center rounded">صفحه ورود</h4>
            <Row className="mt-5 shadow-lg">
                <Col lg={9} md={8} sm={12} className="m-auto p-5"  >
                    <Form dir="rtl" autoComplete="on">
                        <Form.Group className="mb-4" controlId="fromBasicNationalCode">
                            <Form.Label>کد ملی</Form.Label>
                            <Form.Control
                                value={nationalCode}
                                onChange={(e) => setNationalCode(e.target.value)}
                                type="number"
                                placeholder="کد ملی خود را وارد کنید ..."
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control
                                // value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete='on'
                                type="password"
                                placeholder="رمز عبور خود را وارد کنید ..."
                            />
                        </Form.Group>
                        <Link to={"/ForgetPassword"} className="link"><p>فراموشی رمز عبور</p></Link>
                        <Button className="mt-4" variant="primary" style={{ width: '100%' }} onClick={() => handleLogin()}>
                            ورود
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default Login;