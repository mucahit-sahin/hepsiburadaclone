import React from "react";
import {
  Container,
  Logo,
  SearchBar,
  SearchIcon,
  Input,
  SearchButton,
  SearchCol,
  MyAccount,
  MyCart,
} from "../Styles/Header.Style";
import Location from "./Location";

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
              Aramaya başlamak için <strong>en az 2 karakter </strong>
              yazmalısınız
            </span>
          </div>
        </SearchCol>
        <SearchButton searchFocus={searchFocus}>ARA</SearchButton>
      </SearchBar>
      <Location />
      <MyAccount>
        <div>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <span>Giriş Yap</span>
          <span>Veya üye ol</span>
        </div>
      </MyAccount>
      <MyCart>
        <div>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <span>Sepetim</span>
      </MyCart>
    </Container>
  );
};

export default Header;
