import styles from "./Cabecalho.module.css";

function Cabecalho(){
    return(
        <header className={styles.header}>
            <span>EtecFlix</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Cabecalho;