import Link from 'next/link'
import styles from './NavBar.module.scss';
import NavLinks from './Links'
//En caso de querer editar los links hacerlo directamente desde el archivo Links.js

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Logo de la página" />
          </a>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu-list}>
        {NavLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar