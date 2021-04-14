import React from 'react'
import * as bs from 'react-bootstrap'
import FA from "react-fontawesome";

function Messages(props) {
    const title = {
        fontSize: '1.5em', 
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color:'#4C9CAD'};
    const BigNumber = {
        fontSize: '3em', 
        fontFamily: 'Montserrat',
        fontWeight: '600',
        color: '#4C9CAD'
    }
    const messageCol = {
        height: "100%"
    }
    const clicked = {
        backgroundColor: "#82a6ad"
    }
    // const theData = [
    //     {
    //         name: "Xango",
    //         message: "Hey Dennis we like the mention of React in your profile, we are looking for a react devloper"
    //     },
    //     {
    //         name: "Anonyome Labs",
    //         message: "looks like you have great background in ASP.NET we would love to talk"
    //     },
    //     {
    //         name: "Limble Soulutions",
    //         message: "We saw that you are looking for a place where you can build your skills in Data Analyitics. We have a new crop of data that we are looking at this summer and we would love your help."
    //     }
    // ]


    return (
            <bs.Container fluid className=" m-3 p-3">
                <bs.Row>
                    <bs.Col className="m-3" md={3}>
                        <bs.Card  className="shadow rounded p-4">
                            <bs.Card.Text className="p-3 text-center" style={title}>MESSAGES</bs.Card.Text>
                                {/* <ul key={name}>{$.map(data,(val,name)=> {
                                    return (<li>{val}</li>);
                                }
                                } </ul> */}
                            <bs.Card.Title>Xango</bs.Card.Title>
                            <bs.Card.Body className="border" >
                                Hey Dennis we like the mention of ...
                            </bs.Card.Body>
                            <bs.Card.Title className="pt-3">Anonyome Labs</bs.Card.Title>
                            <bs.Card.Body className="border" >
                                looks like you have great ...
                            </bs.Card.Body>
                            <bs.Card.Title className="pt-3">Limble Solutions</bs.Card.Title>
                            <bs.Card.Body className="border" style={clicked}>
                                We saw that you are looking ...
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                    
                    <bs.Col md={8} className="text-center" >
                        <bs.Card  className="shadow rounded p-4" style={messageCol}>
                            <bs.Card.Body>
                            <p className="border shadow p-3 m-3" > <FA name="far fa-building"></FA> &nbsp; We saw that you are looking for a place where you can build your skills in Data Analyitics. We have a new crop of data that we are looking at this summer and we would love your help.</p>
                            </bs.Card.Body>
                        </bs.Card>
                    </bs.Col>
                </bs.Row>
            </bs.Container>
    )
}
export default Messages
