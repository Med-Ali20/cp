import Card from '../../utils/card'
import cuImage from '../../public/cuImg.jpg'
import styles from '../child-university/child-university.module.css'
import Wrapper from '../../layout/wrap'
import Link from 'next/link'

const childUniversity = () => {
    return (
        <Wrapper>
            <div className={styles.cuPage} >
                <div className={styles.register} >
                    <h3 className={styles.registerText} >خدمات الحاضنة / الدورات التعليمية</h3>
                </div>
                <div className={styles.cardsContainer} > 
                    <Link href="/topic" ><a><Card image={cuImage} /></a></Link>
                    <Link href="/topic" ><a><Card image={cuImage} /></a></Link>
                    <Link href="/topic" ><a><Card image={cuImage} /></a></Link>
                    <Link href="/topic" ><a><Card image={cuImage} /></a></Link>
                    <Link href="/topic" ><a><Card image={cuImage} /></a></Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default childUniversity