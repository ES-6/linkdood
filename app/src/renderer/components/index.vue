<template lang="pug">
    .box.one
      <!--标题栏，包含最小化，固定，关闭按钮。-->
      .top-bar
        .close.button.ico(v-on:click.stop="close") &#xe648;
        .fixed.button.ico &#xe61d;
        .minimize.button.ico(v-on:click.stop="minimize") &#xe641;
        .drag
      .column
        Tab
        router-view
</template>

<script>
import { mapState } from 'vuex'
import Tab from './tab';
import MessageBox from './box/message';
const ipcRenderer = require('electron').ipcRenderer;
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'status'
  ]),
  components: {
    Tab,
    MessageBox
  },
  methods:{
    minimize(){
      //向主进程发送最小化消息
      ipcRenderer.sendSync('main-window-message', 'minimize');
    },
    close(){
      ipcRenderer.sendSync('main-window-message', 'close');
    },
  },
}
</script>

<style lang="postcss">
  .box.one{
    .display: flex;
    flex-direction: column;
    .top-bar{
      background-color: #e1dfe1;
      height: 30px;
      display: flex;
      .drag{
        height: 100%;
        width: calc(100% - 48px);
        -webkit-app-region: drag;
      }
      .button{
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin: 7px 0 7px 5px;
        color: rgba(255, 255, 255, 0);
        font-size: 0.7rem;
        line-height: 16px;
      }
      .button:hover{
        color: black;
      }
      .minimize{
        background-color: #00d742;
      }
      .fixed{
        background-color: #ffbd00;
        line-height: 17px;
      }
      .close{
        background-color: #ff3f49;
      }
    }
    .column{
      height: 100%;
      display: flex;
    }
  }
</style>
