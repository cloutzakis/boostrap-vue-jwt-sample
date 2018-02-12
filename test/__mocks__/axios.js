const axios = {
  get: () => new Promise(resolve => resolve({
    data: 'mock get'
  })),
  post: jest.fn(
    () =>
      new Promise(resolve =>
        resolve({
          data: {
            title: 'mock',
            id_token: 'mock_token'
          }
        })
      )
  ),

  // Used to avoid error bearking with our axios initialization
  create: () => {
    return axios
  },
  defaults: {
    headers: {
      common: {
        Authorization: ''
      },
      post: {
        'Content-Type': 'text/plain'
      },
      get: {
        Accepts: 'text/plain'
      }
    }
  }
}

export default axios
