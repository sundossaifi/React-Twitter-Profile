import styles from '../styles/Content.module.css';
import Post from './Post';
import SuggestedAccounts from '../../SuggestedAccounts';

export default function Content() {
    const accountsData = [
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "Node.js",
            username: "@nodejs",
            bio: "The Node.js JavaScript Runtime. 🐢🚀 Need help with Node.js? We've got a repo for that: http://github.com/nodejs/help"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "JavaScript",
            username: "@javascript",
            bio: "The JavaScript Language. ✨ Open source and community-driven. Follow for updates!"
        },
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "JavaScript",
            username: "@javascript",
            bio: "The JavaScript Language. ✨ Open source and community-driven. Follow for updates!"
        },
    ];
    return (
        <div>
            <Post
                img={'https://pbs.twimg.com/profile_images/1856380391499730944/eMtdY1va_bigger.jpg'}
                name={'Aurora Scharff'}
                username={'@aurorascharff'}
                postingdate={'Nov 16, 2023'}
                post={"Happy Birthday to react @reactjs"}
            />
            <div className={styles.suggestedAccountsContainer}>
                <SuggestedAccounts
                    title="Who to follow"
                    accounts={accountsData}
                />
            </div>
        </div>
    )
}
