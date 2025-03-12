<template>
    <section class="home-sup" id="portada">
        
    </section>

    <section class="somos">
        <div class="container ">
            <div class="row  ">
                <div class="col-md-8 mx-auto">
                    <h1 class="line-decot">Somos</h1>
                    <p>Fabricantes del apero de cabeza timbiano para equinos, 
                        elaborado en <strong>cuero de óptima calidad.</strong> Nuestros productos 
                        se distinguen de imitaciones porque son hechos 100% a mano 
                        garantizando gran durabilidad y acabado refinado.
                    </p>
                    <br>
                    <button class="boton-line">Conoce más</button>
                </div>
              
            </div>
        </div>
    </section>

    <section class="reconocidos">
        <h2>Reconocidos por:</h2>
        <div class="display-r">

            <div class="caja-r">
                <div class="icon-r"> <img src="@/assets/icon-mas-30.svg"> </div>
                <p>+ de 30 años <br>de tradicion</p>
            </div>

            <div class="caja-r">
                <div class="icon-r"> <img src="@/assets/icon-100-porciento-cuero.svg"> </div>
                <p>100% en cuero <br>artesanalmente</p>
            </div>

            <div class="caja-r">
                <div class="icon-r"> <img src="@/assets/icon-variedad-tejidos.svg"> </div>
                <p>Variedad de tejidos</p>
            </div>

            <div class="caja-r">
                <div class="icon-r"> <img src="@/assets/icon-finos-acabados.svg"> </div>
                <p>Finos acabados</p>
            </div>

            <div class="caja-r">
                <div class="icon-r"> <img src="@/assets/icon-cabalgatas-equinas.svg"> </div>
                <p>Reconomiento en <br>cabalgatas equinas</p>
            </div>
           
        </div>
    </section>

    <section class="tejidos">

       <div class="display-tej">
            <div class="caj-tej" id="tej-der">
               
            </div>

            <div class="caj-tej " id="tej-izq">
                <h3 class="underline">Tejidos en cuero</h3>                
                <p>La materia prima usada en los tejidos de los aperos, es el cuero de cabra curtido artesanalmente.</p>
                <div class="bot-tej">
                <button class="boton-line-white">Ver más</button>
                </div>

            </div>

        </div>

        
    </section>

    <section class="detalles">
        <h4 class="h4-det underline">Detalle en los acabados</h4>
        <p>El apero timbiano destaca por sus finos tejidos y un tratamiento especial en la curtiembre del cuero. </p>
        <div class="det-display">
            <div class="det-sub-display">
                <div class="det-caj" id="det-img1"></div>
                <div class="det-caj" id="det-img2"></div>
            </div>

            <div class="det-sub-display">
                <div class="det-caj" id="det-img3"></div>
                <div class="det-caj" id="det-img4"></div>
            </div>

        </div>
    </section>

    <section class="conoce-pro">
        <h5 class="underline">Conoce nuestros productos</h5>
        <p>Contamos con variedad de aperos timbianos desde el apero tejido, jáquimas de trabajo y llaveros. </p>
        <div class="car-swiper">
        <swiper
            :slidesPerView="1"
            :spaceBetween="10"
            
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :breakpoints="{
                900:{
                slidesPerView: 3,
                spaceBetween: 0,
            },

            }"
            :modules="modules"
            class="mySwiper"
        >
        <swiper-slide v-for="user in users" :key="user.imagenPrincipal"><img class="imgswip" :src="user.imagenPrincipal"></swiper-slide>        
        </swiper>
        <br>
        <button class="boton-line">Más productos</button>
        </div>

    </section>

    <section class="blog">
        <h6 class="h5-con-p-w underline">Blog</h6>

        <div class="container">
            <div class="row">
                <div class="col-md-6"  >
                    <div class="caj-blogPrincipal" v-for="notaPrincipal in notaPrincipal" :key="notaPrincipal.titulo">
                        <div class="img-blog"><img :src="notaPrincipal.imagenPrincipal"></div>
                        <div class="text-blog">
                            <p class="title-blog">{{notaPrincipal.titulo}}</p>
                            <p>{{notaPrincipal.descripcion}}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6"  >
                    <div class="caj-blogLateral" v-for="notaLateral in notaLateral" :key="notaLateral.titulo">
                        <div class="img-blog"><img :src="notaLateral.imagenPrincipal"></div>
                        <div class="text-blog">
                            <p class="title-blog">{{notaLateral.titulo}}</p>
                            <p>{{notaLateral.descripcion}}
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <br>
        <div class="div-but-notas">
            <button class="boton-line-notas">Más notas</button>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Módulos de Swiper
