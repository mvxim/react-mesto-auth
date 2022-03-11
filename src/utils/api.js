import { BASE_URL } from './constants';

class Api {
  constructor(url) {
    this._url = url;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }
  
  _onResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`>>> Ошибка: ${ res.status }`);
  }
  
  getUserInfo() {
    return fetch(`${ this._url }/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(this._onResponse);
  }
  
  setUserInfo(userInfo) {
    return fetch(`${ this._url }/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(
          {
            name: userInfo.name,
            about: userInfo.about,
          }
      )
    }).then(this._onResponse);
  }
  
  setUserAvatar(avatarLink) {
    return fetch(`${ this._url }/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(
          {
            avatar: avatarLink
          }
      )
    }).then(this._onResponse);
  }
  
  getPlaces() {
    return fetch(`${ this._url }/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    }).then(this._onResponse);
  }
  
  createNewPlace({ name, link }) {
    return fetch(`${ this._url }/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(
          {
            name: name,
            link: link
          }
      )
    }).then(this._onResponse);
  }
  
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${ this._url }/cards/${ cardId }/likes`, {
      method: `${ isLiked ? 'DELETE' : 'PUT' }`,
      credentials: 'include',
      headers: this._headers,
    }).then(this._onResponse);
  }
  
  removePlace(cardId) {
    return fetch(`${ this._url }/cards/${ cardId }`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._onResponse);
  }
}

const api = new Api(BASE_URL);

export default api;
