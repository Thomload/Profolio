import styles from "./thomas.module.css";

function Thomas() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Thomas Theler</h1>
        <p className={styles.text}>
          <strong>Alter:</strong> 16 Jahre
        </p>
        <p className={styles.text}>
          <strong>Sprachen:</strong> Deutsch, Französisch
        </p>
        <p className={styles.text}>
          <strong>Hobbys:</strong> Mit Freunden draussen sein, im Sommer Segeln
        </p>
        <p className={styles.text}>
          <strong>Ausbildung:</strong> 1. Lehrjahr Informatik
          Applikationsentwicklung. <br />
          Ich war bisher in 2 Projekten und arbeite derzeit seit 2 Monaten im
          dritten.
        </p>
        <strong>Projekte:</strong>
        <p className={styles.projekte}>
          <div className={styles.gali}>
            <strong>GALILEO - Starters</strong>
            <p className={styles.projektbeschr}>
              Du entwickelst Fachwissen in Frontend (HTML, CSS, TypeScript,
              Angular) und Backend (Java, SpringBoot) und lernst
              Softwareentwicklung, Tools wie IDE und Git sowie die
              Swisscom-Kultur kennen.
            </p>
          </div>
          <br />
          <div className={styles.first}>
            <strong>First Steps 2024</strong>
            <p className={styles.projektbeschr}>
              In den First Steps lernst du Swisscom sowie deine Begleiterinnen
              und Kolleginnen kennen – die ideale Vorbereitung für deine Lehre.
            </p>
          </div>
        </p>
        <p className={styles.text}>
          <strong>Webseiten von mir:</strong> <br />
          <a
            href="https://thomload.github.io/ThaiRestaurant/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ThaiRestaurant Projekt ansehen
          </a>
          <br />
          <a
            href="https://thomload.github.io/RezepteApp/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rezepte Projekt ansehen
          </a>
        </p>
        <p className={styles.text}>
          <strong>Kontakt:</strong> <br />
          <a href="mailto:Thomas.Theler@swisscom.com">
            Thomas.Theler@swisscom.com
          </a>
          , +41 79 567 87 92, Bern
        </p>
      </div>
    </div>
  );
}

export default Thomas;
