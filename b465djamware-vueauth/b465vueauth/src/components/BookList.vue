<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Book List
        <b-link @click="logout()">(Logout)</b-link> 
        <b-btn size="sm" @click.stop="create">Create</b-btn>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          <b-alert show>{{error.message}}</b-alert>
        </li>
      </ul>
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
    
    axios
      .get(`http://10.4.1.228:6036/products.json`)
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
