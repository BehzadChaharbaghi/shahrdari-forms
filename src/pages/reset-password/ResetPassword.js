import React, { useState } from 'react';
import { authApi } from './../../api/api_auth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const url = "ResetPassword"
const ResetPassword = () => {
    // variable and states
    const [newPassword, setNewPassword] = useState();
    const [confPassword, setConfPassword] = useState();

    // validate
    const validateCode = (infoNewPassword) => {
        if (infoNewPassword.password !== infoNewPassword.confPassword)
            return "تکرار رمز عبور با رمز عبور اصلی متفاوت است";
    };
    // resetPassword function
    const handleResetPassword = () => {
        const infoNewPassword = {
            newPassword: newPassword,
            confPassword: confPassword
        };
        // handle error
        const error = validateCode(infoNewPassword);
        if (error) return console.warn(error);
        // handle Api
        authApi(infoNewPassword, url, (isOK, data) => {
            if (!isOK) return console.log(data);
            console.log(data);
        })
    }

    return (
        <Container>
            <h1 className="mt-5 p-3 text-center rounded">تغییر رمز عبور</h1>
            <Row className="mt-5 shadow-lg">
                <Col lg={9} md={6} sm={12} className="p-5 m-auto rounded-lg">
                    <Form dir="rtl" autoComplete="on">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>رمزعبور جدید</Form.Label>
                            <Form.Control type="password" autoComplete="on" placeholder="رمز عبور جدید خود را وارد کنید ..." onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfPassword">
                            <Form.Label>تکرار رمزعبور</Form.Label>
                            <Form.Control type="password" autoComplete="on" placeholder="بار دیگر رمز عبور جدید خود را وارد کنید ..." onChange={(e) => setConfPassword(e.target.value)} />
                        </Form.Group>
                        <Button className="mt-5" variant="danger" style={{ width: '100%' }} onClick={() => handleResetPassword()}>
                            تغییر رمز عبور
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;