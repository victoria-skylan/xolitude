import React from 'react'
import * as bs from 'react-bootstrap'
import FA from "react-fontawesome";
import ProductCard from './ProductCard'
import AppContext from './context'

function Welcome(props) {
    const title = {
        fontSize: '2.5em', 
        color: 'white',
        fontFamily: '"Montserrat"',
        fontWeight: 'bolder'};
    const title1 = {
        paddingTop: '1em',
        fontSize: '1.2em', 
        color: '#3F8392',
        fontFamily: '"Montserrat"',
        fontWeight: '600'};
    const title2 = {
        fontSize: '1.2em', 
        color: '#3F8392',
        fontFamily: '"Montserrat"',
        fontWeight: '600'};
    const headerBackground = {
        backgroundColor: "#242424"};
    const headerButton = {
        backgroundColor: "#254352",
        borderColor: "#254352",
        borderRadius: "40px",
        color: "white"};
    const sinup = {
        color: "white",
        fontFamily: '"Montserrat"',
        fontWeight: '500',
        fontSize: "1em"
    }
    const textRight = {
        position: "relative",
        textAlign: "right",
        paddingRight: "40px"};

    const photos = ["lighthouse", "cave", "Timp", "pier" ,"horseshoe",  "stonewall"];
    const panos = ["Oahu", "LonePeak",  "Zion", "mountain", "Supermoon"];

    const pictureCards = photos.map((photo) =>
        <ProductCard url={photo} />
    )
    const panoCards = panos.map((pano) =>
        <ProductCard url={pano} />
    )
    return (
            <bs.Container fluid >
                <bs.Row className="p-4" style={headerBackground}>
                    <bs.Col className="mt-4 pt-4" md="4"></bs.Col>
                    <bs.Col className="mt-4 pt-4 text-center" md="4">
                    <bs.Image className="m-4" width="200" height="200" src="Logo.png" />
                        <h2 class="section-heading" style={title}>Make your walls an art gallary</h2>
                    </bs.Col>
                    <bs.Col className="mt-4 pt-4" md="4"></bs.Col>
                </bs.Row>
                <bs.Row className="p-4 py-5" style={headerBackground}>
                    <bs.Col md={4} className="text-center"></bs.Col>
                    <bs.Col md={4} className="text-center"><bs.Button className="px-5" style={headerButton} variant="outline-light"><bs.Nav.Link  href="/login" style={sinup}>Contact for a custom photo</bs.Nav.Link></bs.Button></bs.Col>
                    <bs.Col md={4} className="text-center"></bs.Col>
                </bs.Row>
                <bs.Row className="m-5 px-5" >
                    {pictureCards.map( card => (
                    <bs.Col md={6} className="text-center"> {card} </bs.Col>
                    ))}
                </bs.Row>
                <bs.Row className="m-5 px-5" >
                    {panoCards.map( card => (
                    <bs.Col md={12} className="text-center"> {card} </bs.Col>
                    ))}
                </bs.Row>
            </bs.Container>
    )
}
export default Welcome
