<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Posts Manager</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.updated_at }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(post)">Edit</a> -
                <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Edit Post ID#' + model.id : 'New Post')">
          <form @submit.prevent="savePost">
            <b-form-group label="Title">
              <b-form-input type="text" v-model="model.title"></b-form-input>
            </b-form-group>
            <b-form-group label="Body">
              <b-form-textarea rows="4" v-model="model.body"></b-form-textarea>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Save Post</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import api from '@/api'
import axios from "axios";

export default {
  data () {
    return {
      loading: false,
      posts: [],
      model: {}
    }
  },
  // async created () {
  //   this.refreshPosts()
  // },

  created() {
    this.access_token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}` 
    axios
      .get(`${process.env.VUE_APP_BACKEND_URL}/posts.json`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.t_errors.push(e);
        if (e.response.status === 401) {
          this.$router.push({
            name: "Login"
          });
        }
      });
  },

  methods: {
    async refreshPosts () {
      this.loading = true
         this.access_token = localStorage.getItem("jwtToken");
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}` 
        axios
          .get(`${process.env.VUE_APP_BACKEND_URL}/posts.json`)
          .then(response => {
            this.posts = response.data;
          })
          .catch(e => {
            this.t_errors.push(e);
            if (e.response.status === 401) {
              this.$router.push({
                name: "Login"
              });
            }
          });
      this.loading = false
    },

    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        // await api.updatePost(this.model.id, this.model)

          this.access_token = localStorage.getItem("jwtToken");
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}` 
          // axios.defaults.headers.common['content-type'] = `application/json` 
          let uri = `${process.env.VUE_APP_BACKEND_URL}/posts.json`;
          console.log( JSON.stringify(this.model, null, 2) );
          console.log( this.model);

          axios.post(uri, this.model).then(() => {
            // this.$router.push({
            //   name: "BookList"
            // });
            this.refreshPosts()
          })
          .catch(e => {
            console.log(e);
            this.t_errors.push(e);
          });
        


      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
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
