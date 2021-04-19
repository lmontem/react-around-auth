
export const BASE_URL = 'https://register.nomoreparties.co'

export const register = (email, password) => {

    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => {
            console.log(res)
            return res.json()
        })
        
}

export const authorize = (email, password) => {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data
            } else {
                return
            }
        })
        .then(res => {
            if (res === 400) {
                console.log('one of the fields was filled in in correctly')
            }
            if (res === 401) {
                console.log('user email not found')
            }
        })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json()
        })
        .then(data => data)
        .catch(err => console.log(err))
}