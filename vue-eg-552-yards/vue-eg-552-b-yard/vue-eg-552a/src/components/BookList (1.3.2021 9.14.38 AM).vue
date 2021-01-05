<template>
  <b-row>
    <b-col cols="12">
      <ul v-if="t_errors && t_errors.length">
        <li v-for="t_error of t_errors" v-bind:key="t_error">
          <b-alert show>{{t_error.message}}</b-alert>
        </li>
      </ul>
      <h3>
        Book List
        <b-link @click="logout()">(Logout)</b-link> 
        <b-btn size="sm" @click.stop="mcreate">Create</b-btn>
      </h3>
      <b-table striped hover :items="table_main" :table_main_fields="main_fields">
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
      main_fields: {
        actions: { label: "Action", class: "text-center" },
        id: { label: "id", sortable: true, class: "text-center" },
        name: { label: "Name", sortable: true, class: "text-center" },
        created_at: { label: "Created", sortable: true, class: "text-center" },
        updated_at: { label: "Updated", sortable: true, class: "text-center" }
      },
      table_main: [],
      t_errors: [],
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
        this.table_main = response.data;
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
    mcreate() {
      this.$router.push({ name: "BookCreate"  });
    },
    details(table_main) {
      this.$router.push({
        name: "ShowBook",
        params: { id: table_main.id }
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
