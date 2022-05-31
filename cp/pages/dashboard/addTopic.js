import React from 'react'
import Wrapper from '../../layout/wrap'
import styles from './addTopic.module.css'

const addTopic = () => {
  return (
      <Wrapper>
        <div className={styles.addTopicPage} >
            <form action="" className={styles.registerForm} >
                <div className={styles.formGroup} >
                    <select className={styles.select} type="text" name="page">
                      <option value="جامعة الطفل" > جامعة الطفل </option>
                      <option value="خدمات الحاضنة" > خدمات الحاضنة </option>
                    </select>  
                    <label className={styles.registerLabel} for="page">الصفحة</label>
                </div>
                <div className={styles.formGroup} >
                    <input type="text" className={styles.textInput} name="name" />
                    <label className={styles.registerLabel} for="name">اسم الموضوع</label>
                </div>
                <div className={styles.formGroup} >
                    <textarea className={`${styles.textInput} ${styles.textarea} `} name="paragraph"/>
                    <label className={styles.registerLabel} for="paragraph">الفقرة</label>
                </div>
                <div className={styles.formGroup} >
                    <input type="file" className={styles.file} name="file" />
                    <label className={styles.registerLabel} for="file">صورة رئيسية</label>
                </div>
                <div className={styles.formGroup} >
                    <input type="file" className={styles.file} name="file2" />
                    <label className={styles.registerLabel} for="file2">صور اضافية</label>
                </div>
                <div className={`${styles.formGroup} ${styles.chechGroup}`} >
                    <input type="checkbox" className={styles.check} name="check" />
                    <label className={styles.registerLabel} for="check">امكانية التسجيل</label>
                </div>
                
                
                <input type="submit" value='تسجيل' className={styles.registerCTA} />
            </form>
        </div>
      </Wrapper>
    
  )
}

export default addTopic