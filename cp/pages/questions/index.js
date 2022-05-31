import Wrapper from "../../layout/wrap"
import styles from './questions.module.css'

export default function index() {
  return (
      <Wrapper>
        <div className={styles.questionPage} >
            <div className={styles.register} >
                <h3 className={styles.registerText} >اسئلة و اجابة</h3>
            </div>
            <div className={styles.questions} >
                <div className={styles.question} >
                    <h2 className={styles.questionText} >Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                    <p className={styles.answer} >Lorem ipsum dolor sit amet.</p>
                    <div className={styles.formGroup} >
                        <textarea className={`${styles.textInput} ${styles.textarea} `} name="paragraph"/>
                        <label className={styles.registerLabel} for="paragraph">اضافة اجابة</label>
                    </div>
                    <a href="#" className={styles.registerLink} >اضافة</a>
                </div>
                <div className={styles.question} >
                    <div className={styles.formGroup} >
                        <textarea className={`${styles.textInput} ${styles.textarea} `} name="addQuestion"/>
                        <label className={styles.registerLabel} for="addQuestion">اضافة سؤال</label>
                    </div>
                    <a href="#" className={styles.registerLink} >اضافة</a>
                </div>
            </div>
        </div>
      </Wrapper>
  )
}
