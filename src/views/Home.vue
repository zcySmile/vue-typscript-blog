<template>
  <div class="home">
    <div class="title display_flex align-items_center justify-content_flex-justify">
      <img :src="img"
           width="175"
           height="37" />
      <div class="menu display_flex align-items_center">
        <div class="item"
             v-for="(item,index) in menu"
             :key="index">
          {{item}}
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { get } from '@/uitls/http'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private img: FileList = require('@/static/img/logo.png')
  private menu: string[] = ['Home', 'Pages', 'Portfolio', 'Blog', 'Shortcodes']
  private created() {
    // this.request()
  }
  private request() {
    get('name', {}, res => {
      window.console.log(res)
    })
  }
}
</script>
<style lang="less" scoped>
.home {
  .title {
    height: 108px;
    margin: 0px 100px;
  }
  .menu {
    height: 30px;
  }
  .item {
    margin-right: 35px;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
  }
  .item:after {
    content: '';
    background: url(../static/img/sprite.png) 6px 7px no-repeat;
    float: right;
    top: 5px;
    vertical-align: middle;
    width: 12px;
    height: 12px;
  }
}
</style>
