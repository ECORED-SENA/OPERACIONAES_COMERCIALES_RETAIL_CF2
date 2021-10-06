<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 <i>Picking</i> y Packing
    .row.mb-5
      .col-lg-8(data-aos="fade-rigth")
        p.mb-5 Comencemos hablando sobre el <i>Picking</i>, es un proceso que sucede cuando el personal humano que forma parte del almacén de una organización prepara los pedidos realizados por el cliente. Su nombre se deriva de la palabra inglesa <i>“to pick“</i> qué significa seleccionar y no es más que eso, un conjunto de acciones destinadas al acondicionamiento de un producto pedido directamente bajo unas especificaciones por un cliente.
        .cajon.color-acento-contenido.bg--3-claro.p-4.mb-4
          p 
            b Ahora abordaremos otra definición muy importante que es el <i>Packing</i>, 
            | es una actividad que representa el embalaje, y consiste en la elaboración de los productos que se han recolectado en la fase de <i>picking</i> para ser enviados. Es decir, en llevar a cabo las tareas de empaque, embalaje o envase.
      .col-lg-4(data-aos="fade-left"): img(src="@/assets/curso/35.svg")
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 2.1 Envase
    p.mb-5 Es el recipiente que contiene el producto. Su elaboración puede ser de diferentes materiales que cumplan su función. Ésta es la de contener, proteger, mantener, facilitar su manipulación y atraer a los clientes. Las funciones estéticas del envase son muy cuidadas y tratarán, asimismo, cumplir las funciones de optimización de su transporte, facilitando la conformación de unidades de carga con su diseño. No se podrá separar al producto de dicho envase y el consumo, en la mayoría de los casos, se realiza desde él. 
    h3(data-aos="fade-right") Características y tipos
    p.mb-5 Existen muchísimos criterios según los cuales es posible clasificar los envases, nos centraremos en dos de ellos: según tipo de cierre y según material en el que se fabrican.
      br
      |Los envases por definición contienen y protegen productos, por lo que es fundamental que estén bien cerrados.
      br
      br
      |Distinguimos varios tipos de sistemas de cierre:
    TabsC.color-primario.mb-5.bg-white
      .py-3.py-md-4(titulo="Tapones")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/36.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Tapones
            p son el tipo de cierre por antonomasia. Los encontramos coronando toda clase de envases: botellas, frascos, viales, tarros, etc. Se trata de una categoría enorme, en la que hay cierres de todo tipo.
            .row.mb-3
              .col-1: img(src='@/assets/curso/37.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b Flip top: 
                  | este tipo de tapones Flip top presentan una bisagra (que puede unirse al envase mediante rosca o a presión) Está, al abrirse, deja salir el producto a través del orificio que presenta en la parte central. Este tipo de cierres puede verse sobre todo en envases para alimentación (por ejemplo, de aceites o salsas).
            .row.mb-3
              .col-1: img(src='@/assets/curso/38.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b Disc Top: 
                  |  el tapón disc top permite controlar más fácilmente la cantidad de producto que sale de él. Consiste en un disco que, al ser presionado hacia un lado, deja a la vista una abertura por la que sale el producto. Este tipo de tapón es muy habitual en productos cosméticos.
            .row.mb-3
              .col-1: img(src='@/assets/curso/39.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b De seguridad: 
                  | estos tapones cuentan con sistemas de seguridad, como cierres especiales o sellados que, además de conservar el producto intacto, dificultan su abertura, especialmente por niños. Son muy frecuentes en medicamentos.
            .row.mb-3
              .col-1: img(src='@/assets/curso/40.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b Vasito dosificador:  
                  | otro tipo de tapón muy usual en la industria farmacéutica, que sirve a la vez de vasito para dosificar el producto.

      .py-3.py-md-4(titulo="Airless")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/41.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Airless 
            p Este tipo de cierre se utiliza mucho en envases de cosmética. Su diseño permite que salga el producto en la dosis deseada y a la vez impide que entre aire, manteniendo sus condiciones intactas.
      .py-3.py-md-4(titulo="Bombas")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/42.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Bombas
            p Los cierres y dispensadores de tipo bomba también son muy frecuentes. Dentro de ellos distinguimos dos clases.
            .row.mb-3
              .col-1: img(src='@/assets/curso/43.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b Dosificadoras: 
                  |  las bombas dosificadoras liberan una cantidad determinada de producto al ser presionadas. Son habituales en envases de productos de limpieza.
            .row.mb-3
              .col-1: img(src='@/assets/curso/44.svg', alt='Texto que describa la imagen')
              .col-11
                p
                  b Pulverizadoras: 
                  | este tipo de bombas pulverizadoras se caracterizan por pulverizar una finísima capa de producto, lo que las hace muy adecuadas para la cosmética.
    p.mb-5 El material en el que se fabrican los envases es otro criterio que permite clasificarlos fácilmente. Así, encontramos:
    .row.mb-5
      .col-lg-3
        .tarjeta.bg--1-claro2.h-100.hover
          .d-flex.bg--1.h-50.justify-content-center.align-items-center.p-2.py-3
            .contenido.p-5
              img(src='@/assets/curso/45.svg', alt='Texto que describa la imagen' style="width: 94px").mb-2.m-auto
              h4.text-center Plastico
          p.text-center.p-4.mb-0  El aluminio es una elección usual, dada su ligereza.
      .col-lg-3
        .tarjeta.bg--2-claro.h-100.hover
          .d-flex.bg--2.h-50.justify-content-center.align-items-center.p-2.py-3
            .contenido.p-5
              img(src='@/assets/curso/46.svg', alt='Texto que describa la imagen' style="width: 94px").mb-2.m-auto
              h4.text-center Envases de vidrio
          p.text-center.p-4.mb-0  Históricamente ha sido uno de los más utilizados a raíz de su rigidez.
      .col-lg-3
        .tarjeta.bg--1-claro2.h-100.hover
          .d-flex.bg--1.h-50.justify-content-center.align-items-center.p-2.py-3
            .contenido.p-5
              img(src='@/assets/curso/47.svg', alt='Texto que describa la imagen' style="width: 94px").mb-2.m-auto
              h4.text-center Envases de plástico
          p.text-center.p-4.mb-0  A causa de su versatilidad, los plásticos de todo tipo son el tipo de material más habitual en el presente.
      .col-lg-3
        .tarjeta.bg--2-claro.h-100.hover
          .d-flex.bg--2.h-50.justify-content-center.align-items-center.p-2.py-3
            .contenido.p-5
              img(src='@/assets/curso/48.svg', alt='Texto que describa la imagen' style="width: 94px").mb-2.m-auto
              h4.text-center Envases de otros materiales
          p.text-center.p-4.mb-0  Aquí entrarían materiales híbridos o nuevos materiales como los bioplásticos.
    .tarjeta.tarjeta-bg2.p-5.hover.mb-5
      .col-lg-6
        p.mb-0 Es posible clasificar los envases atendiendo a infinidad de criterios: su reciclabilidad, su forma, su resistencia o rigidez, etc.
          br
          br
          |Los envases tienen múltiples funciones, que pueden agruparse entre las principalmente utilitarias y el valor añadido que aportan al producto.
    p.mb-5 Hablamos de funcionalidades utilitarias cuando nos referimos a aquellas que nos facilitan interactuar con el producto, como, por ejemplo:
    .row.mb-5.justify-content-center
      .col-lg-2
        figure(style=' height: 125px')
          img(src='@/assets/curso/49.svg' style='width: 100px ').mb-3.m-auto
        h4.text-center.mb-0 Contener el producto.
      .col-lg-2
        figure(style=' height: 125px')
          img(src='@/assets/curso/50.svg' style='width: 100px ').mb-3.m-auto
        h4.text-center.mb-0 Albergar el producto.
      .col-lg-2
        figure(style=' height: 125px')
          img(src='@/assets/curso/51.svg' style='width: 100px ').mb-3.m-auto
        h4.text-center.mb-0 Proteger sus cualidades intactas.
      .col-lg-2
        figure(style=' height: 125px')
          img(src='@/assets/curso/52.svg' style='width: 100px ').mb-3.m-auto
        h4.text-center.mb-0 Conservar el producto durante más tiempo.
      .col-lg-2
        figure(style=' height: 125px')

          img(src='@/assets/curso/53.svg' style='width: 100px ').mb-3.m-auto
        h4.text-center.mb-0 Transportar más fácilmente el producto.
    p.mb-5 Otro tipo de funciones de los envases son las que, más allá del sentido estrictamente práctico, aportan un valor añadido. Por ejemplo:
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-10
        .bg-gradient-1.px-5.py-3
          ul.lista-ul--color
            li 
              i.vineta
              | Función estética, que hace que el envase resulte más atractivo para el consumidor y lo escoja frente a otros productos similares
            li 
              i.vineta
              | Función de marketing, relacionada con cómo se vende o se publicita el producto
            li 
              i.vineta
              | Etiquetado, que incluye información de gran utilidad sobre el producto y sus características
            li 
              i.vineta
              | Información sobre la empresa y datos de contacto
    #t_2_2.titulo-segundo(data-aos="fade-right")
      h2 2.2 Empaque
    .row.mb-5.justify-content-center
      .col-lg-6(data-aos="fade-right")
        p El empaque es la acción de introducir los productos en los embalajes secundarios. Saber elegir el adecuado es importante, aunque las empresas ya suelen tener definidos los embalajes a utilizar y disponen de una gran cantidad de ellos para estas tareas. El objetivo principal será disponer el producto con una buena sujeción y protegido de golpes y vibraciones. Tendremos que intentar optimizar el espacio, es decir, empacar el máximo número de productos en un mismo embalaje manteniendo como norma cumplir el objetivo principal. Las dimensiones del embalaje seleccionado deben ayudar a optimizar el espacio de la unidad de carga final.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/54.jpg', alt='Texto que describa la imagen' style="width: 540px").mb-3
    h3 Características y Tipos
    p.mb-5 Un empaque ideal debe cumplir con 4 funciones básicas:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Contener")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-7
            h4 Contener
            p Esta es la función principal de un empaque. Usualmente, los costales y las cajas poseen indicadores de cuánto peso pueden soportar.
          .col-lg-5: img(src='@/assets/curso/55.svg' style='width: 280px').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Compatibilidad")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-7
            h4 Compatibilidad
            p En ocasiones, un empaque puede llegar a transmitir aromas o microorganismos que contaminan las propiedades de un producto, a esto se le conoce como baja compatibilidad y puede llegar a afectar el sabor y/o consistencia del producto.
          .col-lg-5: img(src='@/assets/curso/56.svg' style='width: 280px').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Retener")
        .row.justify-content-center.align-items-center
          .col-lg-7
            h4 Retener
            p El producto no debe de perder ninguno de sus atributos físicos.
          .col-lg-5: img(src='@/assets/curso/57.svg' style='width: 280px').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Práctico")
        .row.justify-content-center.align-items-.p-4
          .col-lg-7
            h4 Práctico
            p El empaque perfecto debe ser práctico. En pocas palabras, es aquel que disminuye tiempo de empaquetado porque se arma, se llena y se cierra fácil.
          .col-lg-5: img(src='@/assets/curso/58.svg' style='width: 280px').m-auto
    #t_2_3.titulo-segundo(data-aos="fade-right")
      h2 2.3 Embalaje
    p.mb-5 El embalaje es todo aquello necesario en el transcurso de acondicionar los productos para protegerlos, y/o agruparlos de manera temporal pensando en su manipulación, transporte y almacenamiento, finalmente el embalaje es el envoltorio o protección de las mercancías.
    h3(data-aos="fade-right") Características y Tipos
    .row.justify-content-center.mb-3(data-aos="zoom-in-up")
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/59.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul--color
              li 
                i.vineta
                | Tipos de embalaje primario, secundario y terciario.
              li 
                i.vineta
                | Tipos de embalaje de embalaje según su material.
              li 
                i.vineta
                | Clases de embalaje según su función.
    h3(data-aos="fade-right") Embalaje primario 
    p.mb-5 Es el que está directamente en contacto con el producto, no sólo cumple un rol de contención sino a su vez protege al mismo del exterior, convirtiéndose en la primera capa de todo producto, el mismo también se conoce como embalaje minorista o principal y también cumple una función comercial a la hora de atraer y persuadir al consumidor.
      br
      br
      |Se convierte en la primera carta de presentación de un producto, que ayuda al impulso de compra y es allí donde se puede tomar ventaja ante la competencia al presentar uno con mayor atractivo. 
      br
      br
      |Veamos a continuación algunos ejemplos:
    .row.my-5
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar.hover
          img(src='@/assets/curso/60.svg' alt='AvatarTop')
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4 El tarro de plástico de una crema hidratante
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar.hover
          img(src='@/assets/curso/61.svg' alt='AvatarTop')
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4 La lata de un refresco
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar.hover
          img(src='@/assets/curso/62.svg' alt='AvatarTop')
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4 La botella de vidrio que contiene un vino     
    p.mb-5 En definitiva, el embalaje primario podría definirse como el envoltorio pensado para constituir una unidad del punto de venta que va a adquirir un consumidor final. 
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        h4 Embalaje secundario  
        p El mismo puede cumplir con varios objetivos o funciones; como a nivel logístico, pensando en funcionalidades asociadas a la logística facilitando el almacenaje o transporte o a nivel comercial, utilizando el mismo con fines publicitarios y de exhibición, como ocurre en su uso en diferentes superficies (Ejemplo: supermercados, tiendas minoristas) En ocasiones, el embalaje secundario se superpone con el embalaje primario, e incluso con el terciario. 
          br
          br
          |Un ejemplo claro de este tipo de embalaje es la caja de cartón que permite mantener juntas varias unidades de leche formando un paquete.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/63.svg' style='width: 331px').m-auto
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        h4 Embalaje terciario
        p El mismo unifica productos que poseen embalaje de los dos niveles anteriores. Permite que se unifiquen cargas de producto de forma segura, que facilitan su manejo. Las empresas en su proceso de distribución y envíos siempre utilizan este tipo de embalaje independientemente del tipo de producto y normalmente los mismos son vistos por los consumidores finales. Siendo un ejemplo común la paletización, donde se cargan diferentes cajas de producto de forma organizada, con separadores y plástico que envuelve completamente dicha carga.
          br
          br
          |Los tres tipos de embalaje guardan una estrecha relación entre ellos, pero principalmente con los distintos eslabones de la cadena de suministro. Pero pudiendo hacer una distinción pudiendo ver una mayor relación del primario con consumidores finales y de los otros dos con el proceso llevado entre distribuidores y fabricantes.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/64.svg' style='width: 378px').m-auto
















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.bg-img
  background-image: url(../assets/curso/bg-2.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
.tarjeta.bg--1-claro2
  background-color: #9ECCF6 !important
  overflow: hidden
.tarjeta.bg--2-claro
  background-color: #C8A5DF !important
  overflow: hidden
.tarjeta-avatar  img
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%) translateY(-30%)
    display: block
    width: 250px
    margin: 0 auto
</style>
