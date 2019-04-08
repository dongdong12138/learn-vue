<template>
  <div class="hello">
    <h3>我是 axiosapp，用来发出请求，拦截响应</h3>
    <button @click="getData">发送请求</button>
    <ul>
      <li v-for="item in items">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.$http = axios
  export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods: {
    getData() {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 1,
          limit: 10
        }
      }).then((res) => {
          this.items = res.data.data
          console.log(res.data.data)
        }).catch(function (err) {
          console.log(err)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  text-align: left;
}
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
a {
  color: #42b983;
}
</style>
