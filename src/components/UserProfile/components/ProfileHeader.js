import styles from '../styles/ProfileHeader.module.css';
import { backArrow } from '../../../assets/icons';

export default function ProfileHeader({userName, postsNumber}) {
    return (
        <div className={styles.profileHeaderContainer}>
            <div className={styles.backArrow}>{backArrow}</div>
            <div className={styles.userInfo}>
                <p>{userName}</p>
                <p>{postsNumber} post</p>
            </div>
        </div>
    );
}