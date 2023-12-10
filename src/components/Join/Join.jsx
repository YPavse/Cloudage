import styles from "./Join.module.css";

const Join = () => {
    return(
   <main className={`${styles.join} container`}>
    <div className="left">
        <h1>Join Webinar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, adipisci. Placeat error dolores aut, iusto molestias earum? Autem officiis rem molestias incidunt dolorum doloribus laboriosam sint assumenda deleniti quos! Odio, saepe? Cumque earum eum similique laborum dolore dolorum sed magni in. Explicabo vel at, ab laudantium quo vitae quas fugit. Ipsum!</p>
    </div>
    <div className={`${styles.right}`}>
            <button>Join Webinar</button>
        </div>

        
   </main>
   
    );
};

export default Join;