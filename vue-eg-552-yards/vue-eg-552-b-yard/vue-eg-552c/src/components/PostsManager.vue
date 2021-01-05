<template>
  <div class="container-fluid mt-4">
    <h4 class="h4">Posts</h4>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-center">Action:&nbsp;</th>
              <th>ID</th>
              <th>Title</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td class="text-center">
                <a href="#" @click.prevent="populatePostToEdit(post)">Edit</a> -
                <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
              </td>
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.updated_at }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <div :title="(model.id ? 'Edit ID#' + model.id : 'New') ">
          <form @submit.prevent="savePost">
            <b-btn type="submit" variant="success">Save</b-btn> 
            <b-form-group label="Title">
              <b-form-input type="text" v-model="model.title"></b-form-input>
            </b-form-group>
            <b-form-group label="Body">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
          </form>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model)
      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this?')) {
        // if we are editing a record we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deletePost(id)
        await this.refreshPosts()
      }
    }
  }
}
</script>
