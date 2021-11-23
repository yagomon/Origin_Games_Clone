const Api = {
  url: 'https://www.mmobomb.com/api1/games',
  fetchGetAll: () =>  fetch(`${Api.url}/games`),
  fetchGetById: (id) => fetch(`${Api.url}/game?id=${id}`)  
}

// https://www.mmobomb.com/api?ref=devresourc.es


export default Api;