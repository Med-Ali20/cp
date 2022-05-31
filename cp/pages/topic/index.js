import Wrapper from '../../layout/wrap'
import styles from './topic.module.css'
import Image from 'next/image'
import thumbnail from '../../public/thumbnail.jpg'
import topicPhoto from '../../public/topic-photo.jpg'


const topic = () => {
    const date = new Date()
    const min = date.getMinutes()
    const hour = date.getHours()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

  return (
    <Wrapper>
        <div className={styles.topicPage} >
            <div className={styles.topicHeader} >
                <h1 className={styles.topicHeaderText} >مجموعات عمل التجارب</h1>
                <p className={styles.date} > {`${day} / ${month} / ${year} - ${hour}:${min}`} </p>
            </div>
            <div className={styles.thumbnail} > <Image src={thumbnail} /> </div>
            <div className={styles.topicBody} >
                <p className={styles.topicParagraph} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita placeat a perferendis explicabo eaque consequuntur. Consectetur atque laboriosam placeat, distinctio nostrum perferendis modi iste!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero expedita placeat a perferendis explicabo eaque consequuntur. Consectetur atque laboriosam placeat, distinctio nostrum perferendis modi iste!
                    <a href="#" className={styles.registerLink} > التسجيل الان </a>
                </p>
                <div className={styles.topicPhotos} >
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                    <span className={styles.topicPhoto} > <Image src={topicPhoto} /> </span>
                </div>
            </div>
        </div>
        
    </Wrapper>
  )
}


export default topic