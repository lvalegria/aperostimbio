<template>
    <section class="nosotros">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="caj-nosotros">
                        <h2 class="h2-nosotros"><span>NOSOTROS</span></h2>
                    
                        <p>En Colombia uno de los artículos más exclusivos en lo 
                            referente al paso fino, por su laboriosa y detallada 
                            confección a mano son los aperos de cabeza de Timbio 
                            (conocido como apero “timbiano”) los cuales se han 
                            impuesto como símbolo para los ejemplares equinos en 
                            las exposiciones de caballos de paso, de nuestro país 
                            e internacionalmente.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="donaciano">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mx-auto">
                    <div class="dona-div"><img src="@/assets/logo-negro-donaciano.svg"> </div>
                    <br>
                    <p>Donaciano nace del apero timbiano como una marca de lujo que se distingue 
                        de imitaciones y fabricación 100% a mano colombiana, 
                        garantizando durabilidad y calidad.
                    </p>

                </div>
            </div>
        </div>
       
    </section>

    <section class="imagesx5">
        <div class="cont-imgx5">
            <div class="cja-imgx5" id="img1-x5"></div>

            <div class="cja-imgx5" id="img2-x5"></div>

            <div class="cja-imgx5" id="img3-x5"></div>

            <div class="cja-imgx5" id="img4-x5"></div>

            <div class="cja-imgx5" id="img5-x5"></div>
        </div>
    </section>

    <section class="tradicion">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-md-6">
                    <h3>El apero timbiano <br>como tradición</h3>
                    <p>
                        Desde hace 40 años, en Timbío, un municipio ubicado al sur del departamento del Cauca (Colombia), se elaboran los exclusivos <strong>APEROS DE TIMBÍO.</strong> Estos se distinguen por su fabricación artesanal en cuero, caracterizada por acabados refinados que se ajustan a las exigencias de montadores y equinos.
                        <br>
                        <br>
                        A finales de los años 60, Donaciano Alegría fabricó su primera jáquima utilizando herramientas creadas por él mismo. Desde la curtiembre del cuero hasta los instrumentos complementarios para lograr los tejidos.
                        <br>
                        <br>
                        Su originalidad lo llevaron a los pequeños mercados locales como Popayán. Pero el verdadero reconocimiento empieza cuando su hijo Emiro Alegría hereda de su padre la tradición de fabricar aperos y los rediseña con nuevas característica; mejores tejidos, diferentes variedades de aperos y accesorios de calidad única.
                        <br>
                        <br>
                        Hoy en día, los APEROS DE TIMBÍO han trascendido fronteras, consolidándose en el mundo ecuestre y destacándose en exposiciones y ferias de paso fino, trocha y galope, sin perder la calidad por la cual son reconocidos.
                        <br>
                        <br>
                        Ahora, en DONACIANO®, la nueva generación del arte timbiano lleva este legado a un nuevo nivel, innovando constantemente en la fabricación de aperos exclusivos, sin dejar atrás la tradición que nos distingue.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="@/assets/nosotros-tradicion.jpg">

                </div>
            </div>
        </div>

    </section>

    <section class="tratamientos">

        <h4 class="underline">Tratamiento del cuero</h4>
        <p class="subtext">Los tejidos del apero se elaboran con cuero de chivo curtido.</p>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <swiper :navigation="true" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <img src="@/assets/nosotros-tratamiento.jpg">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/nosotros-tratamiento.jpg">
                        </swiper-slide>

                        <swiper-slide>
                            <img src="@/assets/nosotros-tratamiento.jpg">
                        </swiper-slide>
                    </swiper>

                </div>
                <div class="col-md-6">
                    
                    <p>
                        El proceso de curtiembre del cuero es un paso fundamental en la fabricación del apero timbiano.
                        <br>
                        <br>
                        Para los tejidos, se utiliza cuero de chivo, elegido por su suavidad y flexibilidad, cualidades esenciales para lograr un trenzado preciso y resistente.
                        <br>
                        <br>
                        En el caso del apero crudo, caracterizado por su distintivo color amarillo, se emplean dos tipos de cuero: bovino y de chivo, combinando sus propiedades para garantizar durabilidad y calidad en cada pieza.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="tejidos">
        <h5 class="underline">Los tejidos del apero</h5>
        <p  class="subtext">El apero timbiano tiene seis tipos de trenzado.</p>
        <div class="cont-tej">
            <div class="caj-tej">
                <div class="inf-tej">
                    <img src="@/assets/tej-alomillado.jpg">
                    <p>Alomillado</p>
                </div>

                <div class="inf-tej">
                    <img src="@/assets/tejido-tusa.jpg">
                    <p>Tusa</p>
                </div>

                <div class="inf-tej">
                    <img src="@/assets/tejido-tornillo.jpg">
                    <p>Tornillo</p>
                </div>

                

            </div>
            <div class="caj-tej">
                <div class="inf-tej">
                    <img src="@/assets/tejido-corona.jpg">
                    <p>Corona</p>
                </div>

                <div class="inf-tej">
                    <img src="@/assets/tejido-manzano.jpg">
                    <p>Manzano</p>
                </div>

                <div class="inf-tej">
                    <img src="@/assets/tejido-cordon.jpg">
                    <p>Cordón</p>
                </div>

            </div>
        </div>
    </section>

    <section class="tipos">
        <h5 class="underline">Tipos de aperos</h5>
        <p class="subtext">Contamos con variedad de aperos timbianos desde el apero tejido, jáquimas de trabajo y llaveros. </p>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <img src="@/assets/tipos-aperos.jpg">
                    <p class="tipos-p">Aperos tejidos</p>
                </div>

                <div class="col-md-4">
                    <img src="@/assets/tipos-llaveros.jpg">
                    <p class="tipos-p">Llaveros</p>
                </div>

                <div class="col-md-4">
                    <img src="@/assets/tipos-pisadores.jpg">
                    <p class="tipos-p">Pisadores</p>
                </div>
            </div>
        </div>


    </section>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Módulos de Swiper
