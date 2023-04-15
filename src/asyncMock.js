const products = [
  {
    id: "1",
    name: "PlayStation 1",
    price: 30000,
    category: "Plays",
    img: "/src/components/CartWidget/img/plays/play1.jpg",
    stock: 10,
    description: "Play Station 1",
  },
  {
    id: "2",
    name: "PlayStation 2",
    price: 50000,
    category: "Plays",
    img: "/src/components/CartWidget/img/plays/play2.jpg.jpg",
    stock: 10,
    description: "Play Station 2",
  },
  {
    id: "3",
    name: "PlayStation 3",
    price: 80000,
    category: "Plays",
    img: "/src/components/CartWidget/img/plays/play3.jpg.jpg",
    stock: 10,
    description: "Play Station 3",
  },
  {
    id: "4",
    name: "PlayStation 4",
    price: 150000,
    category: "Plays",
    img: "/src/components/CartWidget/img/plays/play4.jpg",
    stock: 10,
    description: "Play Station 4",
  },
  {
    id: "5",
    name: "PlayStation 5",
    price: 320000,
    category: "Plays  ",
    img: "/src/components/CartWidget/img/plays/play5.jpg.jpg",
    stock: 10,
    description: "Play Station 5",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductsById = (productsId) => {
  return new Promise ((resolve) =>{
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productsId))
    }, 500)
  })
}


