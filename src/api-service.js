import config from './config'

const ApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}api/cat`, {
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
    return fetch(`${config.API_ENDPOINT}api/dog`, {
      headers: {

      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}api/people`, {
      headers: {

      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  adoptCat() {
    return fetch((`${config.API_ENDPOINT}api/cat`),
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    }
    )
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return 1;
    })
    .catch(error => {
			alert(error.message)
		})
  },

  adoptDog() {
    return fetch((`${config.API_ENDPOINT}api/dog`),
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    }
    )
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return 1;
    })
    .catch(error => {
			alert(error.message)
		})
  },

  signUp(newName) {
    return fetch(`${config.API_ENDPOINT}api/people`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: newName,
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return 1;
    })
    .catch(error => {
			alert(error.message)
		})
  }
}

export default ApiService;