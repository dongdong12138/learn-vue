<template>
  <div>
    <span>我是父组件</span> ---{{ formSonMsg }}  ---{{ getNum }} <br>
    <button @click="changeNum">父组件-改变状态</button>
    <button @click="changeNumAction">父组件-改变状态(action)</button>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
  </div>
</template>

<script>
  import son from './son'

  export default {
    name: "parent",
    data() {
      return {
        toSonMsg: '我来自父组件',
        formSonMsg: ''
      }
    },
    components: {
      son
    },
    methods: {
      getMsgFromSon(value) {
        this.formSonMsg = value
      },
      changeNum() {
        this.$store.commit('increase')
      },
      changeNumAction() {
        this.$store.dispatch('increaseAction')
      }
    },
    computed: {
      getNum() {
        return this.$store.getters.getNum
      }
    }
  }
</script>

<style scoped>

</style>
