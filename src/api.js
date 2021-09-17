import axios from "axios";
import React, { Component } from 'react'
const baseUrl = 'http://react.neuralresource.com/public/api/v1';

export default class RestApi extends Component {

    static registration(params) {

        return axios.post(`${baseUrl}/register`, params)
    }
    static login(data) {
        return axios.post(`${baseUrl}/login`, data)
    }
}
