import styles from './homepage.module.css'
import Image from 'next/image'
import sponsorLogo from '../../public/sponsor.png'
import goals from '../../public/goals.svg'
import help from '../../public/help2.png'
import shield from '../../public/secure-shield.svg'
import handshake from '../../public/hand-shake.svg'
import laptop from '../../public/laptop.svg'
import gear from '../../public/gear.svg'
import protection from '../../public/protect.png'
import laptopGuy from '../../public/laptop.png'
import growth from '../../public/growth.png'


const homepage = () => {
    return(
        <div className={styles.homepage}>
            <section className={styles.heroSection} >
                <div className={styles.heroHeader} > 
                    <div className={styles.heroHeaderTextArea} >
                        <h1 className={styles.headerPrimaryText} >الحاضنة التكنولوجية</h1>
                        <h3 className={styles.headerSecondaryText} >مركز دعم الابتكارات التكنولوجية</h3>
                    </div>
                    <a href='https://www.msme.eg/ar/Pages/default.aspx' target='_blank' className={styles.sponsorLogo}> <Image src={sponsorLogo} /> </a>
                </div>
                <span className={styles.goals} > <Image src={goals} /> </span> 
                <h2 className={styles.featureOneText} >دعم الشركات الناشئة الصغيرة و المتوسطة و المتناهية الصغر  </h2>
                <span className={styles.help} ><Image src={help} /></span>
            </section>
            <section className={styles.featureTwoSection}>
                <div className={`${styles.sectionContent} ${styles.sectionTwoContent}`} >
                    <h2 className={`${styles.sectionHeader} ${styles.sectionTwoHeader}`} > 
                        <span className={`${styles.sectionIcon} ${styles.sectionTwoIcon}`}><Image src={shield}  /></span>
                        توفير الحماية الفكرية للإبتكارات  
                    </h2>
                    <p className={`${styles.sectionParagraph} ${styles.sectionTwoParagraph}`} >و كذلك توفير الاستشارة و التوجيه للمتقدمين لبلورتها بأسلوب علمى.</p>
                </div>
                <span className={styles.sectionTwoImage}><Image src={protection}/></span>
            </section>
            <section className={styles.featureThreeSection}>
                <div className={`${styles.sectionContent} ${styles.sectionThreeContent}`} >
                    <h2 className={`${styles.sectionHeader} ${styles.sectionThreeHeader}`} > 
                        <span className={`${styles.sectionIcon} ${styles.sectionThreeIcon}`} ><Image src={handshake}  /></span>
                        امداد المتقدمين بالرعاية
                    </h2>
                    <p className={`${styles.sectionParagraph} ${styles.sectionThreeParagraph}`} >و تبنى الأفكار التكنولوجية المبتكرة من قبل الخبراء و المفكرين فى مجال التخصص و المساعدة فى تسجيلها.</p>
                </div>
            </section>
            <section className={styles.featureFourSection}>
                <div className={`${styles.sectionContent} ${styles.sectionFourContent}`} >
                    <h2 className={`${styles.sectionHeader} ${styles.sectionFourHeader}`} > 
                        <span className={`${styles.sectionIcon} ${styles.sectionFourIcon}`}  ><Image src={laptop} /></span>
                        توفير تجهيزات الحاسوب                    
                    </h2>
                    <p className={`${styles.sectionParagraph} ${styles.sectionFourParagraph}`} >و خدمة الانترنت التى تساعد رواد الأعمال الناشئة و الصغيرة لتحويل خطط أعمالهم لنماذج أولية.</p>
                </div>
                <span  className={`${styles.sectionImage} ${styles.sectionFourImage}`}  > <Image src={laptopGuy}/> </span>
            </section>
            <section className={styles.featureFiveSection}>
                <div className={`${styles.sectionContent} ${styles.sectionFiveContent}`} >
                    <h2 className={`${styles.sectionHeader} ${styles.sectionFiveHeader}`} > 
                        <span className={`${styles.sectionIcon} ${styles.sectionFiveIcon}`}  ><Image src={gear} /></span>
                        خلق المزيد من فرص العمل                    
                    </h2>
                    <p className={`${styles.sectionParagraph} ${styles.sectionFiveParagraph}`} >مما يسهم فى رفع و تحسين مستوى المعيشة لتحويل خطط الأعمال و نماذج المنتجات الى أعمال ناجحة.</p>
                </div>
                <span  className={`${styles.sectionImage} ${styles.sectionFiveImage}`}  > <Image src={growth}/> </span>
            </section>
            <section className={styles.serviceSection} >
                <h2 className={styles.serviceSectionHeader} >خدمات الحاضنة التكنولوجية</h2>
                <ul className={styles.services} >
                    <li className={styles.service} > <p className={styles.serviceText} >تحكيم مسابقات الإبتكار فى الجامعة و المجتمع المحيط.</p> </li>
                    <li className={styles.service} > <p className={styles.serviceText} >المساعدة فى تسجيل الإبتكارات و التقدم للحصول على براءة اختراع</p> </li>
                    <li className={styles.service} > <p className={styles.serviceText} >توفيرالاستشارات التقنية و الفنية و احتضان و رعاية الراغبين فى التعاون.</p> </li>
                    <li className={styles.service} > <p className={styles.serviceText} >تسجيل الأفكار المبتكرة و متابعتها حتى الحصول على براءة اختراع.</p> </li>
                    <li className={styles.service} > <p className={styles.serviceText} >توفير الخبرات اللازمة لعمل دراسات الجدوى الاسترشادية. </p> </li>
                    <li className={styles.service} > <p className={styles.serviceText} >توفير مكان مناسب لعمل جزء من المشروع بالحاضنة. </p> </li>
                </ul>

            </section>
            <section className={styles.def} >
                <div className={styles.defContent}>
                    <h2 className={styles.defHeader} >الحاضنة التكنولوجية</h2>
                    <p className={styles.defText}>هى المكان الذى يوفر البيئة المناسبة لمشروع وليد بغض النظرعن نوعه و احتضانه و رعايته و توفير الرعاية له و امداده بالطاقة و المساعدة بانواعها الممكنة لتحقيق فرصة الاستدامه و النجاح، و محاولة حل المشكلات للحماية من أى مخاطر و توفير الاحتياجات من عوامل النمو و التقوية لينهض و يستمر و يزدهر ، و المساعدة فى الحماية الفكرية للابتكار و التقدم للحصول على براءه اختراع من الجهات المختصة.</p>
                </div>
            </section>
        </div>
    )
}

export default homepage