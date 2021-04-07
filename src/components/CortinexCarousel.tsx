import { Carousel } from "react-responsive-carousel";

import styles from "../styles/components/CortinexCarousel.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselItem from "./CarouselItem";

export default function CortinexCarousel() {
  return (
    <div className={styles.main__carousel}>
      <Carousel showArrows showThumbs={false} showStatus={false} autoPlay>
        <CarouselItem
          title="Faça hoje mesmo seu orçamento conosco"
          subtitle="Faça seu orçamento e planeje a sua cortina do seu jeito!"
          source="cortina-template.jpeg"
        />
        <CarouselItem
          title="Faça hoje mesmo seu orçamento conosco"
          subtitle="Faça seu orçamento e planeje a sua cortina do seu jeito!"
          source="cortina-template.jpeg"
        />
      </Carousel>
    </div>
  );
}
