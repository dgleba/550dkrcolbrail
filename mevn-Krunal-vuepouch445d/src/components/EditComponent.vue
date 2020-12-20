<template>
  <div class="mainlists">
    <h4>Edit Post</h4>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Title: </label>
            <input type="text" class="form-control" v-model="mainlists.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-11">
          <div class="form-group">
            <label>Post Body: </label>
            <textarea
              class="form-control"
              v-model="mainlists.body"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
        <button
          class="btn btn-danger float-right"
          @click.prevent="deletePost(post._id);"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      mainlists: {}
    };
  },

  created_api() {
    //
    // let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    // this.axios.get(uri).then(response => {
    //   this.post = response.data;
    // });
  },
  methods: {
    updatePost_api() {
      //   let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      //   this.axios.post(uri, this.post).then(() => {
      //  this.$router.push({ name: "posts" });
      //   });
    },

    updatePost: function() {
      console.log(this.mainlists);
      this.$pouch
        .post(
          "mainlists",
          this.mainlists
          // or update each field specifically
          // , {
          // title: this.mainlists.title,
          // body: this.mainlists.body,
          // rtype: "mlist",
          // _id: this.$route.params.id,
          // _rev: this.mainlists._rev
          // }
        )
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    },
    deletePost_api(id) {
      // let uri = `http://localhost:4000/posts/delete/${id}`;
      // this.axios.delete(uri).then(response => {
      //   this.posts.splice(this.posts.indexOf(id), 1);
      // });
    },
    deletePost(id) {
      console.log("to delete.. ", this.mainlists);
      this.$pouch
        .remove("mainlists", {
          _id: this.$route.params.id,
          _rev: this.mainlists._rev
        })
        .then(() => {
          this.$router.push({ name: "posts" });
        });
    }
  },

  // Use the pouch property to configure the component to (reactively) read data from pouchdb.
  pouch: {
    // You can also specify the database dynamically (local or remote), as well as limits, skip and sort order:
    mainlists: function() {
      return {
        //database: this.selectedDatabase, // you can pass a database string or a pouchdb instance
        selector: { _id: this.$route.params.id },
        first: true
      };
      console.log(post);
    }
  }
};
</script>
