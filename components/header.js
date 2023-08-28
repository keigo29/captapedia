import styles from '../styles/header.module.scss'

export default function Header(){
    const title ="<Catapedia/>"
    return(
        <header className={styles.header}>
            <header>
           <div className={styles.title}>
            {title}
           </div>
            </header>
        </header>
    )
}