const modules = [Pagination, Navigation]; 
// Variable reactiva para almacenar los productos

const users = ref([]);
const notaPrincipal =ref([]);
const notaLateral = ref([]);

const getUsers = async () => {
  try {
    const response = await fetch('/data/productos.json'); // No uses `/public/`
    if (!response.ok) throw new Error('Error al cargar los productos');
   //users.value = await response.json();
   const data = await response.json();
    users.value = data.slice(0, 5);
    console.log(data)
  } catch (error) {
    console.error(error);
  }
};


const getNotaPrincipal = async()=>{
    try{
        const response = await fetch('/data/notas.json');
        if(!response.ok) throw new Error ("Error al cargar notas");
        const dataNota = await response.json();
        notaPrincipal.value = dataNota.reverse().slice(0,1);
        console.log(dataNota);

    }catch(error){
        console.log(error)
    }
}

const getNotaLateral = async()=>{
    try{
        const response = await fetch('/data/notas.json');
        if(!response.ok) throw new Error ("Error al cargar notas");
        const dataNotaLateral = await response.json();
        notaLateral.value = dataNotaLateral.reverse().slice(1,3);
        console.log(dataNotaLateral);

    }catch(error){
        console.log(error)
    }
}


onMounted(() => {
  getUsers();
  getNotaPrincipal();
  getNotaLateral();
});

</script>


