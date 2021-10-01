<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Carga
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p Una carga es el conjunto de mercancía que se transporta en un vehículo de transporte o que se manipula mediante un elemento de manutención (carretilla, grúa, etc.)
          br
          br
          |La naturaleza, la cantidad, la forma, el volumen o el peso de las mercancías, entre otras características físicas, definen diferentes tipos de cargas. 
          br
          br
          |Estos factores condicionan en gran medida el tipo de vehículo que se ha de utilizar para su transporte, así como las necesidades de adecuar y preparar la mercancía mediante envases, embalajes o elementos de sujeción.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/65.svg')
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Unitarización
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/66.jpg')
      .col-lg-6(data-aos="fade-left")
        p Es el proceso realizado para la preservación de la integridad de cada producto, a través de una organización y agrupación de mercancía para su protección y agilización del transporte. Procura simplificar y unificar productos de tamaño menor y colocarlos sobre una base de madera, plástica o metálica. 
    #t_3_2.titulo-segundo(data-aos="fade-right")
      h2 3.2 Desunitarización
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/67.jpg')
      .col-lg-6(data-aos="fade-left")
        p Radica cuando los productos o elementos están desunidos, lo cual recibe el nombre de carga suelta que al juntarse en unidades como contenedores, como resultado de esto los medios unitarizadores son aquellos dispositivos que sirven de soporte para consolidar la carga unitaria, se las agrupa mediante un accesorio que puede ser manipulado, almacenado y transportado por un medio de transporte como una unidad de carga independiente.
    
    #t_3_3.titulo-segundo(data-aos="fade-right")
      h2 3.3 Rotulación
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/68.jpg')
      .col-lg-6(data-aos="fade-left")
        p.mb-5 Se entiende por rotulación, al código que explica la designación del producto, también se puede entender también la rotulación a los carteles o vallas publicitarias, podemos observar, ya sea de cerca o de lejos, un conjunto de letras, tamaños y formas distintas, pero que tienen legibilidad.
        h4 Normas Técnicas Internacionales 
        p Como en la mayoría de los procesos logísticos, detrás de los mismos hay un marco legal a través diferentes documentos normados y de carácter técnico con cobertura nacional e internacional. Los mismos estipulan los criterios de calidad y técnicos de todo producto o servicio y de sus procesos. Busca dar precisión y mostrar métodos de muestreo, registro, auditoría, entre otros, a través de la tecnología para la elaboración de productos u oferta de servicios pertinentes.
    #t_3_4.titulo-segundo(data-aos="fade-right")
      h2 3.4 Cubicaje: Concepto, peso, volumen, gravedad, medidas, conversiones
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/69.jpg')
      .col-lg-6(data-aos="fade-left")
        p En logística, el cubicaje se entiende como la acción de acomodar mercancías sobre palets o un medio de transporte (camiones o contenedores). El objetivo es llevar la mayor cantidad de carga y aprovechar al máximo la capacidad, respetando siempre la normatividad establecida y las limitaciones técnicas del transporte.
    #t_3_5.titulo-segundo(data-aos="fade-right")
      h2 3.5 Buenas Prácticas de Manufacturas
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/70.jpg')
      .col-lg-6(data-aos="fade-left")
        p.mb-5 Las BPM son requerimientos estandarizados de higiene en el proceso de elaboración, preparación, manipulación, envasado, almacenamiento, transporte y distribución de alimentos destinados al consumo, con el fin de que estos cumplan con condiciones sanitarias óptimas y minimizando posibles riesgos propios de los procesos.
        h4 Características 
        p Veamos las características que forman parte de las Buenas Prácticas de Manufactura: 
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="Higiene Personal").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/71.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Higiene Personal
          p Es el concepto básico del aseo, limpieza y cuidado de nuestro cuerpo con la finalidad de evitar la exposición por medio de una barrera sobre la piel con el uso de equipos de protección personal (PPE, por sus siglas en inglés) como guantes, overoles y botas.
      .row(titulo="Inocuidad de alimentos").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/72.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Inocuidad de alimentos
          p Es la ausencia a niveles seguros y tolerables de riesgo en los alimentos que puedan dañar la salud de los consumidores y ayudar a fortalecer las economías garantizando la seguridad alimentaria, ya que un mayor número de personas compran y consumen alimentos en lugares públicos.
      .row(titulo="Legislación Sanitaria").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/73.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Legislación Sanitaria
          p Es un instrumento formal que procede para regular el sentido formal de la ley teniendo el carácter de obligatoriedad cuando son formuladas conforme el debido proceso legal de creación La ley es la fuente principal de las llamadas normas jurídicas que emanan del Poder Legislativo, los decretos y reglamentos que dicta el Poder Ejecutivo, las resoluciones que expiden los ministerios y otros organismos, las decisiones administrativas dictadas por el jefe de gabinete, y otra extensa cantidad de normas jurídicas. Todas estas normas deben: provenir de autoridades; ser formuladas por escrito; contener normas generales y no individuales. La “legislación material” señala el contenido de la palabra y se la caracteriza como una norma general, abstracta y permanente, destinada a regular obligatoriamente un número indefinido de casos.
      .row(titulo="Seguridad en el trabajo").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/74.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Seguridad en el trabajo
          p Determinada como aquella conducta que trata de la prevención de las lesiones y enfermedades causadas por las situaciones de trabajo, y de la protección y promoción de la salud de los empleados.

      .row(titulo="Identificación de riesgos").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/75.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Identificación de riesgos
          p El objetivo de la identificación del riesgo es conocer los hechos que se pueden producir en la empresa y las consecuencias que puedan tener sobre los objetivos en la organización. 
      .row(titulo="Aseguramiento de la calidad").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/76.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Aseguramiento de la calidad
          p Conjunto de gestiones planificadas y sistemáticas, efectuadas en el Sistema de Calidad, que son necesarias para facilitar la confianza correcta de que un producto satisfará los requisitos dados sobre la calidad. 
      .row(titulo="Almacenamiento , transporte y distribución").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/77.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Almacenamiento , transporte y distribución
          p Proceso de administración y custodia de los materiales, mediante la aplicación de técnicas y procedimientos orientados a regular el flujo de materias primas para garantizar continuidad en procesos de producción y apoyar la gestión comercial mediante la disponibilidad permanente de mercancías y producto terminado.
      .row(titulo="Transporte").px-3
        .col-lg-2.col-md-3.col-sm-4.col-xs-5: img(src='@/assets/curso/78.svg')
        .col-lg-10.col-md-9.col-sm-8.col-xs-7
          h4 Transporte
          p Se refiere al movimiento del producto de un lugar a otro en su recorrido desde el principio de una cadena de suministro hasta el cliente. 
            br
            br
            |El transporte es un elemento fundamental de la cadena de suministro porque rara vez los productos se producen y consumen en el mismo lugar. 
            br
            br
            |El transporte es un componente significativo de los costos en que incurren la mayoría de las cadenas de suministro. El rol del transporte reviste mayor importancia en cadenas de suministros globales.
    h3(data-aos="fade-right") Aplicación de las BPM
    p.mb-5 Su aplicación va dada en todas las fases propias de la producción alimenticia desde su inicio, transformación y manipulación. Son fundamentales para mantener la inocuidad y seguridad en los productos de consumo humano, siendo procedimientos aplicables a todas estas fases, permitiendo un adecuado diseño de la infraestructura fabril y a su vez de los procesos y operaciones propias de estás fábricas hasta que el usuario final pueda hacer disfrute del producto terminado.
    #t_3_6.titulo-segundo(data-aos="fade-right")
      h2 3.6 Normativa técnica en seguridad y salud en el trabajo
    .row.mb-5
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/79.jpg')
      .col-lg-6(data-aos="fade-left")
        p Se define un Sistema General de Riesgos Laborales como el conjunto de formas, normas y procedimientos a seguir para lograr la prevención y protección de todos los trabajadores ante las enfermedades y accidentes a los que se enfrentan en su espacio laboral.
    .row.my-5.g-0
      .col-lg-6(data-aos="fade-right").mt-5
        .contenedor-i-flotante.bg-azul-claro.p-5.h-100
          .contenedor-i-flotante__icono.float1: img(src='@/assets/curso/80.svg' style='width: 97px')
          .contenedor-i-flotante__contenido
            h4 Especificaciones técnicas 
            p La norma ISO 45001 lleva la gestión de la seguridad y salud en el trabajo, también de la mejora continua en la organización, por una parte, Disminuye el índice de lesiones, enfermedades y muertes, Separan los riesgos que se encuentran relacionados con la seguridad y salud en el trabajo.
      .col-lg-6(data-aos="fade-left").mt-5
        .contenedor-i-flotante.bg-morado-claro.p-5.h-100
          .contenedor-i-flotante__icono.float2: img(src='@/assets/curso/81.svg' style='width: 97px')
          .contenedor-i-flotante__contenido
            h4 Objetivos
            p Es el cuidado de medidas y el avance de las actividades necesarias para la prevención de riesgos derivados en el trabajo, con la base en: 
            ul.lista-ul--color
              li 
                i.vineta
                | Identificar todos los peligros, evaluar y valorar los riesgos.

              li 
                i.vineta
                | Establecer los respectivos controles.

              li 
                i.vineta
                | Proteger la seguridad y salud de todos los trabajadores

              li 
                i.vineta
                | Cumplir con la normatividad nacional vigente aplicable en materia de riesgos laborales.
    h3(data-aos="fade-right") Requisitos generales
    p.mb-5 Los principales manuales que debe incluir dicho plan son:
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos="zoom-in-up")
        PasosA.color-acento-contenido.mb-5(tipo="n")
          div
            h4 Identificación de la actividad productiva de la empresa
            p La actividad productiva de una organización es la que se encarga de la elaboración de los productos para el cliente, consumidor y comprador o en beneficio para la humanidad, como pueden ser alimentos, energía, ropa, productos básicos, entre otros. 
          div
            h4 Estructura organizativa
            p Es el sistema jerárquico escogido para organizar a los empleadores en un organigrama de una organización. Gracias a ella, se abordan las formas de organización interna y administrativa.
          div
            h4 Número de departamento y de trabajadores
            p Dependiendo de cada organización el número y formas de los departamentos, secciones o divisiones será diferente.
          div
            h4 Prácticas existentes para la gestión y prevención de riesgos y accidentes
            p Se propone utilizar indicadores proactivos de esfuerzo preventivo que mejoren la percepción de la seguridad, por tal motivo las recomendaciones, observaciones, incidentes registrados y actos inseguros, entre otros, son datos que te ayudarán en la métrica y mejora de la prevención.
          div
            h4 Política y objetivos de la empresa en el área de prevención
            p Es una declaración de principios y compromisos que promuevan mejorar continuamente las condiciones de seguridad y salud dentro de la empresa, como elemento de calidad. Por tal motivo es uno de los primeros pasos o acciones de los cuales deriva o arranca todo el sistema de prevención.
    h3(data-aos="fade-right") Implementación y operación
    p.mb-5 Para comenzar con la implementación de un Sistema de Gestión de Seguridad y Salud en el Trabajo debemos seguir las siguientes etapas:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Evaluación inicial")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-4: img(src='@/assets/curso/82.svg' style='width: 280px').m-auto
          .col-lg-8
            h4 Evaluación inicial
            p Debe incluir, entre otros, los siguientes aspectos, la identificación de la normatividad vigente en materia de riesgos laborales, se incluye en los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo para los trabajadores, que se reglamentan y se aplican.
      .tarjeta.bg--1-claro.p-4(titulo="Detección y Análisis de Riesgos")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-4: img(src='@/assets/curso/82.svg' style='width: 280px').m-auto
          .col-lg-8
            h4 Detección y Análisis de Riesgos
            p Son técnicas que se emplean para evaluar los riesgos de un proyecto o un proceso. Estos métodos ayudan a tomar decisiones que permiten implementar medidas de prevención para evitar peligros potenciales o reducir su impacto. Por tal motivo no existe una única metodología de riesgos.
      .tarjeta.bg--1-claro.p-4(titulo="Definición de las políticas y los objetivos")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-4: img(src='@/assets/curso/83.svg' style='width: 280px').m-auto
          .col-lg-8
            h4 Definición de las políticas y los objetivos
            p Consiste en una declaración de principios y compromisos que promuevan mejorar continuamente las condiciones de seguridad y salud dentro de la organización, como elemento de calidad.
      .tarjeta.bg--1-claro.p-4(titulo="Capacitación")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-4: img(src='@/assets/curso/84.svg' style='width: 280px').m-auto
          .col-lg-8
            h4 Capacitación
            p Es un instrumento importante que contiene las metodologías y estrategias de formación, encaminadas a proporcionar al trabajador los conocimientos y destrezas necesarias para desempeñar su labor asegurando la prevención de accidentes y el nivel de riesgos.
      .tarjeta.bg--1-claro.p-4(titulo="Respuesta ante emergencias")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-4: img(src='@/assets/curso/85.svg' style='width: 280px').m-auto
          .col-lg-8
            h4 Respuesta ante emergencias
            p Es el modo de acción que toda compañía debe de llevar a cabo en caso de que se demuestren situaciones de riesgo, minimizando los posibles peligros que se podrían desencadenar sobre las personas y demás espacios de la organización. 


</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
export default {
  name: 'Tema3',
  components: { AcordeonB },
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
  background-image: url(../assets/curso/bg-3.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat



.bg-azul-claro
  background-color: #E8F4FE
.bg-morado-claro
  background-color: #F7EDF9
.contenedor-i-flotante

  position: relative
  &__icono
    position: absolute
    left: 6%
    top: -10%
    img
      width: 97px
      height: 97px
  &__contenido
    margin-top: 30px
.float1
  animation: float 3s infinite
.float2
  animation: float 3s infinite reverse
@keyframes float
  0%
    transform: translateY(0)
  50%
    transform: translateY(-10px)
  100%
    transform: translateY(0)
</style>
