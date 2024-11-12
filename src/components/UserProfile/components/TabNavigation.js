import styles from '../styles/TabNavigation.module.css'

export default function TabNavigation() {
    return (
        <nav>
            <ul className={styles.tabContainer}>
                <li className={styles.tab}>
                    <a href="#posts" >Posts</a>
                </li>
                <li className={styles.tab}>
                    <a href="#replies">Replies</a>
                </li>
                <li className={styles.tab}>
                    <a href="#media">Media</a>
                </li>
            </ul>
        </nav>
    );
}

