import styles from './register.module.css'
import Wrapper from '../../layout/wrap'

const register = () => {
  return (
      <Wrapper>
        <div  className={styles.registerPage}  >
            <div className={styles.register} >
                <h3 className={styles.registerText} >التسجيل بجامعة الطفل</h3>
            </div>
            <form action="" className={styles.registerForm} >
                <div className={styles.formGroup} >
                    <input type="text" className={styles.textInput} name="name" />
                    <label className={styles.registerLabel} for="name">:الاسم</label>
                </div>
                <div className={styles.formGroup} >
                    <input type="text" className={styles.textInput} name="phoneNumber"/>
                    <label className={styles.registerLabel} for="phoneNumber">:الموبايل</label>
                </div>
                <input type="submit" value='تسجيل' className={styles.registerCTA} />
            </form>
        </div>
      </Wrapper>
    
  )
}

export default register