import styles from './wrap.module.css'
import Image from 'next/image'
import logo from '../public/logo.svg'
import gradHat from '../public/grad-hat.svg'
import book from '../public/book.svg'
import phone from '../public/phone.svg'
import questionMark from '../public/question-mark.svg'
import uniLogo from '../public/university-logo.png'
import { useRouter } from 'next/router'
import Link from 'next/link'


const wrapper = (props) => {
    const router = useRouter()
    const style = router.pathname == '/' ? { background: '#06364B'}: {background: '#e5e5e5'}
    console.log(router.pathname)
    return(
        <div className={styles.wrapper} >
            <div style={style} className={styles.header} >
                <Link href='/' ><div className={styles.logoArea}>
                   <span className={styles.logo}  > <Image src={logo} /></span>
                </div></Link>
                <ul className={styles.linkList} >
                    <li className={styles.link} >  <span className={`${styles.linkIcon} ${styles.gradIcon}`}> <Image src={gradHat} /> </span> <Link href='/child-university' >جامعة الطفل</Link></li>
                    <li className={styles.link} >  <span className={`${styles.linkIcon} ${styles.bookIcon}`}> <Image src={book} />  </span> <Link href='/services' >خدمات الحاضنة</Link></li>
                    <li className={styles.link} >  <span className={`${styles.linkIcon} ${styles.phoneIcon}`}> <Image src={phone} /> </span> <Link href='' >تواصل معنا</Link></li>
                    <li className={styles.link} > <span className={`${styles.linkIcon} ${styles.questionMark}`} ><Image src={questionMark} /></span> <Link href='/questions' >استفسارات</Link></li>
                </ul>
            </div>
            {props.children}
            <div className={styles.footer} >
                <span  className={styles.universityLogo}><Image src={uniLogo} /></span>
                <p className={styles.uniLogoText} >جامعة <br/> دمنهور</p> 
            </div>
        </div>
    )
}

export default wrapper