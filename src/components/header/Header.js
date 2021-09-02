import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" dir="rtl">
                <Nav >
                    <Nav.Item className="p-3"> <Link className="link-text" to={"/"}>خانه</Link></Nav.Item>
                    <Nav.Item className="p-3"> <Link className="link-text" to={"/Login"}>ورود</Link></Nav.Item>
                    <Nav.Item className="p-3"> <Link className="link-text" to={"/Register"}>ثبت نام</Link></Nav.Item>
                    <Nav.Item className="p-3"> <Link className="link-text" to={"/ResetPassword"}>تعویض پسورد</Link></Nav.Item>
                    <Nav.Item className="p-3"> <Link className="link-text" to={"/VerifyTwoFactor"}>تایید دو مرحله ای</Link></Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;