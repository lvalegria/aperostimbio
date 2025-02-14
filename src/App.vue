<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <FooterCom/>
  </div>
</template>

<script>

import Navigation from './components/NavegacionComp.vue';
import FooterCom from './components/FooterCom.vue';


export default {
  name:'App', components:{Navigation, FooterCom}
  
}
</script>

<style scope>
*{
  width: auto;
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: "Montserrat", serif;
  font-weight: 300;
  font-size: 1em;
  line-height: 180%;
}
</style>
