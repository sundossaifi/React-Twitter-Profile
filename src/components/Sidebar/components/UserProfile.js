import styles from '../styles/UserProfile.module.css';

export default function UserProfile({ username, handle, profilePicture, moreInfoIcon,icon }) {
    return (
        <button className={styles.acctButton}>
            <div className={styles.userInfo}>
                <div className={styles.photo}>
                    <img alt={username} src={profilePicture} />
                </div>
                <div className={styles.user}>
                    <div className={styles.username}>{username}{icon}</div>
                    <div className={styles.name}>{handle}</div>
                </div>
            </div>
            <div className={styles.moreInfoIcon}>{moreInfoIcon}</div>
        </button>
    );
}
