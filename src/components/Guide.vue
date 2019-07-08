<!--  -->
<template>
  <div class="header">
    <img v-bind:src="logo" />
    <div id="main">
      <ul class="nav nav-pills main-nav" >
        <li v-for="(item,index) in guides" :key="index" role="presentation"
        :class="item.id==guidecurrent?'guide-active':''"
         >
         <router-link :to="item.link">{{item.name}}</router-link>
         </li>
     
      </ul>
      <div class="inputtext">
        <img :src="search" />
        <input type="text" class="form-control" id="inputmusic" placeholder="电台/视频/音乐/用户" />
      </div>
      <button type="button" class="btn btn-default producecenter" @click="getdata">创作者中心</button>
    </div>
  </div>
</template>

<script>
import { fetch } from "../../static/util/http";
//定义全局变量
import Vue from "vue";
Vue.prototype.$fetch = fetch;
export default {
  name: "guide",
  data() {
    return {
      logo: require("../resource/cloud-logo.png"),
      search: require("../resource/search.png"),
      guidecurrent:0,
      guides:[
        {
          id:0,
          name:'发现音乐',
          link:'/'
        },{
          id:1,
          name:'我的音乐',
          link:'/mymusic'
        },
        {
          id:2,
          name:'朋友',
          link:'friend'
        },
        {
          id:3,
          name:'商城',
          link:'mall'
        },
        {
          id:4,
          name:'音乐人',
          link:'musician'
        },
        {
          id:5,
          name:'下载客户端',
          link:'download'
        }
      ]
    };
  },

  components: {},

  computed: {
   
  },

  mounted: {},

  methods: {
    getdata() {
      this.axios
        .get("http://47.93.220.8:8080/test/getTestList")
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  background: #242424;
  display: flex;
  padding: 0 100px;
}
.header img {
  height: 70px;
}
#main {
  display: flex;
  align-items: center;
}
.inputtext{
  margin-left: 100px;
}
#main a {
  text-decoration: none;
  height: 70px;
  line-height: 70px;
  padding: 0 15px;
  white-space: nowrap;
  position: relative;
}
.main-nav a:hover,
.main-nav a:focus,
.main-nav a:active,
.main-nav a:link,
.main-nav a:visited {
  color: white;
}
.main-nav .active{
  background: black;
}
.nav>li>a:hover {
    text-decoration: none;
    background-color: #242424;
}
#main a:focus {
  background: black;
}
.guide-active{
  background: black;
}

.guide-active::after {
  content: "◢◣";
  font-size: 8px;
  position: absolute;
  color: rgb(182, 15, 15);
  top: 87%;
  left: 50%;
  transform: translate(-10px, -5px);
}
#inputmusic {
  width: 170px;
  border-radius: 30px;
  font-size: 12px;
  padding-left: 30px;
}
.inputtext {
  position: relative;
}
.inputtext img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-10px);
}
.producecenter {
  background: #242424;
  color: white;
  border-radius: 30px;
  border-color: #555454;
  margin-left: 20px;
  font-size: 12px;
}
</style>