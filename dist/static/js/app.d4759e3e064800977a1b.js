webpackJsonp([1],{"2LqZ":function(t,a,s){"use strict";s.d(a,"a",function(){return n}),s.d(a,"b",function(){return i});var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"header"},[t._v("\n        收藏房源\n    ")]),t._v(" "),s("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a){return s("div",{key:a.id,staticClass:"list van-hairline--top-bottom",attrs:{title:a+""}},[s("div",{staticClass:"cell"},[s("img",{attrs:{src:"http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"cell_content"},[s("div",[s("span",{staticClass:"address"},[t._v(t._s(a.address))])]),t._v(" "),s("div",{staticClass:"cell_place"},[s("span",[t._v(t._s(a.block_name)+" | "+t._s(a.community))])]),t._v(" "),s("div",[s("span",{staticClass:"price"},[t._v(t._s(a.price)+"万")]),s("span",{staticClass:"room"},[t._v(t._s(a.room)+" | "+t._s(a.area)+"平米")]),t._v(" "),s("div",{staticClass:"aixin",class:{active:a.active},on:{click:function(s){t.update(a)}}})])])])}))],1)},i=[]},M93x:function(t,a,s){"use strict";function n(t){s("bG1b")}var i=s("xJD8"),e=s("2LqZ"),o=s("XyMi"),c=n,l=Object(o.a)(i.a,e.a,e.b,!1,c,null,null);a.a=l.exports},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(s("9++/"),s("QhyB")),i=(s("OWWB"),s("1fWZ")),e=(s("i0mo"),s("Hkar")),o=s("7+uW"),c=s("M93x"),l=s("qJdI"),r=s.n(l);o.a.use(i.a).use(e.a),o.a.use(n.a),o.a.use(r.a),new o.a({el:"#app",render:function(t){return t(c.a)}})},Sji2:function(t,a){},bG1b:function(t,a){},f4F5:function(t,a){},xJD8:function(t,a,s){"use strict";var n=s("mtWM"),i=s.n(n);a.a={data:function(){return{list:[],loading:!1,finished:!1}},methods:{onLoad:function(){var t=this;i.a.get("http://api.jinxing.kfs.dev.anjuke.test/apis/housework/collectList/",{params:{user_id:10}}).then(function(a){console.log(a.data.result.rows);for(var s=a.data.result.rows,n=s.length,i=0;i<n;i++)t.list.push(s[i]);console.log(t.list)}).catch(function(t){console.log(t)})},update:function(t){console.log(this.list),t.active=!t.active}}}}},["NHnr"]);
//# sourceMappingURL=app.d4759e3e064800977a1b.js.map