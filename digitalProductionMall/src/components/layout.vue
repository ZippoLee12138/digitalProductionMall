<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <img src="../assets/logo.png"  />
        <div class="head-nav">
          <ul>
            <li>登录</li>
            <li>注册</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }  
}
</script>

<style>

.app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
}

.head-nav li{
  float: right;
}

.app-head-inner {
  display: inline-block;
}

</style>
