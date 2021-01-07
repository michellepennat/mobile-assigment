const API_URL = 'https://rickandmortyapi.com/api/';

export class Api {
  async get(url, params) {
    url = new URL(`${API_URL}${url}`);
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key]),
      );
    return fetch(url, {
      method: 'GET',
    })
      .then(async (response) => {
        response.payload = await response.json();
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
}

export default new Api();
