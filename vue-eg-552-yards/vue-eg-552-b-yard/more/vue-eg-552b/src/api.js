import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://192.168.88.60:6035/',
  json: true
})

export default {

  async execute (method, resource, data) {
    // inject the accessToken for each request
    // let accessToken = await Vue.prototype.$auth.getAccessToken()
    this.accessToken = localStorage.getItem("jwtToken");
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },


  getPosts () {
    return this.execute('get', '/posts.json')
  },
  getPost (id) {
    return this.execute('get', `/posts/${id}`)
  },
  createPost (data) {
    return this.execute('post', '/posts.json', data)
  },
  updatePost (id, data) {
    return this.execute('put', `/posts/${id}`, data)
  },
  deletePost (id) {
    return this.execute('delete', `/posts/${id}`)
  }
}
