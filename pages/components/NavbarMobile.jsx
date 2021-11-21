// Dependencies
import Link from 'next/link'

// Styles
import styles from '../../styles/NavbarMobile.module.scss'

const NavbarMobile = () => {

  return (
    <div className={styles.container}>
      <Link href='#about'>
        <p>Sobre</p>
      </Link>
      <Link href='#portfolio'>
        <p>Portfolio</p>
      </Link>
      <Link href='#contact'>
        <p>Contato</p>
      </Link>
    </div>
  )
}

export default NavbarMobile