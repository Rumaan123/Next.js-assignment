import Image from "next/image";
import styles from "./style/home.module.css";

export default function Home() {
  return(
        
    <div className={styles.container} >
        
        <nav>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/nested">Nested</a></li>
        </ul>
      </nav>
     </div>
      
  );
};
    