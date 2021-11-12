import Image from 'next/image'

import logo from '../../assets/images/Ver_Logo_01.png'

import styles from '../../styles/ProductCard.module.scss'

const ProductCard = () => {
  return (
    <div className={styles.container} >
        <Image src={logo} alt="Lifely Logo"
         width={300} height={175} 
         />
         <p>
           {'small description about company'}
         </p>
    </div>
  )
}

export default ProductCard