const modules = [Pagination, Navigation]; 



</script>
<style scope>

section.nosotros{
        background-image: url("../assets/nosotros-sup.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        padding: 8em 0em 2em 0em;
        width: 100%;

}
.nosotros p{ text-align: center;}
.caj-nosotros{
    background-color:rgba(255, 255, 255, 0.8);
    border-radius: .5em;
    padding: 3em 2em 3em 2em;
}
 h2.h2-nosotros{ 
    text-align: center;   
    font-size:1.2em;
}
h2.h2-nosotros span{
    font-family: "Merriweather", serif;
    border: 2px solid black;
    border-radius: 1em;
    padding: .2em 2em .2em 2em;
}
/*****                  seccion donaciano            ********/
section.donaciano{
    padding: 4em 0em 4em 0em;
    width: 100%;
}
.dona-div{text-align: center;}
.dona-div img{
    width: 90%;
}
.donaciano p{text-align: center; padding: 0em 1em 0em 1em;}
/*****                  imagesx5            ********/

.cja-imgx5
{
    width:100%; height: 12em;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#img1-x5{
    background-image: url("../assets/nosotros-1-movil.jpg") ;
    margin: 0em .5em .5em 0em;
}

#img2-x5{
    background-image: url("../assets/nosotros-2-movil.jpg") ;
    margin: 0em .5em .5em 0em;
}

#img3-x5{
    background-image: url("../assets/nosotros-3-movil.jpg") ;
    margin: 0em .5em .5em 0em;
}

#img4-x5{
    background-image: url("../assets/nosotros-4-movil.jpg") ;
    margin: 0em .5em .5em 0em;
}

#img5-x5{
    background-image: url("../assets/nosotros-5-movil.jpg") ;
    margin: 0em .5em .5em 0em;
}
/*****                  Apero como tradicion            ********/
section.tradicion{padding: 3em 0em 2em 0em;}
.tradicion h3{font-family: "Merriweather", serif; text-align: center; line-height: 160%;} 
.tradicion img{width: 100%; margin: 1em 0em 0em 0em ;}

/*****                  Tratamiento del cuero            ********/
section.tratamientos{padding: 3em 0em 0em 0em;}
.tratamientos img{width:100%;}
p.subtext {text-align: center; padding: 0em 1em 0em 1em ;
font-size: .9em;}
/*****                  Tejidos            ********/
section.tejidos{padding: 3em 0em 3em 0em;}
.inf-tej{text-align: center;}
.inf-tej img{width: 60%;}
.inf-tej p{
    color: black;
    font-family: "Merriweather", serif;
}
/*****                  Tipos de aperos            ********/
.tipos img{width: 100%;}
p.tipos-p{font-family: "Merriweather", serif; text-align: center;
font-weight: 500;}

@media (min-width: 769px){
    section.nosotros{
        height: 40em;
    }

}
</style>