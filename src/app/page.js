import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
export default function Home() {
  return (
    <div >
      <Header />
      
      <main className={styles.main}>
        
        
         <div className={styles.background_location}>
          <h1 className={styles.title_h1}>Opções do nosso cardápio</h1>
            <div className={styles.opcoes}>

              <div className={styles.grid}>
                
                <div className={styles.card}>
                  <img src="/pizza_salgada.webp" alt="Pizzas Salgadas" className={`${styles.img} ${styles.pizza_salgada}`} />
                  <span className={styles.label}>Pizza Salgada</span>
                </div>

                <div className={styles.card}>
                  <img src="/pizza_doce.png" alt="Pizzas Doces" className={`${styles.img} ${styles.pizza_doce}`} />
                  <span className={styles.label}>Pizzas Doce</span>
                </div>

                <div className={styles.card}>
                  <img src="/calzone.png" alt="Pizzas Doces" className={`${styles.img} ${styles.calzone}`} />
                  <span className={styles.label}>Calzone</span>
                </div>

                <div className={styles.card}>
                  <img src="/churrasco.png" alt="Carnes" className={`${styles.img} ${styles.churrasco}`} />
                  <span className={styles.label}>Churrasco</span>
                </div>
                <div className={styles.card}>
                  <img src="/espetinho.webp" alt="Carnes" className={`${styles.img} ${styles.espetinho}`} />
                  <span className={styles.label}>Espetinho</span>
                </div>

                <div className={styles.card}>
                  <img src="/esfiha_salgada.png" alt="Esfihas" className={`${styles.img} ${styles.esfiha_salgada}`} />
                  <span className={styles.label}>Esfiha salgada</span>
                </div>

                <div className={styles.card}>
                  <img src="/esfiha_doce.png" alt="Esfihas" className={`${styles.img} ${styles.esfiha_doce}`} />
                  <span className={styles.label}>Esfiha doce</span>
                </div>
                <div className={styles.card}>
                  <img src="/panqueca.png" alt="Panqueca" className={`${styles.img} ${styles.panqueca}`} />
                  <span className={styles.label}>Panqueca</span>
                </div>

              </div>
            </div>
            <h1 className={styles.sub_title}>Para ver todas as opções, veja nosso cardápio!</h1>
            <h3 className={styles.sub_sub_title}>Você também pode pedir pelo delivery!</h3>
          <div>
            
          </div>
          <div className={styles.extern_callToAction}>
            <div className={styles.callToAction}>
              <a href="https://instadelivery.com.br/pizzariaechurrascariamendes" target="_blank" rel="noopener noreferrer"><h2 className={styles.title_button}>Ver cardápio digital</h2></a>
            </div>
          </div>
        </div>

        <h1 className={styles.title_h1_dark}>Nosso ambiente</h1>
        <div className={styles.internasContainer}>
          
          <img src="/interna1.jpeg" alt="Interior do restaurante" className={styles.imgInterna} />
          <img src="/interna2.jpeg" alt="Interior do restaurante" className={styles.imgInterna} />
          <img src="/location_cut.jpeg" alt="Interior do restaurante" className={styles.imgInterna} />
         </div>
        
        <div className={styles.background_funcionamento}>
          <div className={styles.horario_funcionamento}>

            <div className={styles.div_border}>
              <h2 className={styles.title_h2}>Horário de funcionamento</h2>
                <li>Domingo — 18:00 - 23:30</li>
                <li>Segunda — 18:00 - 23:30</li>
                <li>Terça — Fechado</li>
                <li>Quarta — 18:00 - 23:30</li>
                <li>Quinta — 18:00 - 23:30</li>
                <li>Sexta — 18:00 - 23:30</li>
                <li>Sábado — 18:00 - 23:30</li>
            </div>
          </div>
        </div>
        <div className={styles.background_location}>
          <div className={styles.locationSection}>
            <div className={styles.div_border}>
              <h2 className={styles.title_h1}>Nossa Localização</h2>

              <p className={styles.address}>
                📍 Avenida Carlos Roberto Costa, nº 892 - Bairro Veneza/Perimental - Iguatu/Ceará 
              </p>

              <div className={styles.mapContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.8655921558627!2d-39.30708079156704!3d-6.36616375291844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a31e1134f60bc1%3A0x8de1b577780f967!2sPizzaria%20e%20Churrascaria%20Mendes!5e0!3m2!1spt-BR!2sbr!4v1763493320382!5m2!1spt-BR!2sbr" 
                  width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  
              </div>
            </div>
        </div>
      </div>
      </main>
       <a href="https://instadelivery.com.br/pizzariaechurrascariamendes" className={styles.floating_order_button} target="_blank" rel="noopener noreferrer">
      🛒 Pedir Online
      </a>
    </div>
  );
}
