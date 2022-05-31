import styles from './card.module.css'
import Image from 'next/image'


const card = (props) => {
    return (
        <div className= {styles.card}>
            <span className={styles.cardImage} > <Image src={props.image}  /> </span>
            <div className={styles.cardDescription}>
                <p className={styles.cardDescriptionText} >فعاليات جامعة الطفل بعنوان مصريات Egyptology</p>
            </div>
        </div>
    )
}

export default card