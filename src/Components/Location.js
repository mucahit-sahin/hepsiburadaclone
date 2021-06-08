import React from "react";
import {
  Location as LocationStyle,
  LocationModal,
  ChooseCity,
} from "../Styles/Location.Style";

const Location = () => {
  const [modal, setModal] = React.useState();
  const [chooseCity, setChooseCity] = React.useState();
  return (
    <LocationStyle modal={modal}>
      <div
        onClick={(e) => {
          setModal(!modal);
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="%23484848"
          >
            <path
              d="M12-.058c4.837 0 9.3 4.922 9.3 9.474a9.13 9.13 0 01-.23 1.986c-.55 2.443-1.997 4.96-4.205 7.754-.32.405-.844 1.03-1.392 1.674l-.3.352a285.365 285.365 0 01-1.88 2.178c-.307.373-.79.582-1.293.582-.503 0-.986-.209-1.293-.582.003.004-.928-1.063-1.88-2.178l-.3-.352a71.78 71.78 0 01-1.392-1.674c-2.208-2.794-3.655-5.311-4.204-7.754A9.072 9.072 0 012.7 9.416C2.7 4.864 7.163-.058 12-.058zm0 1.493c-3.972 0-7.8 4.221-7.8 7.98 0 .533.066 1.087.195 1.66.49 2.179 1.838 4.524 3.92 7.158.904 1.144 3.536 4.16 3.553 4.181.01.013.062.035.132.035s.122-.022.132-.035c.017-.02 2.65-3.037 3.554-4.18 2.081-2.635 3.43-4.98 3.92-7.158a7.634 7.634 0 00.194-1.66c0-3.76-3.828-7.981-7.8-7.981zm0 3.79c2.282 0 4.125 1.88 4.125 4.19 0 2.311-1.843 4.192-4.125 4.192s-4.125-1.88-4.125-4.191S9.718 5.224 12 5.224zm0 1.492c-1.445 0-2.625 1.204-2.625 2.699 0 1.494 1.18 2.698 2.625 2.698s2.625-1.204 2.625-2.698c0-1.495-1.18-2.699-2.625-2.699z"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <span>Konum</span>
          <span>
            Konum seç
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="%23ff6000"
            >
              <path
                d="M5.99 8.5a.767.767 0 01-.576-.26l-3.27-3.71a.612.612 0 01.076-.864.617.617 0 01.848.054l2.86 3.244c.03.035.083.038.118.008l.007-.008 2.86-3.244a.616.616 0 01.943.79l-.019.022-3.27 3.708a.768.768 0 01-.576.261z"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      {modal && (
        <LocationModal>
          <span>Efsane Teslimat'lı ürünleri görmek için konum seçin</span>
          <input
            type="text"
            placeholder="Şehir Seçin"
            readOnly
            onClick={() => setChooseCity(!chooseCity)}
          />
          {chooseCity && (
            <ChooseCity>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#484848"
                >
                  <path d="M14.653 13.165l5.039 5.038a1.053 1.053 0 11-1.489 1.489l-5.038-5.038a8.12 8.12 0 111.488-1.489zm-4.086.585A6.014 6.014 0 105.863 2.68a6.014 6.014 0 004.704 11.07z" />
                </svg>
                <input type="text" />
              </div>
              <div>
                <span>İstanbul</span>
                <span>Ankara</span>
                <span>İstanbul</span>
                <span>Ankara</span>
                <span>Sivas</span>
                <span>Sivas</span>
              </div>
            </ChooseCity>
          )}
        </LocationModal>
      )}
    </LocationStyle>
  );
};

export default Location;
