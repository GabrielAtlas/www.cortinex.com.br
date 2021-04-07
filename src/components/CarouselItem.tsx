import styles from "../styles/components/CarouselItem.module.css";

export default function CarouselItem({ title, subtitle, source }) {
  return (
    <div className={styles.carousel__item}>
      <div className={styles.carousel__item__description}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <img src={source} alt="Imagem do slider" />
    </div>
  );
}
