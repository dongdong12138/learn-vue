import Vue from "vue"
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(router)

export default new router({
  routes: [
    {
      name: 'HelloWorld',
      path: '/HelloWorld/:WorldMsg',
      component: HelloWorld
    },
    {
      name: 'HelloEarth',
      path: '/HelloEarth/:EarthMsg',
      component: HelloEarth
    }
  ]
})
