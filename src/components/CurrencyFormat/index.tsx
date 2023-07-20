import { Container } from "./CurrencyFormat.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import Coins from "../Coins";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { CurrencyFormatProps } from "../../utils/types";

const CurrencyFormat = ({ data }: CurrencyFormatProps) => {

  const checkData = () => {
    if (data == null) {
      const cotacao = null;
      return cotacao;
    } else {
      const arr = Object.values(data?.currencies);
      const cotacao = arr.filter((item) => item != "BRL");
      return cotacao;
    }
  }

  const cotacao = checkData();

  return (
    <Container>
      <Swiper
        direction={'vertical'}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        loop={true}
        className="mySwiper"
        draggable={false}
      >
        {cotacao === null ? "Dados não encontrados" : cotacao?.map((item: any, index: number) =>
          <SwiperSlide
            draggable={false}
            key={`${item.name}${index}`}
          >
            <div className="item">
              <p>{item.name.split(" ")[0]}</p>
              <Coins valor={item.variation} />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default CurrencyFormat;