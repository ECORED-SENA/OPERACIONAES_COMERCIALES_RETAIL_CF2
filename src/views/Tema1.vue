<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Almacenamiento
    .row.mb-5
      .col-lg-8(data-aos="fade-rigth")
        p.mb-5 En estos tiempos las empresas desean tener un stock mínimo funcional en los almacenes y esto va marcado por las tendencias de producción. Al considerar las limitaciones que puede tener el espacio de almacenamiento, el costo que representan estas instalaciones, el movimiento de los productos, entre otras variables, se han ido incorporando nuevas tecnologías para garantizar un stock funcional, en óptimas condiciones y que sea dinámico en su movilidad para evitar elementos obsoletos en el mismo.
        .cajon.color-acento-contenido.bg--3-claro.p-4.mb-4
          p Un almacén bien gestionado requiere un buen registro y gestión de las existencias de los productos que en él se depositan. Es necesario fijar un volumen mínimo de productos existentes, conocer la cantidad de productos que rotan y cuando se debe solicitar, así como los costos que se generan por la realización del pedido y del almacenamiento.
      .col-lg-4(data-aos="fade-left"): img(src="@/assets/curso/0.svg")
    br
    br
    .row.mb-5.justify-content-center
      .col-lg-11
        figure.mb-5(data-aos="zoom-in-up")
          img(src="@/assets/curso/1.svg")
    h3(data-aos="fade-right") Tipos
    p.mb-5 Un Retail es una infraestructura para el acopio de productos dentro de la cadena de suministro, en tal sentido son espacios físicos que cubren el periodo entre los flujos de entrada y de salida, podríamos definir que los progresos tecnológicos han organizado una necesaria clasificación de los tipos de almacenamiento a los que se puede en función de los materiales y sus características, los siguientes tipos de almacenamiento son los más acostumbrados:
    .tarjeta.tarjeta-bg(data-aos="zoom-in-up")
      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel').p-5
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 1')
        .carousel-inner
          .carousel-item.active.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Almacenamiento de materias primas
                p Pertenece los materiales en estado puro o que no han sido empleados antes en ningún otro proceso. Las empresas procuran que se ubiquen las materias primas lo más cerca posible a la planta de producción.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/2.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Almacenamiento de productos intermedios

                p También denominados productos semielaborados, son aquellos que han sufrido modificaciones o usos anteriores, aún se encuentran en una etapa media de la producción y sirven como enlace entre los niveles iniciales de la misma y los posteriores. Deben estar disponibles de forma inmediata y las empresas los almacenan en la misma fábrica.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/3.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Almacenamiento de accesorios

                p Se trata de productos que complementan la producción o sirven de material auxiliar. 
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/4.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Almacenamiento de productos terminados
                p Las características de cada producto nos ayudan a definir bajo qué condiciones y ciclos deben almacenarse, qué cantidad de luz, la temperatura, etc. Además, la empresa debe tener en cuenta la demanda de los consumidores o clientes. El almacén debe garantizar disponibilidad constante y alta rotación del inventario.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/5.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Almacenamiento de refacciones
                p Son los artículos destinados a corregir o reparar las unidades que ya han estado en manos de los consumidores. Si bien las incidencias de este tipo son mínimas, los Retail siempre deben disponer de material en almacén para las peticiones y necesidades de último momento.
                  br
                  br
                  |El almacenamiento es una función que va mucho más allá de la labor de acopio en un Retail, detrás hay un estudio de las características de cada producto y de las condiciones de su almacenamiento.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/6.jpg")
            
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    p.mb-5 El 
      spa.color--1 
        b almacenamiento 
      |es una función que va mucho más allá de la labor de acopio en un Retail, detrás hay un estudio de las características de cada producto y de las condiciones de su almacenamiento.
    h3(data-aos="fade-right") Zonas
    p.mb-5 La zona de almacenamiento es el eje fundamental y debemos determinar el efecto, en el número y tipos de muebles, estanterías, medios de manipulación, ubicación y la colocación de los productos en los muebles o estanterías para lograr el máximo rendimiento.
      br
      br
      |Esta zona debe cumplir dos condiciones de funcionamiento:
    SlyderD.mb-5(:datos="datosSlyder")
    #t_1_1.titulo-segundo(data-aos="fade-right").mb-5
      h2 1.1  Recibo
    br
    br
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p Este es un proceso recurrente que sucede continuamente en todos los actores del proceso de almacenamiento y distribución. Para lo cual se requiere mantener una comunicación y coordinación tal entre las partes, que permitan el éxito de este proceso.
          br
          br
          |El recibo y despacho es un proceso especial, de cuidado, en donde se deben cumplir protocolos de seguridad para garantizar la preservación de los productos para dar respuestas a los usuarios finales del proceso de distribución. El mismo inicia con una orden de compra, que no es más que una solicitud formal, legal y contable donde se le especifica a un fabricante o un proveedor las características del producto solicitado, cantidad requerida y los términos y condiciones del proceso.

      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/8.svg')
    h3(data-aos="fade-right") Procedimiento
    p.mb-5 La principal función del proceso de recepción de mercancía es la de garantizar al Retail, la correcta y eficiente entrada de productos para atender las necesidades de los clientes internos y externos, a continuación, podemos hallar los siguientes:  
    .row.my-5
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar
          img(src='@/assets/curso/9.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4 Materias primas e insumos
              p Proveniente de uno o varios proveedores. En esta categoría también se deben incluir insumos como papelería, productos de aseo y consumo para las oficinas, dotaciones para los empleados, entre otros.
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar
          img(src='@/assets/curso/10.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4  Producto en proceso
              p Proveniente de una o varias plantas de producción.
      .col-md-6.col-lg.mb-5.mb-lg-0.mt-5
        .tarjeta-avatar
          img(src='@/assets/curso/11.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.rounded-0.bg-white.color-primario.w-100
            .p-4.text-center
              h4 Producto terminado
              p Proveniente de una planta de producción o de un proveedor.
    h3(data-aos="fade-right") Formatos
    p.mb-5 Consiste en documentos de reconocimiento de las operaciones en el recibo de los productos, de tal manera que se pueda conocer en cualquier momento el valor del inventario en la sala de ventas, el costo de lo vendido y la utilidad o la pérdida bruta. A continuación, veamos algunos ejemplos:
    br
    br
    //todo: Agregar los nuevos modales 
    .contenedor-modales.d-flex.p-5.justify-content-center
      a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill.mx-2.d-flex.justify-content-center(@click="modal1 = true")
        img.img1(src="@/assets/curso/25.svg" style="width: 63px")
        img.img2(src="@/assets/curso/26.svg" style="width: 63px")
        span.h4.mb-0.ms-3 Factura de venta
        .indicador--click(v-if="mostrarIndicador")
      a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill.mx-2.d-flex.justify-content-center.align-items-center(@click="modal2 = true")
        img.img1(src="@/assets/curso/27.svg" style="width: 63px")
        img.img2(src="@/assets/curso/28.svg" style="width: 63px")
        span.h4.mb-0.ms-3 Formato para la entrada y salida de materiales
        .indicador--click(v-if="mostrarIndicador")
      a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill.mx-2.d-flex.justify-content-center.align-items-center(@click="modal3 = true")
        img.img1(src="@/assets/curso/29.svg" style="width: 63px")
        img.img2(src="@/assets/curso/30.svg" style="width: 63px")
        span.h4.mb-0.ms-3 Formato de nota de remisión
        .indicador--click(v-if="mostrarIndicador")
      a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill.mx-2.d-flex.justify-content-center.align-items-center(@click="modal4 = true")
        img.img1(src="@/assets/curso/31.svg" style="width: 63px")
        img.img2(src="@/assets/curso/32.svg" style="width: 63px")
        span.h4.mb-0.ms-3 Ficha técnica de producto
        .indicador--click(v-if="mostrarIndicador")
      a.boton.color-acento-contenido.mb-5.indicador__container.rounded-pill.mx-2.d-flex.justify-content-center.align-items-center(@click="modal5 = true")
        img.img1(src="@/assets/curso/33.svg" style="width: 63px")
        img.img2(src="@/assets/curso/34.svg" style="width: 63px")
        span.h4.mb-0.ms-3 Información nutricional
        .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      div
        figure
          img(src="@/assets/curso/86.jpg")
    ModalA(:abrir-modal.sync="modal2")
      div
        figure
          img(src="@/assets/curso/87.jpg")
    ModalA(:abrir-modal.sync="modal3")
      div
        figure
          img(src="@/assets/curso/88.jpg")
    ModalA(:abrir-modal.sync="modal4")
      div
        figure
          img(src="@/assets/curso/90.jpg")
    ModalA(:abrir-modal.sync="modal5")
      div
        figure
          img(src="@/assets/curso/89.jpg")
    br
    br
    br
    br
    br
    br
    br
    br
    br
    br
    
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2  Despacho
    .tarjeta-bg2.py-3.px-4.my-5
      .row.justify-content-between.mb-3
        .col-lg-7
          p.mb-5 Un despacho se identifica con un lugar o espacio en el que una organización o un profesional desarrolla su actividad. Este proceso es llevado por parte del responsable de bodega que es el encargado de llevar los productos que entran y salen del Retail, se explica la función principal es el control de inventarios y el recibo de productos.
          h4 Procedimiento
          p El responsable de recibo se pone de acuerdo con el proveedor para asignar el día, la hora y la fecha de entrega de los productos, por eso el jefe de recibos es el encargado de organizar la logística a los recibidores para cada tipo de productos.
        .col-lg-5.contenedor-img.position-relative
          img.position-absolute(src='@/assets/curso/12.svg' style='width: 310px')
    h3(data-aos="fade-right") Preparación y despacho del pedido
    p.mb-5 Veamos los pasos para dicha preparación y despacho en sus diferentes momentos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Al iniciar")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Al iniciar
            ul.lista-ul--color
              li 
                i.vineta
                | Recibo del pedido
              li 
                i.vineta
                | Verificación del cupo de crédito
              li 
                i.vineta
                | Verificación de condiciones comerciales
              li 
                i.vineta
                | Poder garantizar (Proveedor) que el cliente tiene las certificaciones para productos de uso controlado.
              p Nota: En el caso de productos de uso controlado es importante que la orden de compra se genere por separado de los productos no controlados con el fin de  facilitar en control de entes reguladores.
          .col-lg-3: img(src='@/assets/curso/13.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Siguientes pasos")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Siguientes pasos
            ul.lista-ul--color
              li 
                i.vineta
                | Reserva de la mercancía
              li 
                i.vineta
                | Generación de la lista de Picking, con el visto bueno de la persona encargada de asegurar la calidad del despacho al cliente.
              li 
                i.vineta
                | En el caso de Operadores Logísticos, el proveedor debe enviar las instrucciones de Despacho. 
              li 
                i.vineta
                | Preparación del pedido por parte del proveedor u operador logístico utilizando los mecanismos de seguridad acordados previamente, con el fin de garantizar el despacho de lo solicitado en la calidad acordada y la facturación de cantidades iguales a las físicamente entregadas.
              
          .col-lg-3: img(src='@/assets/curso/14.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Preparación para el despacho")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Preparación para el despacho
            ul.lista-ul--color
              li 
                i.vineta
                | En el caso de despacho de cajas mixtas, estibas mixtas, Arrume de mercancía, la lista de empaque estará contenida en el Aviso de Despacho.
              li 
                i.vineta
                | Generación y envío del Aviso de Despacho hacia al cliente. Si no tiene la capacidad de generar un aviso de despacho vía el proveedor al pedir la cita debe especificar la cantidad y tipo de camiones que serán despachados para entregar la mercancía solicitada por el cliente.
              li 
                i.vineta
                p.mb-0 En los despachos de paqueteo, el proveedor debe incluir en la etiqueta de despacho (rótulo) el número de localización del punto de entrega simbolizado en código de barras. También aplica para las entregas en 
                  spam.fst-italic Cross Docking 
                  | Predistribuido.
              
          .col-lg-3: img(src='@/assets/curso/15.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Para Finalizar")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Para Finalizar
            ul.lista-ul--color
              li 
                i.vineta
                | Facturación registrando el número del sello de seguridad que lleve el vehículo al igual que el número de estibas, cajas o recipientes. Se debe tener en cuenta la posibilidad de un carrusel de sellos para entregas parciales en varios almacenes. Nota: Estos datos deben incluirse en el aviso de despacho cuando se aplica.
              li 
                i.vineta
                | Asegurar la calidad en la entrega, tanto de procesos como de productos en los cuales los industriales deben hacer uso de normas pertinentes.
              li 
                i.vineta
                | Cargue del vehículo y colocación de los sellos de seguridad o su equivalente.
              
          .col-lg-3: img(src='@/assets/curso/16.svg').m-auto
    h3(data-aos="fade-right") Transporte de la mercancía
    p.mb-5 Igual que en el paso anterior veamos los momentos de este proceso:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Al iniciar")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Al iniciar
            ul.lista-ul--color
              li 
                i.vineta
                | Debe recibir las instrucciones de transporte del generador de la carga.
              li 
                i.vineta
                | Envía la Confirmación de la Reserva e indica los datos del vehículo, del funcionario, y la cantidad y tipos de vehículos a utilizar en el despacho.
              li 
                i.vineta
                | El vehículo llega al lugar y hora pactada para recoger la mercancía.
          .col-lg-3: img(src='@/assets/curso/17.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Siguientes pasos")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Siguientes pasos
            ul.lista-ul--color
              li 
                i.vineta
                | Se hace el conteo del número de empaques y se verifica la calidad de los embalajes.
              li 
                i.vineta
                | En el caso del transporte masivo y semimasivo se colocan los sellos de seguridad teniendo en cuenta lo acordado con el cliente.
              li 
                i.vineta
                | Se recibe copia del aviso de despacho generado por el proveedor.
              li 
                i.vineta
                | Tramitar los documentos de transporte: remesas, entre otros.
          .col-lg-3: img(src='@/assets/curso/18.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Preparación para el despacho")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Preparación para el despacho
            ul.lista-ul--color
              li 
                i.vineta
                | En los casos en los que la mercancía no es despachada directamente hacia los puntos de entrega, se valida el descargue y/o cargue del camión con los avisos del despacho, haciendo lectura de los códigos de barras en la mercancía transportada. En los casos de despacho por paqueteo, el código de barras de la etiqueta de despacho (rótulo) incluye el número de localización del punto de entrega.
              li 
                i.vineta
                | Entrega las mercancías en los puntos de despacho de acuerdo con las fechas y horas pactadas.
          .col-lg-3: img(src='@/assets/curso/19.svg').m-auto
      .tarjeta.bg--1-claro.p-4(titulo="Para Finalizar")
        .row.justify-content-center.align-items-center
          .col-lg-9
            h4 Para Finalizar
            ul.lista-ul--color
              li 
                i.vineta
                | Entrega las mercancías en los puntos de despacho de acuerdo con las fechas y horas pactadas.
              li 
                i.vineta
                | Recibe los documentos firmados de la entrega y, cuando aplique, el material de intercambio (activos retornables: estibas, canastillas etc.) y las devoluciones.
              li 
                i.vineta
                | Recibe copia del aviso de recibo del cliente, y la solicitud de acciones correctivas, si es el caso.
              li 
                i.vineta
                | Envía la factura de los servicios prestados al generador de carga.
          .col-lg-3: img(src='@/assets/curso/20.svg').m-auto
    h3(data-aos="fade-right") Formatos
    p.mb-5 La orden de despacho se conforma por tres documentos principales (resumen de mercancía, planilla de entrega y las facturas de ventas), las cuales conseguimos al descargar y visualizar después de crear la orden de despacho.
    .tarjeta.tarjeta-bg2(data-aos="zoom-in-up")
      #carouselExampleIndicators2.carousel.slide.mb-5(data-bs-ride='carousel').p-5
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide')
          button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 1')
        .carousel-inner
          .carousel-item.active.py-5
            figure
              img(src='@/assets/curso/21.svg')
          .carousel-item.py-5
            figure
              img(src='@/assets/curso/22.svg')
            
            
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    h3(data-aos="fade-right") Fichas técnicas
    p.mb-5 Documentos que representan las particularidades principales, la estructura y las aplicaciones de un producto, aportando información detallada sobre los aspectos de este.
    figure(data-aos="zoom-in-up").mb-5
      img(src='@/assets/curso/23.jpg')
    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 1.3 Datos
    p.mb-5 Llamamos Big Data a la eventualidad de capturar y almacenar un volumen muy alto de datos estructurados y no estructurados. Por lo tanto, 
      b mucho más importante que el tamaño de estos datos, o el volumen, es lo que la industria del Retail puede hacer teniendo a la mano esta información.
      br
      br
      |Las empresas han organizado sistemas de gestión de datos para poder dar frente a las necesidades y requerimiento de la operación dando un manejo ético y responsable de datos de clientes.
    h3(data-aos="fade-right") Importancia y manejo responsable
    .row.mb-5 
      .col-lg-7(data-aos="fade-right")
        p.mb-5 El proceso de almacenamiento exige responsabilidad ante el manejo de la información, no solo para asegurar el proceso en sí mismo, sino también al manejar datos reales para dar respuesta a cada requerimiento, haciendo necesario un sistema de control para esa gestión.
          br
          br
          |En el proceso del centro de distribución se usan diferentes elementos para el control adecuado de mercancías como el código de barras, el GPS y el RDFI. A vez utilizan EDI (Intercambio electrónico de datos) que permite una estructuración normalizada de datos, con altos parámetros de calidad, proveyendo un intercambio estructurado de información comercial sin dar oportunidad a ambigüedades.
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p El internet ha sido un medio propicio para las transacciones de negocios, pero esto ha requerido procesos internos con mayor efectividad que den respuesta a esa crecida demanda. Esto ha producido que se tenga que manejar continuamente grandes cantidades de información de forma simultánea, que garanticen la efectividad del proceso y que permita una toma asertiva de decisiones para la consecución de un proceso eficiente, rápido y oportuno.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/24.svg')
    p.mb-5 La razón por la cual el análisis de los datos es fundamental en el Retail, como se ha venido diciendo en la cadena de suministro, es que todos los días a cada hora y minuto, innumerables productos entran y salen de la sala de ventas.
      br
      br
      |Con datos incorrectos, un Retail que hace una suposición errónea, está en condiciones de hacer más daño en el control de este, Para enfocar mejor el poder de los datos, los Retail necesita emplear un equipo interno con una excelente tecnología en la relación a los datos ampliamente.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Capacidad de almacenamiento',
        texto:
          'Se entiende al espacio o superficie total del Retail en metros cuadrados. Este dato se obtiene al adquirir la edificación, ahora bien, hay que restar los espacios no dedicados al almacenaje de mercancías: como son los baños, vestuarios, oficinas, entre otros, en cuanto a la altura máxima de la edificación. Esta se obtiene restando elementos, como los sistemas de ventilación, iluminación u otros, a la altura del techo de la bodega.',
        imagen: require('@/assets/curso/7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Facilidad para el picking ',
        texto:
          'Que es la actividad de preparación de pedidos, para despachar al Retail.',
        imagen: require('@/assets/curso/8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
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
  background-image: url(../assets/curso/bg-1.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
.tarjeta-avatar  img
    position: absolute
    left: 50%
    top: 0
    transform: translateX(-50%) translateY(-40%)
    display: block
    width: 300px
    margin: 0 auto
.contenedor-img
  img
    top: 0
    right: 0
    transform-origin: right top
    transform: translateY(-35%)
.contenedor-modales
  flex-wrap: wrap
  a.boton.color-acento-contenido.mb-5.indicador__container
    width: 400px
    min-height: 70px
    .img2
      display: none
    &:hover
      background-color: $color-acento-botones
      .h4
        color: $color-acento-contenido !important
      .img1
        display: none
      .img2
        display: block
.contenedor-img
  img
    right: 50px
</style>
