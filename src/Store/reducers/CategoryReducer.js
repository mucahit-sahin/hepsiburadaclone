import slugify from "slugify";

const categories = [
  {
    id: 1,
    name: "Elektronik",
    childs: [
      "Telefon",
      "Dizüstü Bilgisayar",
      "Tablet",
      "Masaüstü Bilgisayar",
      "Bilgisayar Bileşenleri",
    ],
  },
  {
    id: 2,
    name: "Moda",
    childs: ["Kadın Giyim", "Erkek Giyim", "Kadın Aksesuar", "Erkek Aksesuar"],
  },
  {
    id: 3,
    name: "Ev, Yaşam, Kırtasiye, Ofis",
    childs: ["Sofra & Mutfak", "Ev Gereçleri", "Mobilya", "Banyo"],
  },
  {
    id: 4,
    name: "Oto, Bahçe, Yapı Market",
    childs: ["Bahçe", "Banyo", "Elektrik ve Tesisat"],
  },
  {
    id: 5,
    name: "Anne, Bebek, Oyuncak",
    childs: ["Oyuncaklar", "Araç ve Gereç", "Bisiklet "],
  },
  {
    id: 6,
    name: "Spor, Outdoor",
    childs: [
      "Fitness - Kondisyon",
      "Spor Branşları",
      "Bebek Odası ve Güvenlik",
    ],
  },
  {
    id: 7,
    name: "Kozmetik, Kişisel Bakım",
    childs: ["Cilt Bakımı", "Güneş Bakımı"],
  },
  {
    id: 8,
    name: "Süpermarket, Pet Shop",
    childs: [
      "Deterjan ve Temizlik Ürünleri",
      "Kağıt Ürünleri",
      "İçecekler",
      "Gıda Ürünleri",
    ],
  },
  {
    id: 9,
    name: "Kitap, Müzik, Film, Hobi",
    childs: ["Kitap ve Dergi", "Hobi ve Oyun", "Müzik Enstrümanları"],
  },
];
function categoryReducer(
  state = { categories: categories, category: {} },
  action
) {
  switch (action.type) {
    case "GET_CHILD_CATEGORIES":
      return {
        ...state,
        category: categories.find((x) => slugify(x.name) === action.payload),
      };
    default:
      return state;
  }
}
export default categoryReducer;
