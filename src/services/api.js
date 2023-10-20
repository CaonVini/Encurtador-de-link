// Minha chave: 4ee8855f9048d4e14160492f40bb2e809c4dba99 // 

import axios from 'axios'

export const key = "4ee8855f9048d4e14160492f40bb2e809c4dba99"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api