import axios from 'axios'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    app.config.globalProperties.$http = axios

    axios.defaults.headers.common = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    axios.interceptors.response.use(
      function (response) {
        return response
      },
      function ({ response, message }) {
        if (!response) {
          return Promise.reject({ status: 500, data: { message } })
        }
        return Promise.reject(response)
      }
    )
  }
}
