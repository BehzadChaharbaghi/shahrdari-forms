import React, { Fragment, useState } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { authApi } from '../../../api/api_auth';
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {

    const url="login"
    const [nationalCode, setNationalCode] = useState()
    const [password, setPassword] = useState();

    const validateLogin = (user) => {
        if (!user.nationalCode) return "نام کاربری فراموش نشه";
        if (!user.password) return "باید حتما پسورد وارد بشه";
    }
    const handleLogin = () => {
        console.log(nationalCode);
        console.log(password);

        const user = {
            nationalCode: nationalCode,
            password: password
        };

        const error = validateLogin(user)
        if (error)
            return console.warn(error);
            authApi(user, url, (isOK, data) =>{
                if( isOK )
                    console.log(isOK);
            })
    }

    return (
        <Container >
            <h4 className="text-center mt-5 p-3 m-auto">صفحه ورود</h4>
            <Row className="align-self-center p-2 bd-highlight col-example">
                <Col className="m-auto shadow-lg p-4" md={8} >
                    <Form>
                        <Form.Group className="mb-4" controlId="nationalCode">
                            <Form.Label>کد ملی</Form.Label>
                            <Form.Control
                                value={nationalCode}
                                onChange={(e) => setNationalCode(e.target.value)}
                                type={"number"}
                                placeholder="کد ملی خود را وارد کنید"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password" >
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete type={"password"}
                                placeholder="رمز عبور خود را وارد کنید"
                            />
                        </Form.Group>
                        <Button className={"btn"} variant="primary" onClick={() => handleLogin()}>
                            ورود
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default Login;