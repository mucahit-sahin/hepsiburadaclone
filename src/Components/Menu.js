import React from "react";
import { Menu as MenuStyle, MenuItems, MenuItem } from "../Styles/Menu.Style";
const Menu = () => {
  const categories = [
    "Elektronik",
    "Moda",
    "Ev, Yaşam, Kırtasiye, Ofis",
    "Oto, Bahçe, Yapı Market",
    "Anne, Bebek, Oyuncak",
    "Spor, Outdoor",
    "Kozmetik, Kişisel Bakım",
    "Süpermarket, Pet Shop",
    "Kitap, Müzik, Film, Hobi",
  ];
  return (
    <MenuStyle>
      <div>
        <MenuItems>
          {categories.map((category) => (
            <MenuItem>
              <span>{category}</span>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </MenuStyle>
  );
};

export default Menu;
