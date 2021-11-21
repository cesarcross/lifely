// Dependencies
import Image from 'next/image'

// Styles
import styles from '../../styles/About.module.scss'
import aboutbanner from '../../assets/images/aboutbanner.png'

// Other
import { constants } from "../../utils/constants"

const {aboutTitle, aboutText} = constants

const About = () => {
  return (
    <div className={styles.container}>
      <h2>
        {aboutTitle}
      </h2>
      <Image
      src={aboutbanner} alt='About Banner'
      
      />
      <p>
        {aboutText}
      </p>
    </div>
  )
}

export default About