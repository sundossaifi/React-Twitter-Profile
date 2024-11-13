import styles from '../styles/SuggestedAccounts.module.css'
import Account from './UserProfile/components/Account';

export default function SuggestedAccounts({ title, accounts }) {
    return (
        <div className={styles.suggestedAccounts}>
            <div className={styles.title}>
                <p>{title}</p>
            </div>
            {accounts.map((account, index) => (
                <Account
                    key={index}
                    img={account.img}
                    name={account.name}
                    username={account.username}
                    bio={account.bio}
                />
            ))}
            <div className={styles.showMore}>
                <button>Show More</button>
            </div>
        </div>
    );
}

