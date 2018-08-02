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
      <span class="address">{{item.address}}</span>
    </div>
    <div class="cell_place">
      <span>{{item.block_name}} | {{item.community}}</span>
    </div>
    <div>
       <span>{{item.price}}万</span><span>{{item.room}} | {{item.area}}平米</span>
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
        .get("/apis/housework/collectList/",{
            params:{
                user_id:10
            }
        })
        .then((response)=> {
          console.log(response.data.result.rows);
          var data = response.data.result.rows;
          var length = data.length;
            for(let i = 0;i < length;i++){
                this.list.push(data[i])
            }
            console.log(this.list)
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
  height: 8.16rem;
  box-sizing: border-box;
  padding: 1.25rem;
}
.list .cell {
  width:6.25rem;
  height: 5.625rem;
  display: inline-block;
  vertical-align: top;
}
.cell_content {
  display: inline-block;
  box-sizing: border-box;
  height: 5.625rem  ;
}
.cell_place {
  color: #999;
  font-size: 12px;
  padding: 1rem;
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
  height: 5.625rem;
  width: 6.25rem;   
}
.cell .address{
    font-size: 16px;
}
</style>  