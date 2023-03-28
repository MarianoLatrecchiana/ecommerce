const products = [
  {
    id: "1",
    name: "PlayStation 1",
    price: 30000,
    category: "consola",
    img: "img/plays/play1.jpg",
    stock: 10,
    description: "Consola Play Station 1",
  },
  {
    id: "2",
    name: "PlayStation 2",
    price: 50000,
    category: "consola",
    img: "img / plays / play2.jpg",
    stock: 10,
    description: "Consola Play Station 2",
  },
  {
    id: "3",
    name: "PlayStation 3",
    price: 80000,
    category: "consola",
    img: "img / plays / play3.jpg",
    stock: 10,
    description: "Consola Play Station 3",
  },
  {
    id: "4",
    name: "PlayStation 4",
    price: 150000,
    category: "consola",
    img: "img / plays / play4.jpg",
    stock: 10,
    description: "Consola Play Statio 4",
  },
  {
    id: "5",
    name: "PlayStation 5",
    price: 320000,
    category: "consola",
    img: "img / plays / play5.jpg",
    stock: 10,
    description: "Consola Play Statio 5",
  },
];
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
