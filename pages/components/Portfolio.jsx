import Image from 'next/image'

import logo from '../../assets/images/Ver_Logo_01.png'

import styles from '../../styles/Portfolio.module.scss'

import {constants} from '../../utils/constants'

const {portfolioTitle} = constants

const Portfolio = () => {

  return (
    <div className={styles.container}>

      <h2>
        {portfolioTitle}
      </h2>

      <div className={styles.cardsContainer}>

        <div className={styles.card} >
            <Image src={logo} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            <p>
              {'small description about company'}
            </p>
        </div>

        <div className={styles.card} >
            <Image src={logo} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            <p>
              {'small description about company'}
            </p>
        </div>

        <div className={styles.card} >
            <Image src={logo} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            <p>
              {'small description about company'}
            </p>
        </div>

        <div className={styles.card} >
            <Image src={logo} alt="Lifely Logo"
            width={104} height={58.5} 
            />
            <p>
              {'small description about company'}
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio