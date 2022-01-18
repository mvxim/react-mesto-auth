export const BASE_URL = "https://auth.nomoreparties.co"

export const register = (userData) => {
  return fetch(`${ BASE_URL }/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  }).then((response) => {
    if (response.ok) {
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
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(`>>> Ошибка: ${ response.status }`)
  })
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
      .then(res => res.json())
      .then(data => data)
}
