import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RestApi from '../api'


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formDetails: {
                email: '',
                password: ''
            }
        }
    }
    emailHandler = (e) => {
        let { formDetails } = this.state;
        formDetails.email = e.target.value;
        this.setState({ formDetails })
    }
    passwordHandler = (e) => {
        let { formDetails } = this.state;
        formDetails.password = e.target.value;
        this.setState({ formDetails })

    }
    formHandler = (e) => {
        e.preventDefault();
        let data = {
            student_email: this.state.formDetails.email,
            password: this.state.formDetails.password
        }
        console.log(data)
        let student
        if (this.state.formDetails.email === '' || this.state.formDetails.password === '') {
            alert('please! fill your credentials')
        } else {
            // let student_data = {
            //     name:,

            // }
            RestApi.login(data)
                .then((resp) => {
                    console.log(resp.data.data)
                    let user = {
                        name: resp.data.data.data.student_name,
                        email: resp.data.data.data.student_email,
                        address: resp.data.data.data.student_address,
                        contact: resp.data.data.data.student_contact,
                        profile: resp.data.data.data.student_profile,
                        token: resp.data.data.token
                    }
                    this.props.setUser(user);
                }).
                catch(err => console.log(err));
            this.setState({ formDetails: { email: '', password: '' } })
            this.props.setIsLogin(true);
        }
    }


    render() {
        console.log(this.state.formDetails);
        return (
            <form onSubmit={this.formHandler} style={{ margin: '2rem' }} >
                <h1>LOGIN FORM</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                    <input type="email" className="htmlForm-control" value={this.state.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.emailHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control" value={this.state.password} id="exampleInputPassword1" onChange={this.passwordHandler} />
                </div>
                <div className="mb-3 htmlForm-check">
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">free me mat dhundo registraion kra lo!</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>

                <Link to="/registration">
                    <button type="submit" className="btn btn-info" >REGISTRATION</button>
                </Link>
            </form>
        )
    }
}
