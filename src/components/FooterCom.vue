<template>
    <footer>
        <div class="container">
            <div class="row">

                <div class="col-md-3 mx-auto">
                    
                    <div class="log-blanco"><img src="@/assets/logo-blanco-donaciano.svg"></div>

                    <div class="autentifica"><p><span>AUTENTIFICA TU APERO</span></p></div>
                    
                    <div class="redes">
                        <div><img src="@/assets/ico-instagram.svg"></div>
                        <div><img src="@/assets/ico-facebook.svg"></div>
                    </div>
                </div>

                <div class="col-md-3">
                    <ul>
                        <li>Nosotros</li>
                        <li>Productos</li>
                        <li>Blog</li>
                        <li>Contacto</li>
                        <li>Aviso Legal</li>
                        <li>Aviso de privacidad</li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <div class="escribenos">
                        <div><img src="@/assets/ico-wasap.svg"></div>
                        <div><p><span>ESCRÍBENOS</span></p></div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>

        <div class="copy">
            <p>© Copyright DONACIANO. Todos los derechos reservados</p>
        </div>

    </footer>
</template>

<script>

</script>

<style scope>
footer { background-color: black; padding: 2em 0em 0em 0em;}
footer p{color: white;}
.log-blanco{text-align: center;}
.log-blanco img{width: 50%; margin-bottom: 1em;}
.autentifica p{text-align: center; font-weight: 700; font-size: .8em;}
.autentifica p span, .escribenos p span{border: 2px solid white; border-radius: 5em; padding: .5em 1em .5em 1em; }
.redes{display: flex; justify-content: center;}
.redes img{width: 5em; padding: 0em 1em 0em 1em;}
footer ul li{
    color: white; 
    text-decoration: none; 
    list-style: none;
    text-align: center;
    padding: .2em 0em 0em 0em;
    }
footer .escribenos{display: flex; justify-content: center; align-items: center;}
.escribenos img{width: 5em; padding-right: .7em;}
.escribenos p{text-align: center; font-weight: 700;}
.copy{background: white; margin-top: 2em;}
.copy p{font-size: .7em; color: black; text-align: center;}

@media (min-width: 769px){
    footer {padding: 6em 0em 0em 0em;}
    .copy p{font-size: .9em; padding-top: .3em;}
    footer ul li{
    text-align: left;
    }
    .autentifica p{ font-size: .7em;}
    


}
</style>