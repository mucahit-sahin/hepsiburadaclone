import React from "react";
import { Menu as MenuStyle, MenuItems, MenuItem } from "../Styles/Menu.Style";
import slugify from "slugify";
import { useSelector } from "react-redux";
const Menu = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <MenuStyle>
      <div>
        <MenuItems>
          {categories.map((category, index) => (
            <a href={"/category/" + slugify(category.name)} key={index}>
              <MenuItem>
                <span>{category.name}</span>
              </MenuItem>
            </a>
          ))}
        </MenuItems>
      </div>
    </MenuStyle>
  );
};

export default Menu;
