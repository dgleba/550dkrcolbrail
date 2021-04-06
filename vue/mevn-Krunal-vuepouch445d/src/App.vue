<template>
  <div class="container-fluid">
    <nav
      class="navbar navbar-expand-sm navbar-light"
      style="background-color: #cceeff ;"
    >
      <a class="navbar-brand" href="#">App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts" class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style></style>

<script>
export default {};
</script>
