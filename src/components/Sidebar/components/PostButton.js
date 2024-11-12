import styles from '../styles/PostButton.module.css';

export default function PostButton({ label }) {
    return (
        <button className={styles.postButton}>
            {label}
        </button>
    );
}

