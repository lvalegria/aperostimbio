<template>
  <div class="header sticky">

    <div class="brand-logo">
           <router-link :to="{path:'/'}"> 
            <img @click="reload" src="@/assets/logo-aperos.png" alt="logo">
          </router-link>
    </div>
    
    <div :class="['menu-cont', { 'menu-expanded': isMenuOpen }]">
      
        
        <div class="menu-icon" @click="toggleMenu">
          <img src="@/assets/boton-aperos.svg">
        </div>
    </div>
    <div :class="['submenu',{'menu-open': isMenuOpen}]">
        <ul>
            <li class="decoration-li"><router-link  @click="closeMenu" :to="{path:'/nosotros'}">Nosotros</router-link></li>
            <li class="decoration-li"><router-link  @click="closeMenu" :to="{path:'/productos'}">Productos</router-link></li>
            <li class="decoration-li"><router-link  @click="closeMenu" :to="{path:'/blog'}">Blog</router-link></li>
            <li class="decoration-li"><router-link  @click="closeMenu" :to="{path:'/contacto'}">Contacto</router-link></li>
            <li class="strong-li"><span><router-link  @click="closeMenu" :to="{path:'/autentifica-tu-apero'}">Autentifica tu apero</router-link></span></li>
            <div class="header-icons">
              <img class="ico-face-black" src="@/assets/ico-facebook-black.svg">
              <img class="ico-face-black" src="@/assets/ico-instagram-black.svg">
            </div>
            
            
        </ul>
        
    </div>
  </div>

</template>

<script>
export default {
  //name: 'Navigation',
  data(){
    return{
      isMenuOpen:false
    }
  },
  methods:{
    toggleMenu(){
      this.isMenuOpen =!this.isMenuOpen;
    },
    closeMenu(){
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scope>
  .brand-logo img{width: 55%; 
    cursor: pointer;
    position: fixed;
    z-index: 8000;
    top: 1em;
    left: 1em;
  }

  .menu-cont{
    display: flex; 
    position: fixed;
    background-color:rgba(255, 255, 255, 0.6);
    margin: .5em;
    padding: .5em 0em .5em 0em;
    border-radius: .7em;
    justify-content: right;
    z-index: 5000;
    width: 96%;
  }
  .menu-expanded{
    height: 60%;
    background-color:rgba(255, 255, 255, 1);
    transition:  .4s ease-in-out;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .submenu{
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;
    z-index: 5000;
  }

  .submenu ul{
    text-align: center;
  }
  .submenu ul li{
    list-style: none;
    padding: 7px 0px 7px 0px;
  }
  .submenu ul li a{
    text-decoration: none;
    color: black;
    font-size: 1em;
   
  }

  .menu-icon{display:block;}
  .menu-icon img{width: 4em; margin-right: .5em;}
  .menu-open {
    display: flex;
    margin-top: 1em;
  }

  

img.ico-face-black{width: 2.5em; margin: 1em 1em 0em 1em;}

@media(max-width: 321px){
  .menu-expanded{
    height: 90%;

  }

}
@media (min-width: 769px){
  .brand-logo img{
    width: 15em; 
    top: 1em;
    left: 2em;
  }

  .menu-cont{
    width: 98.5%;
    height: 4.8em;
    border-radius: 1em;
  }
  .menu-icon{display:none;}
  .submenu{
    top: 0px;
    right: 0;
    display: inline-flex;
    justify-content: right;
    flex-direction:row;

  }
  .submenu ul{display: flex; align-items: center;}
  .submenu ul li {
    display: inline-flex;
    
  }
  .submenu ul li span{
    border: 2px solid black;
    border-radius: 1em;
  }


  .submenu ul li span:hover{
    border: 2px solid rgb(255, 255, 255);
    background: rgb(255, 255, 255);
    
  }
  .submenu ul li a{
    font-family: "Merriweather", serif;
    margin: 0em 2.5em 0em 2.5em;
    font-size: .9em;
    cursor: pointer;

  }
  
  li.decoration-li:hover{
    text-decoration-line: underline;
    text-underline-offset: .4em;
    text-decoration-thickness: 1px;


  }
  li.strong-li a:hover{font-weight: 700;}
  .header-icons{padding-right: 2em ;}
  img.ico-face-black{width: 2em; margin: 0em .5em 0em .5em;
  cursor: pointer;}

 





}
</style>


