<template>
  <div id="app">
    <snackbar-notification />
    <v-system-bar height="30" color="#007BFF"></v-system-bar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import SnackbarNotification from '@/components/util/SnackbarNotification.vue';

export default {
  components: { SnackbarNotification },
};
</script>
