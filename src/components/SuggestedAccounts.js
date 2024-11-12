import styles from '../styles/SuggestedAccounts.module.css'
import FollowButton from './FollowButton';

export default function SuggestedAccounts({ text }) {
    return (
        <div className={styles.suggestedAccountsContainer}>
            <div className={styles.suggestedAccounts}>
                <div className={styles.title}><p>{text}</p></div>
                <Account
                    img={"https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg"}
                    name={"Node.js"}
                    username={"@nodejs"}
                    bio={"The Node.js JavaScript Runtime. 🐢🚀 Need help with Node.js? We've got a repo for that: http://github.com/nodejs/help"}
                />
                <Account
                    img={"https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg"}
                    name={"Node.js"}
                    username={"@nodejs"}
                    bio={"The Node.js JavaScript Runtime. 🐢🚀 Need help with Node.js? We've got a repo for that: http://github.com/nodejs/help"}
                />
                <Account
                    img={"https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg"}
                    name={"Node.js"}
                    username={"@nodejs"}
                    bio={"The Node.js JavaScript Runtime. 🐢🚀 Need help with Node.js? We've got a repo for that: http://github.com/nodejs/help"}
                />
                <div className={styles.showMore}>
                    <button>Show More</button>
                </div>
            </div>
        </div>
    );
}

function Account({ img, name, username, bio }) {
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