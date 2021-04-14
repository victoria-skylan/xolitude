import React from 'react'
import * as bs from 'react-bootstrap'
import FA from "react-fontawesome";

function Profile(props) {
    const title = {
        fontSize: '2em', 
        marginTop: '4em',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: '#2F636F'};
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
    const subhead = {
        fontSize: "1em",
        color: '#3F8392',
        fontWeight: "500"
    }
    const infoTitles = {
        borderRadius: "40px",
        color: '#4C9CAD',
        borderColor: "#D3733A",
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
                        <p style={subhead}>Full Stack Developer looking for opportunities to utilize database skills on projects in the manufacturing space.</p>
                    </bs.Col>
                    <bs.Col md="3" style={subhead}>
                    resume upload 
                        <FA name="fas fa-file" style={fileUpload}></FA>
                    </bs.Col>
                </bs.Row>
                
                <bs.Row style={headerBackground}>
                    <bs.Col md={4}></bs.Col>
                    <bs.Col md={4} className="text-center"></bs.Col>
                    <bs.Col md={4} className="text-center"></bs.Col>
                </bs.Row>
                <bs.Row className="px-2 mx-2">
                    <bs.Col md={4} className=" p-5">
                        <h3 className="mt-2 text-left">Education</ h3>
                        <bs.Row className="border shadow rounded p-3">
                            <bs.Col md={3}><bs.Image width="75 px"  src="BYU.png" roundedCircle /></bs.Col>
                            <bs.Col>
                                <p><b>Brigham Young University</b><br/>
                                Information Systems<br/>
                                Senior<br/>
                                3.60 GPA</p>
                            </bs.Col>
                        </bs.Row>
                        <h3 className="mt-5 text-left">Dashboard</ h3>
                        <bs.Row className="border shadow rounded p-3 text-center">
                            <bs.Col md={6} className="border rounded p-3 text-center">
                                <bs.Row>
                                <h4 style={BigNumber}>3</h4>
                                </bs.Row>
                                <bs.Row>
                                <p className="border rounded p-2" style={infoTitles}>Connected</p>
                                </bs.Row>
                            </bs.Col> 
                            <bs.Col md={6} className="border rounded p-3 text-center">
                                <bs.Row className="text-center" >
                                <h4 style={BigNumber} >2</h4>
                                </bs.Row>
                                <bs.Row>
                                <p className="border rounded p-2 text-center" style={infoTitles}>Appointments</p>
                                </bs.Row>
                            </bs.Col> 
                        </bs.Row>
                    </bs.Col>
                    <bs.Col md={8} className="text-center mt-5">
                        <bs.Card className="shadow">
                            <bs.Card.Body>
                                <iframe width="750" height="450" src="https://www.youtube.com/embed/HsWYxfVzX_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
    )
}
export default Profile
