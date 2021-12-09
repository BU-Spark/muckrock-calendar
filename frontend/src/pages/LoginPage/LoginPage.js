import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import {TextField} from '@material-ui/core';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide_1 from '../../images/accept-tasks.png';
import slide_2 from '../../images/files-sent.png';
import slide_3 from '../../images/secure-data.png';
import slide_4 from '../../images/online-calendar.png';


function Login({ user, Login, usernameTest, error }) {
    const [details, setDetails] = useState({userNameOrEmail: "", password: ""});

    const loginHandler = e => {
        e.preventDefault();

        Login(details);
        usernameTest();
    };

    return (
        
        <container className="loginpage">
            <form className="login" onSubmit={loginHandler}>
                {/* ERROR! */}
                <TextField 
                    className="login-field"
                    id="userNameOrEmail"
                    label="Username or Email"
                    onChange={e => setDetails({...details, userNameOrEmail: e.target.value})} value={details.userNameOrEmail}
                />
                <TextField 
                    className="login-field"
                    id="password"
                    label="Password"
                    type="password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
                />
                <Button className="submit-button login-field" variant="primary" type="submit">Login</Button>
            </form>
            <div className="information">
                <Carousel interval="3500" indicators={true} slide={false} controls={false} fade={true} wrap={true}>
                    <Carousel.Item className="carousel-slide">
                        <img
                            className="slide-image"
                            src= {slide_1}
                            alt="accept tasks slide"
                        />
                        <p className="slide-title">Track Requests in Real Time</p>
                        <p className="slide-text">
                            Managing hundreds of requests has never been easier.
                            Get an overview of what requests are in progress, have 
                            already been submitted, or need to be revisted.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-slide">
                        <img
                            className="slide-image"
                            src= {slide_2}
                            alt="files sent slide"
                        />
                        <p className="slide-title">Take Control Of Your Requests</p>
                        <p className="slide-text">
                            Feel in control of what you are submitting and when you should hear back from an agency so that you stay on top of things.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-slide">
                        <img
                            className="slide-image"
                            src= {slide_3}
                            alt="secure data slide"
                        />
                        <p className="slide-title">Security Is Our Priority</p>
                        <p className="slide-text">
                            We work with MuckRock to ensure that your records requests are safe and secure.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-slide">
                        <img
                            className="slide-image"
                            src= {slide_4}
                            alt="online calendar slide"
                        />
                        <p className="slide-title">Get Notifications</p>
                        <p className="slide-text">
                            Notifications let you quickly see what's on your to-do list today, tomorrow, next week, next month, and beyond.
                        </p>
                    </Carousel.Item>
                </Carousel>
            </div>
        </container>
    )
};

export default Login;