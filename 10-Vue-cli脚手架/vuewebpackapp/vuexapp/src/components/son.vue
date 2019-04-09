<template>
  <div>
    <span>我是子组件</span> ---{{ msg }} ---{{ getNum }} <br>
    <button @click="sendMsgToParent">向父组件传递数据</button>
    <button @click="changeNum">子组件-改变状态</button>
    <button @click="changeNumAction">子组件-改变状态(action)</button>
  </div>
</template>

<script>
  export default {
    name: "parent",
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        text: '我来自子组件'
      }
    },
    methods: {
      sendMsgToParent() {
        this.$emit('handle', this.text)
      },
      changeNum() {
        this.$store.commit('decrease')
      },
      changeNumAction(context) {
        this.$store.dispatch('decreaseAction')
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
