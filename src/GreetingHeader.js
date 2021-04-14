import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import './App.css';
import FA from "react-fontawesome";

function GreatingContainer(props) {
    const menu = {fontSize: '1.2em',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white' };
    const logo = {
        fontSize: '2em', 
        fontFamily: '"Montserrat"',
        fontWeight: 'bolder'};
    const logoCol = {
        color: '#D3733A',
    }
    const ico = {
        fontSize: '2em', 
        color: '#404040'};
    return (
        <bs.Navbar expand="lg" >
        <bs.Navbar.Brand href="/" style={logo} > Welcome to <span style={logoCol}>jobli</span></bs.Navbar.Brand>
        <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav" className="justify-content-end stickyTop">
                <bs.Form inline> 
                    <bs.Nav.Link style={ico} href="/login"><FA name="fas fa-user"></FA></bs.Nav.Link>
                </bs.Form>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default GreatingContainer