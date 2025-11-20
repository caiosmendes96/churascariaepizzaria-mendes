import styles from '../css/header.module.css';
import Image from "next/image";
export default function Header() {
    return (
        <header className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.logoContainer}>
                <Image 
                src="/logo.png"   // coloque o nome do seu arquivo aqui!
                width={180}
                height={180}
                alt="Logo Mendes"
                className={styles.logo}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Pizzaria e Churrascaria Mendes</h1>
                <p className={styles.subtitle}>O prazer de comer bem</p>
                <p className={styles.subtitle_location}>📍 Avenida Carlos Roberto Costa, nº 892 - Bairro Veneza/Perimental - Iguatu/Ceará</p>

                <a
                href="https://instadelivery.com.br/pizzariaechurrascariamendes"
                target="_blank"
                className={styles.button}
                >
                Peça já no delivery
                </a>
            </div>
    </header>
    );
}