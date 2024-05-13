import axios from 'axios'

export const https = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
})

https.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

async function handleRequest(endpoint, body, method) {
    let response
    if (method === 'GET') {
        response = await https.get(endpoint, { params: body })
    } else if (method === 'POST') {
        response = await https.post(endpoint, body)
    } else if (method === 'DELETE') {
        response = await https.delete(endpoint, body)
    } else if (method === 'PATCH') {
        response = await https.patch(endpoint, body)
    } else {
        throw new Error('Unsupported HTTP method')
    }
    return response.data
}

function getToken() {
    const value = `; ${document.cookie}`
    const parts = value.split(`; access=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
}
