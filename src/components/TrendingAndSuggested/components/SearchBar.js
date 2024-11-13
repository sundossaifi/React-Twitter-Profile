import styles from '../styles/SearchBar.module.css'
import {searchIcon} from '../../../assets/icons'

export default function SearchBar({ placeholder }) {
    return (
        <div className={styles.searchContainer}>
            <span>{searchIcon}</span>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.searchInput}
            />
        </div>
    );
}