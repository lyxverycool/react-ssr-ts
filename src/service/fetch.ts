import axios from 'axios'

interface RequestFace {
  url: string,
  params?: any
  method?: string
  withCredentials?: boolean
  data?: any
  timeout?: number
}

const fetch = (request: RequestFace) => {
  const options: RequestFace = { ...request }
  if (options.method === 'GET') {
    options.params = {
      ...options.params,
      t: new Date().getTime(),
    }
  }

  return axios(options as any)
    .then(res => res.data)
    .catch(err => {
      return err
    })
}

export default fetch
