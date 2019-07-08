<template>
  <div>
    <div class="discover-guide">
      <ul class="nav nav-pills">
        <li role="presentation" v-for="(item,index) in guides" :key="index"
         :class="item.id==discovercurrent?'active':''"
        >
          <router-link :to="item.link">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <!-- <template id="todo">
      <div>
        <div class="song-pic">
          <div class="song-name">{{song.title}}</div>
        </div>
        <div>{{song.author}}</div>
      </div>
    </template>-->

     <router-view/>
  </div>
</template>

<script>

export default {
  name: "discover",
  data() {
    return {
      name: "123",
      discovercurrent:0,
      guides:[
        {
          name:'推荐',
          link:'/discover',
          id:0
        },
        {
          name:'排行榜',
          link:'/discover/rank',
          id:1
        },{
          name:'歌单',
          link:'/discover/list',
          id:2
        },{
          name:'主播电台',
          link:'/discover/radio',
          id:3
        },{
          name:'歌手',
          link:'/discover/singers',
          id:4
        },{
          name:'新碟上架',
          link:'/discover/new',
          id:5
        }
      ],
      songs: [
        {
          title: "蜂鸟",
          tip: "（电视剧《我们与恶的距离》主题曲）",
          srcitem: require("../resource/rec1.png"),
          id: 1,
          author: "吴青峰",
          time: "05:11",
          count: 233
        },
        {
          title: "别让我走远",
          tip: "（电视剧《我们与恶的距离》主题曲）",
          author: "林宥嘉",
          srcitem: require("../resource/rec2.png"),
          id: 2,
          time: "03:19",
          count: 412
        },
        {
          title: "小丑",
          author: "朱星杰",
          srcitem: require("../resource/rec3.png"),
          id: 3,
          time: "04:23",
          count: 77
        },
        {
          title: "就喜欢你",
          author: "董又霖",
          srcitem: require("../resource/rec4.png"),
          id: 4,
          time: "01:59",
          count: 52
        },
        {
          title: "今天的你又害得我小路乱撞了",
          author: "adan",
          srcitem: require("../resource/rec5.png"),
          id: 5,
          time: "03:44",
          count: 85
        },
        {
          title: "错过",
          tip: "（Transient Love）",
          author: "蔡佩轩",
          srcitem: require("../resource/rec6.png"),
          id: 6,
          time: "02:14",
          count: 99
        }
      ]
    };
  },
  methods: {
    testlayer: function() {
      layer.confirm(
        "您是如何看待前端开发？",
        {
          btn: ["重要", "奇葩"] //按钮
        },
        function() {
          layer.msg("的确很重要", { icon: 1 });
        },
        function() {
          layer.msg("也可以这样", {
            time: 20000, //20s后自动关闭
            btn: ["明白了", "知道了"]
          });
        }
      );
    }
  }
};
// layui.use(["carousel"], function() {
//   var carousel = layui.carousel;
//   //常规轮播
//   //执行一个轮播实例
//   carousel.render({
//     elem: "#test1",
//     width: "100%", //设置容器宽度
//     height: 200,
//     arrow: "none", //不显示箭头
//     anim: "fade" //切换动画方式
//   });
// });
</script>

<style scoped>
.discover-content {
  width: 100%;
  background: rgb(240, 239, 239);
}
.discover-guide a {
  text-decoration: none;
  margin: 0 10px;
  padding: 0 15px;
  white-space: nowrap;
}
.discover-guide {
  background: rgb(182, 15, 15);
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 8px 0;
}
.discover-guide a:hover,
.discover-guide a:focus,
.discover-guide a:active,
.discover-guide a:link,
.discover-guide a:visited {
  color: white;
}
.discover-guide a:focus {
  background: black;
}

.nav-pills > li.active > a,.nav-pills > li.active > a:link,.nav-pills > li.active > a:visited.nav-pills > li.active > a:active
.nav-pills > li.active > a:focus {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}
.nav-pills a:hover ,.nav-pills a:focus{
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

</style>
