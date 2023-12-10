import styles from "./Footer.module.css";
import { TiTick } from "react-icons/ti";

const Footer = () => {
    return (
        <main className={`${styles.footer}`}>
            <div>
                <img src="/img/download.jpg" alt="err" />
            </div>
            <div className={`${styles.box}`}>
                <h1 className={`${styles.h}`}>Corporate Trainings</h1>
                <div className={`${styles.innerbox}`}>
                    <TiTick /> <p>Big data specialization</p>
                </div>
                <div className={`${styles.innerbox}`}>
                    <TiTick /> <p>Machine Learning on Multicloud</p>
                </div>
                <div className={`${styles.innerbox}`}>
                    <TiTick /> <p>All Data on Kuberntes</p>
                </div>
                <div className={`${styles.innerbox}`}>
                    <TiTick /> <p>Data Center on Hybrid Cloud</p>
                </div>
            </div>
            <div className={`${styles.box}`}>
                <h1 className={`${styles.h}`}>Contact info</h1>
                <div className={`${styles.innerbox1}`}>
                    <TiTick /> <div className={`${styles.add}`}>
                        <p>Address: Clover Hills Plaza,9th Floor NIBM</p>
                        <p>Undri Road</p>
                        <p>Mohammad Wadi, Kondhwa, Pune,</p>
                        <p>Maharashtra-411048</p>
                    </div>
                </div>
                <div className={`${styles.innerbox1}`}>
                    <TiTick /> <p>Phone: +91-976-406-3368</p>
                </div>
                <div className={`${styles.innerbox1}`}>
                    <TiTick /> <p>Email: info@cloudage.co.in</p>
                </div>
            </div>
        </main>
    );
};

export default Footer;
