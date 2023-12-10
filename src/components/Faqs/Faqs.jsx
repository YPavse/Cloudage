import styles from "./Faqs.module.css";

const Faqs =()=>{
    return(
<main className={`${styles.faqs} container`}>
<h1>FAQS</h1>

<div className={`${styles.outer}`}>
   <div className={`${styles.inner}`}> <p>I am a fresher from computer Science Background, Can I do this course?</p>
   </div>
   <div className={`${styles.inner1}`}> <p>I can is More important than IQ & EQ, this is purely computer science domain.</p>
   </div>
   
</div>
<div className={`${styles.outer}`}>
   <div className={`${styles.inner}`}> <p>I am a fresher from computer Science Background, Can I do this course?</p></div>
</div>
<div className={`${styles.outer}`}>
   <div className={`${styles.inner}`}> <p>I am a fresher from computer Science Background, Can I do this course?</p></div>
</div>
<div className={`${styles.outer}`}>
   <div className={`${styles.inner}`}> <p>I am a fresher from computer Science Background, Can I do this course?</p></div>
</div>


</main>
    );
};

export default Faqs;