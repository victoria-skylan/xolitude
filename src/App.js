import React from 'react'
import logo from './logo.svg';
import * as bs from 'react-bootstrap'
import './App.css';
import { Auth } from 'aws-amplify';
import HeaderContainer from './HeaderContainter'
import  GreetingHeader from './GreetingHeader'
import FooterContainer from './FooterContainer'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from './Welcome'
import Profile from './Profile'
import Login from './login'
import Messages from './Messages'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from './context'


function App() {
    const context = React.useContext(AppContext)
    return (
        <Router>
        <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
                    <bs.Row noGutters className="flex-grow-0 flex-shrink-0 border-bottom shadow-sm">
                        <bs.Col className="px-3 m-3"><HeaderContainer /></bs.Col>
                    </bs.Row>
                    <Switch>
                        <Route path="/profile">
                            <bs.Row noGutters className="flex-grow-1">
                                <Profile name="Dennis Day" />
                            </bs.Row>
                        </Route>


                        <Route path="/login">
                            <bs.Row noGutters className="flex-grow-0 flex-shrink-0 border-bottom shadow-sm"> 
                            <Profile name="Dennis Day" />
                            </bs.Row>
                        </Route>

                        <Route path="/messages">
                        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 border-bottom shadow-sm">
                            <Messages />
                        </bs.Row>
                        </Route>

                        <Route path="/">
                        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 border-bottom shadow-sm"> 
                            <Welcome />
                        </bs.Row>
                        </Route>

                    </Switch>
            <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
                <bs.Col className="px-3 py-2">
                    <FooterContainer />
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </Router>
    );
}

export default App;
// export default withAuthenticator(App);
