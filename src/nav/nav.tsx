import styles from "./Nav.module.css"
import { Link } from "react-router-dom"
import * as data from "./links.json"

const links = (data as any).links

type LinkType = {
    label: string;
    href: string;
}

const Links: React.FC<{ links: LinkType[] }> = ({ links }) => {
    return (
      <div className={styles["links-container"]}>
        {links.map((link) => (
          <div key={link.href} className={styles.links}>
            <Link to={link.href}>{link.label}</Link>
          </div>
        ))}
      </div>
    );
  };

  const Nav: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Links links={links} />
        </nav>
        
);
};

export default Nav;