<template>
  <div>
    <div class="discover-content">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg" />
          </div>
          <div class="carousel-item">
            <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg" />
          </div>
          <div class="carousel-item">
            <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
      <div class="dicover-songs">
        <div v-for="song in songs" :key="song.id" v-bind="song" class="song-item">
          <div class="song-pic">
            <img :src="song.srcitem" />
            <div class="song-name">{{song.count}}万</div>
          </div>
          <div class="song-title">{{song.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reccommend",
  data() {
    return {
      songs: [
        {
          title: "蜂鸟",
          tip: "（电视剧《我们与恶的距离》主题曲）",
          srcitem: require("../../resource/rec1.png"),
          id: 1,
          author: "吴青峰",
          time: "05:11",
          count: 233
        },
        {
          title: "别让我走远",
          tip: "（电视剧《我们与恶的距离》主题曲）",
          author: "林宥嘉",
          srcitem: require("../../resource/rec2.png"),
          id: 2,
          time: "03:19",
          count: 412
        },
        {
          title: "小丑",
          author: "朱星杰",
          srcitem: require("../../resource/rec3.png"),
          id: 3,
          time: "04:23",
          count: 77
        },
        {
          title: "就喜欢你",
          author: "董又霖",
          srcitem: require("../../resource/rec4.png"),
          id: 4,
          time: "01:59",
          count: 52
        },
        {
          title: "今天的你又害得我小路乱撞了",
          author: "adan",
          srcitem: require("../../resource/rec5.png"),
          id: 5,
          time: "03:44",
          count: 85
        },
        {
          title: "错过",
          tip: "（Transient Love）",
          author: "蔡佩轩",
          srcitem: require("../../resource/rec6.png"),
          id: 6,
          time: "02:14",
          count: 99
        }
      ],
      
    };
  }
};
</script>

<style>

.song-pic img {
  width: 120px;
  height: 120px;
}
.song-title {
  width: 120px;
  overflow: hidden;
  margin-top: 5px;
}
.song-pic {
  position: relative;
  width: 120px;
}
.song-name {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  color: white;
  padding-left: 10px;
  font-size: 10px;
  padding: 2px 10px;
}
.dicover-songs {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  border: 1px solid rgb(199, 197, 197);
  border-top: 0;
  border-bottom: 0;
}
.song-item {
  margin: 20px;
}
.carousel-inner img {
  width: 100%;
  height: 300px;
}
</style>
