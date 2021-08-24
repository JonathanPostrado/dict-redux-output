import axios from 'axios';
const baseUrl = 'http://localhost:8000'

const getUserInfoApi = () => {
    const response = `${baseUrl}/users`
    return axios.get(response)
}


export { 
    getUserInfoApi,

}