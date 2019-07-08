import Vue from 'vue'
import Router from 'vue-router'
import DisCover from '@/components/DisCover'
import MyMusic from '@/components/MyMusic'
import reccommend from '@/components/discover/Reccommend'
import rank from '@/components/discover/Rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'discover',
      component: DisCover,
      children:[
        {path:'/',component:reccommend},
        {path:'rank',component:rank},
      ]
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    }
  ]
})
