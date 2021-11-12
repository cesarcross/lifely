import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/HomePage.module.scss'
import logo from '../assets/images/Ver_Logo_01.png'
import { constants } from '../utils/constants'
import { ProductCard } from './components/ProductCard'
import { Contact } from './components/Contact'

const {about, aboutText, portfolio} = constants

export default function Home() {
  return (
    <div >
      <Head>
        <title>Lifely</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className={styles.homeBannerContainer}>

        <Image src={logo} alt="Lifely Logo"
         width={625} height={351} 
         />
        </div>

        <div className={styles.contentContainer}>
          <div >
            <h1>{about}</h1>
          <p>{aboutText}</p>
          </div>

          <div>
            <h1>
              {portfolio}
            </h1>
            <div className={styles.cardsContainer}>

            <ProductCard/>

            <ProductCard/>

            </div>
          </div>


        </div>

        <Contact/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
