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

.line-decot{
        position: relative;
        text-align: center;
        font-weight: 500;
        text-transform: uppercase;
    }

    .line-decot::after, .line-decot::before{
        content: '';
        position: absolute;
        width: 2em;
        height: .10em;
        background-color:#000000;
        top:0.5em
    }
    
    .line-decot::before{left:9em;}
    .line-decot::after{right:9em;}

    .underline{
        font-size: 1.4em; 
        text-align: center;
        font-weight: 500;
        letter-spacing: 1px;
        font-family: "Merriweather", serif;
        text-decoration-line: underline;
        text-underline-offset: .4em;
        text-decoration-thickness: 1px;
    }

@media (min-width: 769){
  .line-decot::after, .line-decot::before{width: 3em;}
  .line-decot::before{left:5.5em;}
  .line-decot::after{right:5.5em;}
}
</style>
