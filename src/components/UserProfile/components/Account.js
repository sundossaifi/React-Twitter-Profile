import styles from '../styles/Account.module.css';
import FollowButton from '../../FollowButton'

export default function Account({ img, name, username, bio }) {
    return (
        <div className={styles.accountContainer}>
            <div className={styles.account}>
                <div className={styles.userImage}>
                    <img src={img} alt='user' />
                </div>
                <div className={styles.accountInfo}>
                    <div className={styles.userBtnContainer}>
                        <div className={styles.usernameContainer}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.username}>{username}</div>
                        </div>
                        <FollowButton />
                    </div>
                    <div className={styles.bio}>
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}