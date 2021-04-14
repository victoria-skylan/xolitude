import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import AppContext from './context'

function HeaderContainer(props) {
    const menu = {fontSize: '1.2em',
        backgroundColor: 'rgba(0,0,0,.9)',
        color: 'white' };
    const logo = {fontSize: '1.8em', color: 'white'};
    const context = React.useContext(AppContext);

    return (
            <bs.Navbar expand="lg" fixed="top" className = "menu" style={menu} >
                <bs.Nav className="mr-auto">
                    <Link href="#front" style={logo} className="mr-3" > 
                    {/* <bs.Image 
                        src = 'media\Xolitude.png'
                        width="40"
                        height="40"
                        className="d-inline-block align-top m-2"
                    /> */}
                    XOLITUDE
                    </Link>
                    {/* <bs.Nav.Link  to="/" className="nav-link m-2" variant="outline-light"><bs.Button variant="outline-light" className='px-5'>Home</bs.Button></bs.Nav.Link>
                    <bs.Nav.Link to="/help" className="nav-link m-2"><bs.Button variant="outline-light" className='px-5'>Gallary</bs.Button></bs.Nav.Link>
                    <bs.Nav.Link to="/about" className="nav-link m-2"><bs.Button variant="outline-light" className='px-5'>Portrait Info</bs.Button></bs.Nav.Link>
                    <bs.Nav.Link to="/about" className="nav-link m-2"><bs.Button variant="outline-light" className='px-5'>Check Out</bs.Button></bs.Nav.Link> */}
                </bs.Nav>
                <bs.Nav className=" pr-4">
                    <Link to="/cart" className="nav-link">
                    <bs.Button variant="outline-light" className='px-4 py-2'>
                    <FontAwesomeIcon icon={faShoppingCart} className="mx-1"/>
                    {/* {context.cartCount} */}
                    </bs.Button>
                    </Link>
                </bs.Nav>
        </bs.Navbar>
    )
}
export default HeaderContainer
