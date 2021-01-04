<template>
  <div>
    <h1>Create</h1>

      <ul v-if="t_errors && t_errors.length">
        <li v-for="t_error of t_errors" v-bind:key="t_error">
          <b-alert show>{{t_error.message}}</b-alert>
        </li>
      </ul>

    <form @submit.prevent="product_add">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="product_model.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>country_of_origin:</label>
              <input type="text" class="form-control" v-model="product_model.country_of_origin_id">
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
          product_model:{},
          t_errors: []
        }
    },
    methods: {
      product_add(){
        this.access_token = localStorage.getItem("jwtToken");
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}` 
        axios.defaults.headers.common['content-type'] = `application/json` 
        let uri = `${process.env.VUE_APP_BACKEND_URL}/products.json`;
        console.log( JSON.stringify(this.product_model, null, 2) );
        console.log( this.product_model);

        axios.post(uri, this.product_model).then(() => {
          this.$router.push({
            name: "BookList"
          });
        })
        .catch(e => {
          console.log(e);
          this.t_errors.push(e);
        });
      }
    }
  }
</script>