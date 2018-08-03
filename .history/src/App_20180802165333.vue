<template>

<div>
    <div class="bdsharebuttonbox" >
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
    </div>
    <div class="header">
        收藏房源
        <div class="icon" v-on:click="paixu(paixu_type)">
            <img src="../assets/排序.png" alt="">
        </div>
    </div>
<van-list
  v-model="loading"
  :finished="finished"
  @load="onLoad"
>
<div v-for="(item) in list" :key="item.id" :title="item + ''" class="list van-hairline--top-bottom"  >
  <div class="cell">
      <img src="http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg" alt="" >
  </div>
  <div class="cell_content">
    <div>
      <span class="address">{{item.address}}</span>
    </div>
    <div class="cell_place">
      <span>{{item.block_name}} | {{item.community}}</span>
    </div>
    <div>
       <span class="price">{{item.price}}万</span><span class="room">{{item.room}} | {{item.area}}平米</span>
          <div class="aixin" v-on:click="update(item)" :class="{'active':item.type }">
         </div>
    </div>
  </div>
</div>
</van-list>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      paixu_type:1
    };
  },
  created() {
    this.setup();
  },
  methods: {
    setup() {
      window._bd_share_config = {
        common: {
          bdSnsKey: {},
          bdText: "",
          bdMini: "2",
          bdPic: "",
          bdStyle: "0",
          bdSize: "16"
        },
        share: {},
        image: {
          viewList: ["qzone", "tsina", "tqq", "renren", "weixin"],
          viewText: "分享到：",
          viewSize: "16"
        },
        selectShare: {
          bdContainerClass: null,
          bdSelectMiniList: ["qzone", "tsina", "tqq", "renren", "weixin"]
        }
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.src =
        "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" +
        ~(-new Date() / 36e5);
      document.body.appendChild(s);
    },

    onLoad() {
      //   setTimeout(() => {
      //     for (let i = 0; i < 10; i++) {
      //       this.list.push({active:true})
      //     }
      //     this.loading = false;

      //     if (this.list.length >= 40) {
      //       this.finished = true;
      //     }
      //   }, 500);
      axios
        .get("/apis/housework/collectList/", {
          params: {
            user_id: 10
          }
        })
        .then(response => {
          console.log(response.data.result.rows);
          var data = response.data.result.rows;
          var length = data.length;
          for (let i = 0; i < length; i++) {
            this.list.push(data[i]);
          }
          console.log(this.list);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update: function(item) {
      axios
        .get("/apis/housework/collect/", {
          params: {
            user_id: 10,
            house_id: item.house_id,
            type: 0
          }
        })
        .then(response => {})
        .catch(function(error) {
          console.log(error);
        });
      item.type = 0;
    },
    paixu: function(paixu_type) {
        if(paixu_type == 1){
            this.paixu_type = 0;
        }else{
            this.paixu_type = 1;
        }
         console.log(paixu_type)
      axios
        .get("/apis/housework/collectList/", {
          params: {
            user_id: 10,
            price_order: 0 //升序
          }
        })
        .then(response => {
          this.list = [];
          var data = response.data.result.rows;
          var length = data.length;
          for (let i = 0; i < length; i++) {
            this.list.push(data[i]);
          }
          console.log(this.list);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.bdsharebuttonbox {
    position: absolute;
    left:1rem;
}
.header {
  text-align: center;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 16px;
  width: 5rem;
  height: 3rem;
  line-height: 3rem;
}

.header .icon {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
}
.header .icon img {
  width: 100%;
  height: 100%;
}
.list {
  border-top: 1px solid #e6e6e6;
  height: 8.16rem;
  box-sizing: border-box;
  padding: 1.25rem;
}
.list .cell {
  width: 6.25rem;
  height: 5.625rem;
  display: inline-block;
  vertical-align: top;
}
.cell_content {
  display: inline-block;
  box-sizing: border-box;
  height: 5.625rem;
}
.cell_place {
  color: #5e5e5e;
  font-size: 12px;
  padding: 1rem 0;
}
.aixin {
  position: absolute;
  right: 1.44rem;
  bottom: 1.01rem;
  width: 1.06rem;
  height: 1.06rem;
  background: url(../assets/aixin2.png) no-repeat 0 0;
  background-size: 100%;
}
.active {
  background: url(../assets/aixin.png) no-repeat 0 0;
  background-size: 100%;
}
.cell img {
  height: 5.625rem;
  width: 6.25rem;
}
.cell_content .address {
  font-size: 16px;
}
.cell_content .price {
  font-size: 14px;
  padding-right: 0.625rem;
  color: #ff0000;
}
.cell_content .room {
  font-size: 14px;
}
</style>  