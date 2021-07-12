import slugify from "slugify";

const allProducts = [
  {
    name: "XAF 145 Telefon",
    images: [
      "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    price: "1500",
    brand: "XAF",
    seller: "XAFstore",
    category: "Elektronik",
  },
  {
    name: "XAF 250 Televizyon",
    images: [
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    price: "3500",
    brand: "XAF",
    seller: "XAFstore",
    category: "Elektronik",
  },
  {
    name: "XAF 123 Çamaşır Makinesi",
    images: [
      "https://images.unsplash.com/photo-1595000788115-221ad7c82611?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
    ],
    price: "2500",
    brand: "XAF",
    seller: "XAFstore",
    category: "Ev Yasam Kirtasiye Ofis",
  },
  {
    name: "XAF 658 Buzdolabı",
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    price: "3200",
    brand: "XAF",
    seller: "XAFstore",
    category: "Ev Yasam Kirtasiye Ofis",
  },
  {
    name: "Wiaomi 1500 Telefon",
    images: [
      "https://images.unsplash.com/photo-1541591708423-9001fe827349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    ],
    price: "3200",
    brand: "XAF",
    seller: "XAFstore",
    category: "Elektronik",
  },
];
function productsReducer(
  state = { allProducts: allProducts, product: null, products: [] },
  action
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: allProducts.filter((p) => p.category === action.payload),
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: allProducts.find((p) => slugify(p.name) === action.payload),
      };
    default:
      return state;
  }
}
export default productsReducer;
