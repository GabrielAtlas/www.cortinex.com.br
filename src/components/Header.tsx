import styles from "../styles/components/Header.module.css";

import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="#">
        <img
          src="CORTINEX-LOGO.png"
          alt="Cortinex Decorações Logo"
          className={styles.logo}
        />
      </Link>
      <nav>
        <ul className={styles.nav__links}>
          <li>
            <Link href="#">INÍCIO</Link>
          </li>
          <li>
            <Link href="#">ENCOMENDAR</Link>
          </li>
          <li>
            <Link href="#">SERVIÇOS REALIZADOS</Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles.encomendar}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=5535999116483&text=Ol%C3%A1,%20acessei%20o%20site%20www.cortinex.com.br%20e%20queria%20mais%20informa%C3%A7%C3%B5es.",
            "_blank"
          )
        }
      >
        CONTATO
      </button>
    </div>
  );
}
