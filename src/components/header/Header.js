import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css"

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" dir="rtl">
            <Nav>
                <Nav.Item className="p-3"> <Link className="link-text" to={"/"}>خانه</Link></Nav.Item>
                <Nav.Item className="p-3"> <Link className="link-text" to={"/Login"}>ورود</Link></Nav.Item>
                <Nav.Item className="p-3"> <Link className="link-text" to={"/ResetPassword"}>تعویض پسورد</Link></Nav.Item>
                <Nav.Item className="p-3"> <Link className="link-text" to={"/VerifyTwoFactor"}>تایید دو مرحله ای</Link></Nav.Item>
                <NavDropdown className="p-2" title="درخواست ها" id="nav-dropdown">
                    <NavDropdown.Item><Link className="link-text" to={"/RequestBuyer"}>درخواست های خریدار</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link className="link-text" to={"/RequestLetter"}>درخواست های نامه وار</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
};

export default Header;