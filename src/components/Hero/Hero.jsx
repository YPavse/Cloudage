import styles from "./Hero.module.css";

const Hero = () => {
    return (
      <main className={`${styles.hero} container`}>
        <div className="hero-content">
          <h1>Become The Top 1% AIOps</h1>
          <h1>& Multi-cloud Engineer In</h1>
          <h2>6 Months</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo commodi doloremque corrupti expedita dicta ratione assumenda quos esse nobis eaque, earum quam corporis sunt! Odio debitis explicabo quo voluptates.</p>
          <button className="btn">Read More</button>
        </div>
        <div className={`${styles.cloud}`}>
         <img src="/img/cloud.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default Hero;