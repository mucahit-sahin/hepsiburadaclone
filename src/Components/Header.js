import React from "react";
import {
  Container,
  Logo,
  SearchBar,
  SearchIcon,
  Input,
  SearchButton,
  SearchCol,
} from "../Styles/Header.Style";

const Header = () => {
  const [searchFocus, setSearchFocus] = React.useState(false);
  return (
    <Container>
      <Logo>hepsiorada</Logo>
      <SearchBar>
        <SearchCol searchFocus={searchFocus}>
          <div>
            <SearchIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#484848"
              >
                <path d="M14.653 13.165l5.039 5.038a1.053 1.053 0 11-1.489 1.489l-5.038-5.038a8.12 8.12 0 111.488-1.489zm-4.086.585A6.014 6.014 0 105.863 2.68a6.014 6.014 0 004.704 11.07z" />
              </svg>
            </SearchIcon>
            <Input
              placeholder="Ürün, kategori ve marka ara"
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
          </div>
          <div>
            <span>
              Aramaya başlamak için <strong>en az 2 karakter</strong>
              yazmalısınız
            </span>
          </div>
        </SearchCol>
        <SearchButton searchFocus={searchFocus}>ARA</SearchButton>
      </SearchBar>
    </Container>
  );
};

export default Header;
