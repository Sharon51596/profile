import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home">SHARON.</a>
        </div>
        <ul className={styles.navList}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">WORKS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}
