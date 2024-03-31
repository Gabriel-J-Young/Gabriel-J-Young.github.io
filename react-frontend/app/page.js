import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Gabriel J Young</h1>

      <Image
        src="/portfoilo_pic.png"
        width={1276}
        height={831}
        className={styles['responsive-image-40em']}
      
      />
      <div className={styles.grid}>

        
        


        <a
          href="https://github.com/Gabriel-J-Young"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Git Hub
          </h2>
          <p>New and old projects</p>
        </a>

        <a
          href="https://www.linkedin.com/in/gabriel-young-ab2a1b161/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn
          </h2>
          <p>Click here to 'connect'</p>
        </a>

        <a
          href="mailto:gabrieljacksonyoung@gmail.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Email
          </h2>
          <p>Best way to contact me</p>
        </a>


      </div>
    </main>
  );
}
