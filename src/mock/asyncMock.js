

const bbdd = [
   /*  {
      imagen: "/images/camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 1,
      cantidad: 0,
      categoria: "camisas",
      descripcion: "En las cumbres internacionales, la mayor parte de los dirigentes políticos optan por la camisa blanca ya que con ella quieren representar la máxima imagen de poder como persona y como país al que representan. Además, el color blanco es símbolo de limpieza, pulcritud, impecabilidad."
    },
    {
      imagen: "/images/pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 2,
      cantidad: 0,
      categoria: "pantalones",
      descripcion: 'los jeans que necesitas para verte genial. Están diseñados con cintura alta, y elaborados con denim stretch que se amolda a la cadera y muslos realzando tu figura. Los fabricamos y construimos con stretch de cuatro vías que levanta, mantiene y realza tu figura todo el día, todos los días. Origen: Pakistan'
    },
    {
      imagen: "/images/zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 3,
      cantidad: 0,
      categoria: "zapatos",
      descripcion: '-Artículo 1101. -Zapato Stiletto clásico liso con taco medio.-Material de capellada sintético. -Numeración del 35 al 41. -Plantilla confort super cómoda de gran calce.      -Disponible en color Negro y Beige.      -Base de goma.      -Taco de 10 cm de altura.      -Plataforma de 0,5 cm.      -Referencia de medidas de los talles en la publicación, donde figura guía de talles, o también foto ilustrativa en la galería de fotos del producto.'
    } ,
    {
      imagen: "/images/body.jpg",
      nombre: "bodys",
      precio: 100,
      id: 4,
      cantidad: 0,
      categoria: "camisas",
      descripcion: 'Body 100% Algodón con lycra ¡Excelente calce y confección! Talle S/M: Para menos 90 cm de busto / Talle L/XL: A partir de 90 cm de busto'
    },
    {
      imagen: "/images/billetera.webp",
      nombre: "billetera",
      precio: 200,
      id: 5,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'Dimensiones -Largo: 16 -Ancho: 2cm -Alto: 10,5  -Colores disponibles: *Rojo  *Negro  *Verde claro *Azul turquesa *Beige Gris'
    },
    {
      imagen: "/images/vincha.jpg",
      nombre: "vincha",
      precio: 300,
      id: 6,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'Vinchas de tela con elastico. Color a elegir!'
    },
    {
      imagen: "/images/riñonera.jpg",
      nombre: "riñonera",
      precio: 100,
      id: 7,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'RIÑONERA NUEVO DISEÑO EXCLUSIVO DE AGARRATE CATALINA      DISEÑO COMBINADO CON CHAROL Y CADENAS CON TIRA REGULABLE.    HERMOSO DISEÑO LANZAMIENTO TEMPORADA PRIMAVERA VERANO      Este modelo divino es ideal para salir super cómoda y con lo que necesitas para no cargar peso.'
    },
    {
      imagen: "/images/bolso.jfif",
      nombre: "bolso",
      precio: 200,
      id: 8,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'Cartera bowling PM Complementos diseño liso de cuero sintético negra con correa de hombro negra asas color negro y herrajes metal'
    },
    {
      imagen: "/images/leggins.jpg",
      nombre: "leggins",
      precio: 300,
      id: 9,
      cantidad: 0,
      categoria: "pantalones",
      descripcion: 'Calza cintura cruzada Ailyke •Adecuada para todo tipo de actividad física y uso casual. •De secado rápido y protección UV.  •Costuras reforzadas. •Ideal para toda época del año  •Son suaves y cómodas.'
    },
    {
      imagen: "/images/pulseras.png",
      nombre: "pulsera",
      precio: 100,
      id: 10,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'Nuestra línea de pulseras de Plata y Oro es de fabricación nacional elaborada con la mejor calidad y diseño del rubro. Especial para agasajar en cumpleaños, aniversarios, día de la mujer, día de los enamorados, navidad, y más.'
    },
    {
      imagen: "/images/pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 11,
      cantidad: 0,
      categoria: "pantalones",
      descripcion: 'los jeans que necesitas para verte genial. Están diseñados con cintura alta, y elaborados con denim stretch que se amolda a la cadera y muslos realzando tu figura. Los fabricamos y construimos con stretch de cuatro vías que levanta, mantiene y realza tu figura todo el día, todos los días. Origen: Pakistan'
    },
    {
      imagen: "/images/collares.jpg",
      nombre: "collares",
      precio: 300,
      id: 12,
      cantidad: 0,
      categoria: "accesorios",
      descripcion: 'ÚNICO COMPLETAMENTE DE ACERO QUIRÚRGICO Especialmente diseñado para personas alérgicas, acero 316L de primera calidad importando. No pierde color con nada!'
    }*/
  ]
  /*  setCargando(true);
           getItemById(itemId).then((resolve) => {            
            setProd(resolve);            
        }).catch(error => {
            console.log(error); 
        }
        ).finally(() => {
            console.log('finally');
            setCargando(false)
        }); 
    }, [itemId]);*/
    

    /* if(!categoriaId)  {
    getBbdd().then((resolve) => {
      setItems(resolve);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setCargando(false);
    });
  } else {
    getBbddByCategoria(categoriaId).then((resolve) => {
      setItems(resolve);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setCargando(false);
    });
  } */

/* export const getBbdd = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bbdd);
    }, 1000);
  });
}

export const getItemById = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bbdd.find(item => item.id === Number(itemId)));
    }, 1000);
  });
}

export const getBbddByCategoria = (categoriaId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bbdd.filter(bbdd => bbdd.categoria === categoriaId));
    }, 1000);
  });
}
 */
