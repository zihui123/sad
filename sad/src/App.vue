<template>
  <nav>
    <router-link to="/material">原料廠</router-link> |
    <router-link to="/process">加工廠</router-link> |
    <router-link to="/seller">經銷商</router-link> |
    <router-link to="/customer">顧客</router-link> |
    <router-link to="/qrcode">qrcode</router-link>
  </nav>
  <router-view/>
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
