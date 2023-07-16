import { Container } from "./CurrencyFormat.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import finance from '../../utils/finance.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Coins from "../Coins";

const CurrencyFormat = (data: any) => {
  const arr: any[] = Object.values(finance.currencies);
  const cotacao = arr.filter((item: any) => item != "BRL");

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
        {cotacao.map((item: any, index: number) =>
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