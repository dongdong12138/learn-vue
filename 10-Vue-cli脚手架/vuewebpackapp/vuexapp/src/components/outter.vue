<template>
  <div>
    我是outter组件：---{{ getNum }} <br>
    <button @click="changeNum">outter-改变状态</button>
    <button @click="changeNumAction">outter-改变状态(action)</button>
  </div>
</template>

<script>
  export default {
    name: "outter",
    computed: {
      getNum() {
        return this.$store.getters.getNum
      }
    },
    methods: {
      changeNum() {
        this.$store.commit('decrease')
      },
      changeNumAction(context) {
        this.$store.dispatch('decreaseAction')
      }
    }
  }
</script>

<style scoped>

</style>
