

const bbdd = [
    {
      imagen: "/images/camisa.jpg",
      nombre: "camisa",
      precio: 100,
      id: 1,
      cantidad: 0,
      categoria: "camisas"
    },
    {
      imagen: "/images/pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 2,
      cantidad: 0,
      categoria: "pantalon"
    },
    {
      imagen: "/images/zapatos.jpg",
      nombre: "zapatos",
      precio: 300,
      id: 3,
      cantidad: 0,
      categoria: "zapatos"
    },
    {
      imagen: "/images/body.jpg",
      nombre: "bodys",
      precio: 100,
      id: 4,
      cantidad: 0,
      categoria: "camisas"
    },
    {
      imagen: "/images/billetera.webp",
      nombre: "billetera",
      precio: 200,
      id: 5,
      cantidad: 0,
      categoria: "accesorios"
    },
    {
      imagen: "/images/vincha.jpg",
      nombre: "vincha",
      precio: 300,
      id: 6,
      cantidad: 0,
      categoria: "accesorios"
    },
    {
      imagen: "/images/riñonera.jpg",
      nombre: "riñonera",
      precio: 100,
      id: 7,
      cantidad: 0,
      categoria: "accesorios"
    },
    {
      imagen: "/images/bolso.jfif",
      nombre: "bolso",
      precio: 200,
      id: 8,
      cantidad: 0,
      categoria: "accesorios"
    },
    {
      imagen: "/images/leggins.jpg",
      nombre: "leggins",
      precio: 300,
      id: 9,
      cantidad: 0,
      categoria: "pantalon"
    },
    {
      imagen: "/images/pulseras.png",
      nombre: "pulsera",
      precio: 100,
      id: 10,
      cantidad: 0,
      categoria: "accesorios"
    },
    {
      imagen: "/images/pantalon.png",
      nombre: "pantalon",
      precio: 200,
      id: 11,
      cantidad: 0,
      categoria: "pantalon"
    },
    {
      imagen: "/images/collares.jpg",
      nombre: "collares",
      precio: 300,
      id: 12,
      cantidad: 0,
      categoria: "accesorios"
    }
  ]

export const getBbdd = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(bbdd);
    }, 2000);
  });
}