import React from "react";
import {
  Slider as SliderStyle,
  Header,
  Content,
  HeaderItem,
  Description,
  ImageCard,
  Button,
  SlidesRow,
  Slides,
  SlideItem,
} from "../Styles/Slider.Style";

const Slider = () => {
  // Fake Slide Data
  const slides = [
    [
      {
        smallimage:
          "http://www.engince.com.tr/Uploads/UrunResimleri/buyuk/Benigno-Yatak-Odasi-Takimi-fc3f.jpg",
        banner:
          "http://www.engince.com.tr/Uploads/UrunResimleri/buyuk/Benigno-Yatak-Odasi-Takimi-fc3f.jpg",
        description: "En rahat yataklarda 500 TL üzeri alışverişe",
        promotion: "50 TL indirim",
      },
      {
        smallimage:
          "https://images.hepsiburada.net/banners/s/0/142-80/thumbnailImage2067_20210604181811.png",
        banner:
          "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2078_20210608101735.png/format:webp",
        description: "Kulaklıklarda Büyük İndirim",
        promotion: "Süper Fiyat İndirimleri",
      },
      {
        smallimage:
          "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2112_20210606003941.png/format:webp",
        banner:
          "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2094_20210606003935.png/format:webp",
        description: "Bahçe mobilyalarında tüm indirimlere ek",
        promotion: "300 TL’ye varan fırsatlar*",
      },
    ],
    [
      {
        smallimage:
          "https://lh3.googleusercontent.com/proxy/XmtXMBqwX9BwQ8CQLjoY7KpWq4ueExH57rEHpISaN49LtsY5Q7IuefMidCxSPa43KLWhyPaaNTX3a7kWymGixZS3aNnGyIpDFAO5QZSd3N4NfWslpm1pRnCObi3yqFPIgWzofaKiEqTUrtQ5xh8ppgYCVN7MfQUhVeY",
        banner:
          "https://lh3.googleusercontent.com/proxy/XmtXMBqwX9BwQ8CQLjoY7KpWq4ueExH57rEHpISaN49LtsY5Q7IuefMidCxSPa43KLWhyPaaNTX3a7kWymGixZS3aNnGyIpDFAO5QZSd3N4NfWslpm1pRnCObi3yqFPIgWzofaKiEqTUrtQ5xh8ppgYCVN7MfQUhVeY",
        description: "En sevilen enstrumanlarda",
        promotion: "100 TL'ye Kadar İndirim",
      },
      {
        smallimage:
          "https://www.cabaitriyat.com/images/kozmetik-ve-kisisel-bakim.jpg",
        banner:
          "https://www.cabaitriyat.com/images/kozmetik-ve-kisisel-bakim.jpg",
        description: "Kişisel Bakım Ürünlerinde",
        promotion: "75 TL'ye Kadar İndirim",
      },
    ],
    [
      {
        smallimage:
          "https://lh3.googleusercontent.com/proxy/uxy4BuMQ_i5oPzMVEWRSMUAg8bFwA03saYSZCbULEQ38eWUTXDPEmJktha6Km0gLuqbhoEFBj7g6zcE_bgeO-Mz90wY9pATf",
        banner:
          "https://lh3.googleusercontent.com/proxy/uxy4BuMQ_i5oPzMVEWRSMUAg8bFwA03saYSZCbULEQ38eWUTXDPEmJktha6Km0gLuqbhoEFBj7g6zcE_bgeO-Mz90wY9pATf",
        description: "Sağlık Ürünlerinde",
        promotion: "50 TL'ye Kadar İndirim",
      },
      {
        smallimage:
          "https://cdn.dsmcdn.com/mnresize/415/622/ty50/product/media/images/20210109/1/49679920/117009577/1/1_org_zoom.jpg",
        banner:
          "https://cdn.dsmcdn.com/mnresize/415/622/ty50/product/media/images/20210109/1/49679920/117009577/1/1_org_zoom.jpg",
        description: "Atıştırmalıklarda",
        promotion: "%20'ye Varan İndirimler",
      },
    ],
  ];
  const [categories] = React.useState([
    "Bügüne Özel",
    "Kampanyalar",
    "Ayrıcalıklar",
  ]);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  return (
    <SliderStyle>
      <Header>
        {categories.map((category, index) => (
          <HeaderItem
            active={categoryIndex === index}
            onClick={() => {
              setCategoryIndex(index);
              setIndex(0);
            }}
          >
            <span>{category}</span>
          </HeaderItem>
        ))}
      </Header>
      <Content>
        <Description>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              fill="none"
            >
              <path
                d="M14.25 8.25h1.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h1.5M9 .75v10.5M5.25 4.5L9 .75l3.75 3.75"
                fill-rule="evenodd"
                stroke="%23484848"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div>
            <span>{slides[categoryIndex][index]?.description}</span>
            <span>{slides[categoryIndex][index]?.promotion}</span>
          </div>
          <Button>Acele et kaçırma</Button>
        </Description>
        <ImageCard>
          <img src={slides[categoryIndex][index]?.banner} alt="banner" />
        </ImageCard>
      </Content>
      <SlidesRow>
        <div
          onClick={() => {
            if (index !== 0) {
              setIndex(index - 1);
            } else {
              if (categoryIndex !== 0) {
                setCategoryIndex(categoryIndex - 1);
                setIndex(slides[categoryIndex].length - 1);
              }
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            stroke="%23fff"
            fill="none"
          >
            <path
              d="M15.531 8H1.47m6.561 6.682L1.47 8l6.56-6.682"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
          {index === 0 && categoryIndex !== 0 && (
            <span>{categories[categoryIndex - 1]}</span>
          )}
        </div>
        <Slides>
          {slides[categoryIndex].map((x, i) => (
            <SlideItem
              src={x.smallimage}
              onClick={() => setIndex(i)}
              active={i === index}
            />
          ))}
        </Slides>
        <div
          onClick={() => {
            if (index !== slides[categoryIndex].length - 1) {
              setIndex(index + 1);
            } else {
              if (categoryIndex !== slides[categoryIndex].length) {
                setCategoryIndex(categoryIndex + 1);
                setIndex(0);
              }
            }
          }}
        >
          {index === slides[categoryIndex].length - 1 &&
            categoryIndex !== slides.length - 1 && (
              <span>{categories[categoryIndex + 1]}</span>
            )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            stroke="%23fff"
            fill="none"
          >
            <path
              d="M1.469 8H15.53m-6.561 6.682L15.53 8 8.97 1.318"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </SlidesRow>
    </SliderStyle>
  );
};

export default Slider;
