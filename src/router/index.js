import Vue from 'vue'
import Router from 'vue-router'
import TaskChart from '@/components/TaskChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskChart',
      component: TaskChart
    }
  ]
})
