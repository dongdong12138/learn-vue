<template>
  <ul>
    <li>
      <router-link :to="{name: 'HelloWorld', params: {WorldMsg: '你好世界'}}">Hello World</router-link>
    </li>
    <li>
      <router-link :to="{name: 'HelloEarth', params: {EarthMsg: '你好地球'}}">Hello Earth</router-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>
