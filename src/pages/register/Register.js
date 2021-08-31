import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { authApi } from './../../api/api_auth';

const Register = () => {
    // variable and states
    const url = "register"
    const [username, setUserName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    // validate
    const validateRegister = (user) => {
        if (!user.username) return "لطفا کد ملی خود را وارد کنید";
        if (!user.firstName) return "لطفا نام خود را وارد کنید";
        if (!user.lastName) return "لطفا نام خانوادگی خود را وارد کنید";
        if (!user.password) return "لطفا رمز عبور را وارد کنید";
        if (user.password !== user.confPassword)
            return "تکرار رمز عبور با رمز عبور اصلی متفاوت است";
    };
    // register function
    const handleRegister = () => {
        const infoRegister = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password,
            confPassword: confPassword,
        };
        // handle error
        const error = validateRegister(infoRegister);
        if (error) return console.warn(error);
        // handle Api
        authApi(infoRegister, url, (isOK, data) => {
            if (!isOK) return console.log(data);
            console.log(data);
        })
    }

    return (
        <Container>
            <h1 className="mt-5 p-3 text-center rounded">صفحه ثبت نام</h1>
            <Row className="mt-5 shadow-lg">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
                    <Form dir="rtl" autoComplete="on">
                        <Form.Group className="mb-3" controlId="fromBasicNationalCode">
                            <Form.Label>کد ملی</Form.Label>
                            <Form.Control type="number" placeholder="کد ملی خود را وارد کنید ..." onChange={(e) => setUserName(e.target.value)} />
                            <Form.Text className="text-muted">
                                ما هیچوقت کد ملی شما را با دیگران به اشتراک نمیگداریم!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicFirstName">
                            <Form.Label>نام</Form.Label>
                            <Form.Control type="text" placeholder="نام خود را وارد کنید ..." onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fromBasicLastName">
                            <Form.Label>نام خانوادگی</Form.Label>
                            <Form.Control type="text" placeholder="نام خانوادگی خود را وارد کنید ..." onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control type="password" autoComplete="on" placeholder="رمز عبور خود را وارد کنید ..." onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfPassword">
                            <Form.Label>تکرار رمز عبور</Form.Label>
                            <Form.Control type="password" autoComplete="on" placeholder="بار دیگر رمز عبور خود را وارد کنید ..." onChange={(e) => setConfPassword(e.target.value)} />
                        </Form.Group>
                        <Button className="mt-5" variant="primary" style={{ width: '100%' }} onClick={() => handleRegister()}>
                            ثبت نام
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;