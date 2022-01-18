export const BASE_URL = "https://auth.nomoreparties.co"

const checkResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`>>> Ошибка: ${ res.status }`)
}

export const register = (userData) => {
  return fetch(`${ BASE_URL }/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }).then(checkResponse)
}

export const login = (userData) => {
  return fetch(`${ BASE_URL }/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }).then(checkResponse)
}

export const getContent = (token) => {
  return fetch(`${ BASE_URL }/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ token }`,
    }
  })
      .then(checkResponse)
      .then(data => data)
}
