import React, { useState } from 'react';
import axios from 'axios';
import RestApi from '../api';

const Registration = () => {
    const [userDetails, setUserDetails] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNum: '',
        address: '',

    });

    const inputHandler = (e) => {


        let data = userDetails;

        if (e.target.name === 'name') {

            data.userName = e.target.value;

        } else if (e.target.name === 'email') {
            data.email = e.target.value;
        }
        else if (e.target.name === 'password') {
            data.password = e.target.value;
        }
        else if (e.target.name === 'cpassword') {
            data.confirmPassword = e.target.value;
        }
        else if (e.target.name === 'pnumber') {
            data.phoneNum = e.target.value;

        }
        else if (e.target.name === 'address') {
            data.address = e.target.value;
        }
        // console.log(data);
        setUserDetails(data);

    }
    const rSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(userDetails);
        let params = {
            student_name: userDetails.userName,
            student_email: userDetails.email,
            password: userDetails.password,
            student_address: userDetails.address,
            student_contact: userDetails.phoneNum,

        }
        RestApi.registration(params)
            .then(resp => console.log(resp))
    }



    return (
        <div style={{ margin: '2rem' }}>
            <h1>REGISTRATION FORM</h1>
            <form onSubmit={rSubmitHandler} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Name</label>
                    <input type="name" name='name' aria-describedby="emailHelp" onChange={(e) => inputHandler(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Email</label>
                    <input type="email" name='email' onChange={(e) => inputHandler(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Phone Number</label>
                    <input type="number" name='pnumber' onChange={(e) => inputHandler(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" name='password' onChange={(e) => inputHandler(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Confirm Password</label>
                    <input type="password" name='cpassword' onChange={(e) => inputHandler(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Address</label>
                    <input type="text" name='address' onChange={(e) => inputHandler(e)} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}

export default Registration;
