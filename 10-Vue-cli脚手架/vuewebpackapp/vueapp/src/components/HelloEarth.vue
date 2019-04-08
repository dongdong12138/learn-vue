<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ $route.params.EarthMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Hello Earth'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
