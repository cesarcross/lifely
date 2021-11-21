import Image from 'next/image'



import styles from '../../styles/Portfolio.module.scss'

import logo from '../../assets/images/Ver_Logo_01.png'
import microterra from '../../assets/images/microterra.png'
import aquafoods from '../../assets/images/aquafoods.png'
import buchabio from '../../assets/images/buchabio.png'
import changefoods from '../../assets/images/changefoods.png'
import cultureddecadence from '../../assets/images/cultureddecadence.png'
import gelatex from '../../assets/images/gelatex.png'
import haofoods from '../../assets/images/haofoods.png'
import juicymarbles from '../../assets/images/juicymarbles.png'
import bondpetfoods from '../../assets/images/bondpetfoods.png'

import {constants} from '../../utils/constants'

const {portfolioTitle, cardText} = constants

const Portfolio = () => {

  return (
    <div className={styles.container}>

      <h2>
        {portfolioTitle}
      </h2>

      <div className={styles.cardsContainer}>

        <div className={styles.card} >
          <div className={styles.imageContainer}>

            <Image src={microterra} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
            <p>
              {cardText}
            </p>
        </div>

        <div className={styles.card} >
        <div className={styles.imageContainer}>
            <Image src={aquafoods} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            </div>
            <p>
              {cardText}
            </p>
        </div>

        <div className={styles.card} >
        <div className={styles.imageContainer}>
            <Image src={buchabio} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            </div>
            <p>
              {cardText}
            </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={changefoods} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={cultureddecadence} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={gelatex} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={haofoods} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={juicymarbles} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>

        <div className={styles.card} >
          <div className={styles.imageContainer}>
            <Image src={bondpetfoods} alt="Lifely Logo"
            width={104} height={58.5} 
            />
          </div>
          <p>
            {cardText}
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio