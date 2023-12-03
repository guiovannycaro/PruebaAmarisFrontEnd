import axios from "axios";

let url = ""

if (process.env.API) {
    url = process.env.API
}

export default () => {
    return axios.create({
        baseURL: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}