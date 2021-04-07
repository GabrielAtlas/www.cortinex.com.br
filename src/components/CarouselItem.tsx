import styles from "../styles/components/CortinexCarousel.module.css";

export default function CarouselItem({ title, subtitle, source }) {
  return (
    <div className={styles.carousel__item}>
      <img src={source} alt="Imagem do slider" />
      <div className={styles.carousel__item__description}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
