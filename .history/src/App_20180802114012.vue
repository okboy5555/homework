<template>
  <div>
    <div class="header">
        收藏房源
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
      <span>低于市场价真实可靠正常过户靠近地铁精装房源</span>
    </div>
    <div class="cell_place">
      <span>金桥 | 东二小区东二小区东二小区</span>
    </div>
    <div>
       <span>299万</span><span>2室1厅 | 66平米</span>
          <div class="aixin" v-on:click="update(item)" :class="{'active':item.active }">
         </div>
    </div>
  </div>
</div>
</van-list>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
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
        .get("/apis/housework/houseList/",{
            params:{
                city_id:11
            }
        })
        .then((response)=> {
          console.log(response.data.result.rows);
          var aa = response.data.result.rows;
            //   this.list.push(aa);
            //console.log(this.list)
            for(let i = 0;i < 10;i++){
                this.list.push(aa)
            }

        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update: function(item) {
      console.log(this.list);
      item.active = !item.active;
    }
  }
};
</script>

<style>
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
.list {
  border-top: 1px solid #999;
  height: 7rem;
}
.list .cell {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: inline-block;
  width: 30%;
  vertical-align: top;
}
.cell_content {
  display: inline-block;
  width: 65%;
  padding: 1rem;
  box-sizing: border-box;
}
.cell_place {
  color: #999;
  font-size: 12px;
}
.aixin {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: url(../assets/aixin.png) no-repeat 0 0;
  background-size: 100%;
}
.active {
  background: url(../assets/aixin2.png) no-repeat 0 0;
  background-size: 100%;
}
.cell img {
  height: 5rem;
  width: 5rem;
}
</style>  