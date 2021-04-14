<template>
  <div>
    <h1>Create A Book</h1>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          <b-alert show>{{error.message}}</b-alert>
        </li>
      </ul>

    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="post1.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>isbn:</label>
              <textarea class="form-control" v-model="post1.isbn" rows="1"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

    export default {
        data(){
        return {
          post1:[],
          errors: []
        }
    },
    methods: {
      addPost(){
        let uri = 'http://10.4.1.228:3000/book';
        axios.post(uri, this.post1).then(() => {
          this.$router.push({
            name: "BookList"
          });
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
      }
    }
  }
</script>