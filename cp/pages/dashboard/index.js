import React from 'react'
import Wrapper from '../../layout/wrap'
import styles from './dashboard.module.css'
import Link from 'next/link'

const dashboard = () => {
  return (
      <Wrapper>
        <div className={styles.dashboardPage} >
            <span className={styles.addTopic} > <Link href='/dashboard/addTopic'> اضافة موضوع</Link></span>
            <a href="" className={`${styles.addTopic} ${styles.logout} `} > تسجيل الخروج </a>
            <div className={styles.applicantsData} >
                <h2 className={styles.sectionName} >بيانات جامعة الطفل</h2>
                <div className={styles.applicantsDataText} >
                    <p className={styles.applicantName} >:الاسم <span> Lorem ipsum dolor sit amet. </span> </p>
                    <p className={styles.applicantName} >:الموبايل <span> 01111111111 </span> </p>
                </div>
                <div className={styles.applicantsDataText} >
                    <p className={styles.applicantName} >:الاسم <span> Lorem ipsum dolor sit amet. </span> </p>
                    <p className={styles.applicantName} >:الموبايل <span> 01111111111 </span> </p>
                </div>
                <div className={styles.applicantsDataText} >
                    <p className={styles.applicantName} >:الاسم <span> Lorem ipsum dolor sit amet. </span> </p>
                    <p className={styles.applicantName} >:الموبايل <span> 01111111111 </span> </p>
                </div>
            </div>
        </div>
      </Wrapper>
    
  )
}


export default dashboard