<style scope>
    /*****           HOME SUP                   ******/
    section.home-sup img{width: 100%;}
    #portada{
        background-image: url("../assets/home-sup-movil.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 20em;

    }

    /******              SOMOS               *******/
    section.somos {
        text-align: center;
        padding: 3em 0em 3em 0em;
    }
    .somos h1{
        font-family: "Merriweather", serif;
        font-size: 1.8em;
        margin-bottom: 1em;
    }

    

    button.boton-line{
        background: white;
        border: 2px solid black;
        padding: .5em 3em .5em 3em;
        font-family: "Merriweather", serif;
        font-size: 1.2em;
    }
    /*****                  RECONOCIDOS POR               *******/
    section.reconocidos{
        background-image: url("../assets/home-reconocidos.jpg");
        background-repeat: no-repeat;
        background-size: cover;

    }
    .reconocidos h2{
        font-family: "Merriweather", serif; 
        text-align: center; color: white;
        font-size: 1.2em;
        padding-top: 2em;
    }
    .display-r{display: block; padding: 0em 0em 2em 0em;}
    .icon-r {text-align: center;}
    .icon-r img{width: 35%;}
    .caja-r p{ text-align: center; color: white; font-weight: 500;}

    /*****                  Tejidos              *******/
    .display-tej{
        position: relative;
        display: block;
        width: 100%;
    }
    
    #tej-der{
        background-image: url("../assets/tejidos-movil.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width:100%;
        height:20em;
    }
    #tej-izq{ 
        background:#7C372F;
        height: 20em;
    }

    .bot-tej{justify-content: center; display: flex;}

    button.boton-line-white{
        background: #7C372F;
        border: 2px solid rgb(234, 234, 234);
        padding: .5em 3em .5em 3em;
        font-family: "Merriweather", serif;
        font-size: 1.2em;
        color: white;
    }
    .caj-tej {color: white; padding: 4em 1em 0em 1em;}

    
    .caj-tej p {text-align: center; padding-top: 1em;}

    

    /*****                  Detalles y conoce productos              *******/
    section.detalles, section.conoce-pro{
        padding: 4em 0em 0em 0em;
    }
    .detalles p, .conoce-pro p{ padding: 1em 1em 2em 1em; text-align: center;}
    .det-display {display: block;}
    .det-sub-display {display: flex;}
    .det-caj{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width:100%;
        height:24em;
    }
    #det-img1{ 
        background-image: url("../assets/det-uno-movil.jpg") ;
        margin: 0em .5em .5em 0em;
    }
    #det-img2{ background-image: url("../assets/det-dos-movil.jpg") }
    #det-img3{ 
        background-image: url("../assets/det-tres-movil.jpg");
        margin: 0em .5em .5em 0em;
    }
    #det-img4{ background-image: url("../assets/det-4-movil.jpg") }

    /*****                 slide conoce productos              *******/
    .car-swiper{text-align: center;}
    .imgswip{width: 80%;}
    /*flechas de navegacion*/

    .swiper-button-next::after,
    .swiper-button-prev::after {
    color: black; /* Color de la flecha */
    }
     /*****                 slide blog              *******/

    section.blog{
        background-image: url("../assets/movil-blog.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        margin: 4em 0em 0em 0em;
        padding: 2em 0em 2em 0em;

    }
    .h5-con-p-w{color: white;}
    
    .text-blog p{
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 0em 1em 0em 1em;
    }
    p.title-blog{ 
        color: #7C372F; 
        font-weight: 400;
        margin: 1em 0em 0em 0em ;
        font-size: 1em;

    }
    .caj-blogPrincipal,.caj-blogLateral{
        background-color: white;
        padding: .5em;
        margin: .5em 0em .5em 0em;

    }

    .caj-blogPrincipal img{
        width: 100%;

    }
    .caj-blogLateral{
        display: inline-flex;
        text-align: left;
    }
    .caj-blogLateral img{
        width: 9em;    
        height: 100%;     
        object-fit:cover; 
        margin: 0 auto; 
    }
    .caj-blogLateral p{
        text-align: left;
    }
    .div-but-notas{
        display: flex;
        justify-content: center;
    }

    button.boton-line-notas{
        background: white;
        padding: .5em 3em .5em 3em;
        font-family: "Merriweather", serif;
        font-size: 1.2em;
        border: none;
    }

    




@media (min-width: 769px){

    #portada{
        background-image: url("../assets/home-sup-desktop.jpg");
        height: 40em;
    }
    section.somos { padding: 6em 0em 6em 0em;}

    

    section.reconocidos{
        background-image: url("../assets/home-reconocidos-desktop.jpg");
        background-size: cover;
        padding: 5em 0em 8em 0em;
    }

    .reconocidos h2{text-align: left;padding: 2em 0em 0em 2em; }
    .display-r{display: flex; padding: 0em 5em 0em 5em;
    justify-content:space-around;}
    .icon-r img{width: 6em; margin-bottom: 1em;}



    .display-tej{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 100vh;
    }
    #tej-der{
        background-image: url("../assets/tejidos-desktop.jpg");
        height:43em;
    }
    #tej-izq{ background:#7C372F; height:43em;
    padding: 12em 9em 0em 9em;
    justify-content: center;}

    .det-display {display:flex;width:100%;}
    .det-sub-display {display: flex; width:100%;}
    .det-caj{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height:38em;
    }
    #det-img1{ 
        background-image: url("../assets/det-uno-desktop.jpg") ;
        margin: 0em .5em .5em 0em;
    }
    #det-img2{ background-image: url("../assets/det-dos-desktop.jpg"); 
    margin: 0em .5em .5em 0em;}
    #det-img3{ 
        background-image: url("../assets/det-tres-desktop.jpg");
        margin: 0em .5em .5em 0em;
    }
    #det-img4{ background-image: url("../assets/det-4-desktop.jpg") }

    .swiper{
        width: 95%;
        justify-content: center;
    }
    .car-swiper{text-align: center;}
    .imgswip{width: 90%;}

    section.blog{
        background-image: url("../assets/desktop-blog.jpg");
        background-size: cover;

        padding: 3em 0em 4em 0em;

    }
    .h5-con-p-w{margin-bottom: 1em;}

    .caj-blogPrincipal img{
        width: 100%;
        height: 20em;
        object-fit:cover; 
        margin: 0 auto; 

    }

    .caj-blogLateral{
        height: 13.5em;

    }

    .caj-blogLateral img{
        width: 16em;    

    }

    

}
</style>