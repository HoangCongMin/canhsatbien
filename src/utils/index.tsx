import React from 'react'
import axios,{AxiosInstance } from 'axios'

class Http {
    instance:AxiosInstance
    constructor() {
        this.instance=axios.create({
          baseURL: 'https://csbr.3i.com.vn/'
        })
    }
}

const http=new Http().instance
export default http
