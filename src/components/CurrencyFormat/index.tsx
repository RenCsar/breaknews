import { Container } from "./CurrencyFormat.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Coins from "../Coins";

const CurrencyFormat = (data: any) => {

  const cotacao = [
    {
      name: "Dollar",
      variation: -0.002
    },
    {
      name: "Real",
      variation: -0.3
    },
    {
      name: "Euro",
      variation: -0.6
    },
    {
      name: "Zeng",
      variation: 0.1
    },
    {
      name: "Zero",
      variation: 0
    },
  ];

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
              <p>{item.name}</p>
              <Coins valor={item.variation} />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default CurrencyFormat;