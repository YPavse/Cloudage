import styles from "./Features.module.css";

const Features =() =>{
    return(
        <main className={`${styles.feat} container`}>
             <div className={`${styles.box}`}>
               <img src="/img/img1.png" alt="err" />
               <h1>NETWORK</h1>
             </div>
             <div className={`${styles.box}`}>
               <img src="/img/img2.png" alt="err" />
               <h1>SECURITY</h1>
             </div>
             <div className={`${styles.box}`}>
               <img src="/img/img3.jpg" alt="err" />
               <h1>ANY CLOUD</h1>
             </div>
             <div className={`${styles.box}`}>
               <img src="/img/img1.png" alt="err" />
               <h1>ANY CLOUD</h1>
             </div>
        </main>
    );
};

export default Features;