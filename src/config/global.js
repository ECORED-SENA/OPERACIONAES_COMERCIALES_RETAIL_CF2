export default {
  global: {
    componenteFormativo: 'Logística comercial',
    descripcionCurso:
      'El propósito de este componente de formación en Logística comercial es ayudar a los aprendices a desarrollar su comprensión en los métodos, estrategias y técnicas para asegurar una correcta distribución de los productos que llegarán al cliente, consumidor y comprador en el Retail. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Recibo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Despacho',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Picking</i> y Packing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Envase',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Empaque',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Embalaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Unitarización ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Desunitarización',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Rotulación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Cubicaje: Concepto, peso, volumen, gravedad, medidas, conversiones',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Buenas Prácticas de Manufacturas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Normativa técnica en seguridad y salud en el trabajo',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gómez Aparicio, J. M. (2013). Gestión logística y comercial. Aravaca, Madrid, Spain: McGraw-Hill España.  ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50240?page=87.',
    },
    {
      referencia:
        'Flamarique, S. (2019). Manual de gestión de almacenes. Barcelona, Marge Books.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111434?page=20.',
    },
    {
      referencia:
        'Castellano Ramírez, A. (2015). Logística comercial internacional. Universidad del Norte. ',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/37553',
    },
    {
      referencia:
        'Flamarique, S. (2019). Manual de gestión de almacenes. Barcelona, Marge Books',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111434?page=20.',
    },
    {
      referencia:
        'Carro Lupardo, E. (2016). Preparación de pedidos (transversal) (MF1326_1). Madrid, Spain: Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51055?page=91.',
    },
    {
      referencia:
        'Soler, D. (2017). Unidades de carga en el transporte (2a. ed.). Barcelona, Spain: Marge Books. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43753?page=35.',
    },
    {
      referencia:
        'Carro Lupardo, E. (2016). Preparación de pedidos (transversal) (MF1326_1). Madrid, Spain: Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51055?page=120',
    },
  ],
  glosario: [
    {
      termino: 'Canal de distribución',
      significado:
        'Medio mediante el cual se transportan productos desde su producción, hasta el consumidor final.',
    },
    {
      termino: 'Flete',
      significado:
        'Costes o tarifas propias del servicio de traslado de mercancías, calculado a través de diferentes variables y características propias de la carga.',
    },
    {
      termino: 'Gestión de almacén',
      significado:
        'Es el proceso que unifica todas las acciones a realizar en un almacén y que están orientadas al flujo de los artículos en la misma y a la preparación y despacho de pedidos.',
    },
    {
      termino: 'Gestión de stock',
      significado:
        'Es el proceso de gestionar las existencias de producto y su valor',
    },
    {
      termino: 'Gestión logística',
      significado:
        'Abarca los procesos desde la planificación, almacenamiento y distribución de productos o materiales, así como el manejo de datos inherentes al proceso',
    },
    {
      termino: 'Logística de abastecimiento',
      significado:
        'Unifica las funciones de diferentes departamentos que permitan una continua comunicación y alineación con los factores involucrados en el proceso.',
    },
    {
      termino: 'Logística de distribución',
      significado:
        'Comprende las actividades de expedición y distribución de los productos terminados a los distintos mercados, constituyendo un nexo entre las funciones de producción y de comercialización.',
    },
    {
      termino: 'Pallet',
      terminoHtml: '<em>Pallet</em>',
      significado:
        'Plataforma reutilizable que permite el aprovechamiento del espacio, para la organización de diferentes elementos facilitando almacenamiento y transporte. Pueden ser de diferentes medidas y materiales.',
    },
    {
      termino: 'Stock',
      terminoHtml: '<em>Stock</em>',
      significado:
        'Producto en existencia, disponible para el proceso de comercialización, distribución y entrega.',
    },
    {
      termino: 'Transitorio',
      significado:
        'Empresa especializada en la organización y gestión, por encargo del usuario (cargador), de la cadena de transporte de mercancías (o de parte de ella) en cualquiera de sus modos (aéreo, carretera, ferrocarril y marítimo)',
    },
    {
      termino: 'Zona de <i>picking</i>',
      significado: 'Lugar de preparación de pedidos y embalaje de producto',
    },
    {
      termino: 'Zona de <i>pallets</i>',
      significado:
        'Lugar de almacenamiento de bloques de <i>pallets</i> para su reorganización a través del <i>picking</i> o para una nueva distribución',
    },
    {
      termino: 'Zona de pesaje ',
      significado:
        'Zona para validar el peso y dimensiones de producto para tenerlo en cuenta para el medio de entrega o recepción.',
    },
    {
      termino: 'Zona franca',
      significado:
        'Lugar territorial, con delimitaciones, donde hay facilidades comerciales a través de exenciones arancelarias, de impuestos y especiales exoneraciones para la comercialización o consumo.',
    },
  ],
  complementario: [
    {
      texto:
        'Mauleón Torres, M. (2003). Sistemas de almacenaje y picking. Madrid, Spain: Ediciones Díaz de Santos. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/62786?page=239',
    },
    {
      texto:
        'Mora García, L. (2010). Gestión logística integral: Las mejores prácticas en la cadena de abastecimiento. Ecoe Ediciones.',
      tipo: 'Revista',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/29965',
    },
    {
      texto:
        'Núñez Carballosa, A., Guitart Tarrés, L., & Baraza Sánchez, X. (2014). Dirección de operaciones: Decisiones tácticas y estratégicas.',
      tipo: 'Libro',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/30102',
    },
    {
      texto:
        'Soluciones Logísticas y Aduaneras E & S (2020). Cubicaje de mercancía en contenedor',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=-3pEFK6hp2A',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor',
        centro: 'Comercio - Regional Antioquia ',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Instructora ',
        centro: 'CGTS - Regional Valle',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario La Granja – Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
