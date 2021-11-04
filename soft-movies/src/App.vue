<template>
  <div id="nav">
    <nav>
      <div class="nav-wrapper indigo darken-4">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">nav1</a></li>
          <li><a href="badges.html">nav2</a></li>
          <li><a href="collapsible.html">nav3</a></li>
        </ul>
      </div>
    </nav>
      <span v-show="$store.state.error" class="red-text"> {{$store.state.error}} </span>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
