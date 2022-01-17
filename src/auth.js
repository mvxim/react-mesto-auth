export const BASE_URL = "https://auth.nomoreparties.co"

export const register = (userData) => {
  return fetch(`${ BASE_URL }/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }).then((response) => {
    if (response.status === 201) {
      return response.json()
    }
    return Promise.reject(`>>> Ошибка: ${ response.status }`)
    
  })
}

export const login = (userData) => {
  return fetch(`${ BASE_URL }/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    return Promise.reject(`>>> Ошибка: ${ response.status }`)
  })
}
