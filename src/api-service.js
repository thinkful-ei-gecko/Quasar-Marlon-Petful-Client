import config from './config'

const ApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      headers: {

      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`)
  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`)
  },

  adoptCat() {

  },

  adoptDog(){

  },
}

export default ApiService;