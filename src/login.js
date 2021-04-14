import React from 'react'
import * as bs from 'react-bootstrap'
import FA from "react-fontawesome";

function Login(props) {
    const title = {
        fontSize: '2em', 
        marginTop: '4em',
        fontFamily: 'Montserrat',
        fontWeight: '600'};
    const headerBackground = {
        backgroundColor: "#B8D5DC"};
    const headerButton = {
        backgroundColor: "#D3733A",
        borderColor: "#D3733A",
        borderRadius: "17px"};
    const profilepic = {
        position: "absolute",
        left: '10%',
        float: 'left'
    }
    const BigNumber = {
        fontSize: '3em', 
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: '#4C9CAD'
    }
    const fileUpload = {
        fontSize: '2em', 
        fontWeight: '600',
        padding: '10px',
        paddingTop: '2.5em',
        color: "#4C9CAD"
    }

    return (
            <bs.Container fluid>
                <bs.Row className="pl-4" >
                    <bs.Image style={profilepic} className="m-5" width="200" height="200" src="picture4.png" roundedCircle />
                </bs.Row>
                <bs.Row>
                    <bs.Col md="4">
                    </bs.Col>
                    <bs.Col md="5">
                    <h3 style={title}>{props.name}</h3>
                    </bs.Col>
                    <bs.Col md="3">
                    </bs.Col>
                </bs.Row>
                <bs.Row className="p-2" style={headerBackground}>
                    <bs.Col md="4">
                    </bs.Col>
                    <bs.Col md="5">
                        <p><b>Senior</b></p>
                        <p>3.6 GPA</p>
                        <p>Provo, Utah</p>
                    </bs.Col>
                    <bs.Col md="3">
                    resume upload 
                        <FA name="fas fa-file" style={fileUpload}></FA>
                    </bs.Col>
                </bs.Row>
                
                <bs.Row style={headerBackground}>
                    <bs.Col md={4}></bs.Col>
                    <bs.Col md={4} className="text-center"></bs.Col>
                    <bs.Col md={4} className="text-center"></bs.Col>
                </bs.Row>
                <bs.Row className="m-5 px-5" >
                </bs.Row>
                <bs.Row className="px-5 mx-5">
                    <bs.Col md={12} className="text-center m-3 p-3">
                    <h3 className="my-4 text-left">Introduction</ h3>
                        <bs.Card className="shadow">
                            <bs.Card.Body>
                                <iframe width="672" height="378" src="https://www.youtube.com/embed/HsWYxfVzX_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </bs.Card.Body>
                            <bs.Card.Text className="p-3 text-left">
                            Currently pursuing comprehensive four-year course of study in Information Systems, laying solid groundwork for eventual career in Software Development. Completed coursework includes “English Composition and Rhetoric,” “Speech,” “Business Administration”. Enthusiastically lead group projects and mentor peers in subjects including writing and mathematics. 
                            </bs.Card.Text>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
                <bs.Row className="px-5 mx-5">
                    <bs.Col md={12} className="text-center m-3 p-3">
                        <h3 className="mt-2 text-left">Education</ h3>
                    </bs.Col>
                </bs.Row>
                <bs.Row className="px-5 mx-5">
                    <bs.Col md={3} className="text-center m-3 p-3">
                        <bs.Card  className="shadow">
                                <bs.Card.Body><bs.Image width="90%"  src="BYU.png" roundedCircle /></bs.Card.Body>
                                <bs.Card.Text className="p-3"> <b>Brigham Young University</b></bs.Card.Text>
                        </bs.Card>
                    </bs.Col>

                    <bs.Col  md={3} >
                    </bs.Col>

                    <bs.Col  md={3} className="m-3 p-3 text-right" >
                    <bs.Card className="shadow text-center">
                        <bs.Card.Body>
                            
                        <bs.Card.Text className="p-2">Connections</bs.Card.Text>
                            <h4 style={BigNumber}>3</h4>
                        </bs.Card.Body>
                        <hr/>
                        <bs.Card.Body>
                            
                        <bs.Card.Text className="p-2">Appointments</bs.Card.Text>
                            <h4 style={BigNumber}>1</h4>
                        </bs.Card.Body>
                    </bs.Card>
                    </bs.Col>
                    
                </bs.Row>
            </bs.Container>
    )
}
export default Login;