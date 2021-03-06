import React from 'react';
import {Link} from 'react-router-dom';
import './Jumbotron.css';
import logo from "../Images/logo.png";
import Wrapper from '../Wrapper/Wrapper.js';
import Container from '../Container/Container.js';


// creates jumbotron component to render to the Landing page
const Landing = () => {
    return (

        <Wrapper>
            <Container>
                <div className="jumbotron text-center">
                    <img src={logo} alt="lotus logo" id="biglogo"/>
                    <h1>Lotus Tracker</h1>
                    <hr className="hr"/>
                    <p>Track your mental health, and take a break through meditation.</p>
                    <p className="lead">
                        <Link className="btn btn-primary btn-lg btn-button" to="/signin">Sign In</Link>
                    </p>
                </div>
            </Container>
        </Wrapper>
    )
};

// exports Landing for external use
export default Landing;
