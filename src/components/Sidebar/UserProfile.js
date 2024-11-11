import styles from './styles/UserProfile.module.css';

export default function UserProfile({ username, handle, profilePicture, moreInfoIcon }) {
    return (
        <button className={styles.acctButton}>
            <div className={styles.userInfo}>
                <div className={styles.photo}>
                    <img alt={username} src={profilePicture} />
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>{username}</div>
                    <div className={styles.userName}>{handle}</div>
                </div>
            </div>
            <div className={styles.moreInfoIcon}>{moreInfoIcon}</div>
        </button>
    );
}
