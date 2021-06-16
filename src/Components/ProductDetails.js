import React from "react";
import {
  Content,
  Details,
  ImageBox,
  Slides,
  PreviewImages,
  ProductName,
  BrandName,
  PriceandRatings,
  AddToCardRow,
  SellerRow,
} from "../Styles/Product.Style";

const ProductDetails = () => {
  const [index, setIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const images = [
    "https://images.philips.com/is/image/PhilipsConsumer/65PUS7805_62-IMS-tr_TR?$jpglarge$&wid=1250",
    "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/110019481/110019481_1_MC/44448089.jpg",
    "https://images.samsung.com/is/image/samsung/tr-fhd-t5300-ue40t5300auxtk-frontblack-237104952?$720_576_PNG$",
  ];
  return (
    <Content>
      <ImageBox>
        <Slides>
          <button
            onClick={() => index > 0 && setIndex((index) => index - 1)}
            disabled={index === 0}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div>
            <img src={images[index]} alt="product" />
          </div>
          <button
            onClick={() =>
              index < images.length - 1 && setIndex((index) => index + 1)
            }
            disabled={index === images.length - 1}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </Slides>
        <PreviewImages active={index}>
          <button
            onClick={() => index > 0 && setIndex((index) => index - 1)}
            disabled={index === 0}
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <div>
            {images.map((img, i) => (
              <img src={img} alt="previewproduct" onClick={() => setIndex(i)} />
            ))}
          </div>
          <button
            onClick={() =>
              index < images.length - 1 && setIndex((index) => index + 1)
            }
            disabled={index === images.length - 1}
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </PreviewImages>
      </ImageBox>
      <Details>
        <ProductName>
          Reeder P13 Blue Max Lite 16 GB (Reeder Türkiye Garantili)
        </ProductName>
        <BrandName>Reeder</BrandName>
        <PriceandRatings>
          <div>
            <span>
              <span>%35</span> İndirim
            </span>
            <div>
              <span>1.699,00 TL</span>
              <span>1.400,00 TL</span>
            </div>
          </div>
        </PriceandRatings>
        <SellerRow>
          <span>Satıcı: </span>
          <span>Hepsiorada</span>
        </SellerRow>
        <AddToCardRow>
          <div>
            <button
              onClick={() =>
                quantity !== 1 && setQuantity((quantity) => quantity - 1)
              }
            >
              -
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <span>{quantity}</span>
              <span>Adet</span>
            </div>
            <button onClick={() => setQuantity((quantity) => quantity + 1)}>
              +
            </button>
          </div>
          <button>
            <i class="fas fa-shopping-cart"></i>
            <span>Sepete Ekle</span>
          </button>
        </AddToCardRow>
      </Details>
    </Content>
  );
};

export default ProductDetails;
