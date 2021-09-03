import React, { useState } from 'react';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap';
import { AuthApi } from '../../api/api-auth';
import { Link } from 'react-router-dom';
import Input from './../../components/UI/Input/Input';
import { setUserInfo, useAuthDispatch } from '../../context/AuthContext';

const url = "login"
const Login = () => {
    // variable and states
    const [nationalCode, setNationalCode] = useState()
    const [password, setPassword] = useState();
    // context state
    const userDispatch = useAuthDispatch()
    // validate
    const validateLogin = (user) => {
        if (!user.nationalCode) return "نام کاربری فراموش نشه";
        if (!user.password) return "باید حتما پسورد وارد بشه";
    }
    // login function
    const handleLogin = () => {
        const infoLogin = {
            nationalCode: nationalCode,
            password: password
        };
        // handle error
        const error = validateLogin(infoLogin)
        if (error) return console.warn(error);
        // handle Api
        AuthApi(infoLogin, url, async (isOK, data) => {
            if (!isOK) return console.log(data);
            await console.info('شما با موفقیت وارد شدید');
            await setUserInfo(userDispatch, data)
            await localStorage.setItem("nationalCode", data.nationalCode)
            window.location.reload()
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
                            <Input
                                inputtype="input"
                                value={nationalCode}
                                onChange={(e) => setNationalCode(e.target.value)}
                                type="number"
                                placeholder="کد ملی خود را وارد کنید ..."
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>رمز عبور</Form.Label>
                            <Input
                                inputtype="input"
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
                        <Link to={"/Register"} className="link"><h6>اکانت ندارید؟ ثبت نام</h6></Link>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default Login;