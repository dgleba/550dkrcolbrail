<template>
  <b-row>
    <b-col cols="12">
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" v-bind:key="error">
          <b-alert show>{{error.message}}</b-alert>
        </li>
      </ul>
      <h3>
        Book List
        <b-link @click="logout()">(Logout)</b-link> 
        <b-btn size="sm" @click.stop="create">Create</b-btn>
      </h3>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "BookList",
  data() {
    return {
      fields: {
        actions: { label: "Action", class: "text-center" },
        id: { label: "id", sortable: true, class: "text-center" },
        name: { label: "Name", sortable: true, class: "text-center" },
        created_at: { label: "Created", sortable: true, class: "text-center" },
        updated_at: { label: "Updated", sortable: true, class: "text-center" }
      },
      books: [],
      errors: [],
      access_token:""
    };
  },
  created() {
    this.access_token = localStorage.getItem("jwtToken");
    axios.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}` 
    // unsure why I could not get this to work.. axios.defaults.port=6035;
    axios
      // no:     .get(`http://${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/products.json`)
      // works:  .get(`http://192.168.88.60:6035/products.json`)
      .get(`${process.env.VUE_APP_BACKEND_URL}/products.json`)
      .then(response => {
        this.books = response.data;
      })
      .catch(e => {
        this.errors.push(e);
        if (e.response.status === 401) {
          this.$router.push({
            name: "Login"
          });
        }
      });
  },
  methods: {
    create() {
      this.$router.push({ name: "BookCreate"  });
    },
    details(book) {
      this.$router.push({
        name: "ShowBook",
        params: { id: book._id }
      });
    },
    logout() {
      localStorage.removeItem("jwtToken");
      this.$router.push({
        name: "Login"
      });
    }
  }
};
</script>
