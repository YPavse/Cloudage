import styles from "./User.module.css";

const User =() =>{
    return(
<main className={`${styles.user} container`}>
   <div className={`${styles.text}`}>
    <div className={`${styles.inner}`}>
        <h1>Krutika</h1>
        <img src="/img/capge.png" alt="err" />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at perferendis vitae voluptate magnam autem tenetur, dicta veritatis, voluptatibus, eos quod doloribus excepturi. Fugit minima autem eum enim esse quo, rem non! Sequi laboriosam sunt impedit qui consectetur. Nobis repudiandae voluptatem fuga eveniet aliquam nostrum iure tenetur illum quasi tempore dignissimos ex, culpa, non veniam animi quos. Numquam Perspiciatis consectetur quia quibusdam dolorum, odio iste?</p>
   </div>
   
   <div className={`${styles.image}`}>
      <img src="/img/cloudyou.jpg" alt="err" />
   </div>

</main>
    );
};

export default User;