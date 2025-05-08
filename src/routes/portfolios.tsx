import styles from "./portfolios.module.css";
import { Link } from "react-router-dom";
import data from "./portfolios/links.json"; 

type LinkType = {
  label: string;
  href: string;
};

const links: LinkType[] = data.links;

const Portfolios: React.FC = () => {
  return (
    <div className={styles.page}>
    <div className={styles.cardGrid}>
      {links.map((member) => (
        <div key={member.href} className={styles.card}>
          <h2>{member.label}</h2>
          <p>Lehrling</p>
          <Link to={member.href}>View Portfolio →</Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Portfolios;
