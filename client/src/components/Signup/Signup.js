import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Signup extends Component {

    constructor() {
        super();

        this.state = {};
    }

    getValues = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };


    sendData = (event) => {
        event.preventDefault();

        axios.post('/api/signup', this.state)
            .then((data) => {
                sessionStorage.setItem('isAuthenticated', JSON.stringify(true));
            }).then((data) => {
                this.props.history.push('/user');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {

        return (
            <div className="jumbotron text-center">

                <form>
                    <input
                        type="text"
                        name="username"
                        className="input"
                        placeholder="username"
                        onChange={this.getValues}/> <br/>


                    <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="password"
                        onChange={this.getValues}/> <br/>

                    <button className="btn btn-primary" onClick={this.sendData}>Sign Up</button>
                </form>


                <Link to = '/signin'> <button className="btn btn-primary">Go to Signin</button> </Link>

            </div>
        );
    }

}

export default Signup;