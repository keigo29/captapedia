import styles from '../styles/header.module.scss'

export default function Header(){
    const title ="<Catapedia/>"
    const clickHander= ()=>{
        location.reload();
    }
    return(
        <header className={styles.header} onClick={clickHander}>
            <header>
           <div className={styles.title}>
            {title}
           </div>
            </header>
        </header>
    )
}