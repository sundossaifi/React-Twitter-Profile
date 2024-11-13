import styles from './styles/TrendingAndSuggested.module.css';
import SuggestedAccounts from '../SuggestedAccounts';
import SearchBar from './components/SearchBar';
import Trend from './components/Trend';

export default function TrendingAndSuggested() {
    const accountsData = [
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "Node.js",
            username: "@nodejs",
        },
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "JavaScript",
            username: "@javascript",
        },
        {
            img: "https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg",
            name: "JavaScript",
            username: "@javascript",
        },
    ];

    const trends = [
        {
            trendName: "#Harry Potter",
            postsNumber: "20k"
        },
        {
            trendName: "#Friends",
            postsNumber: "20k"
        },
        {
            trendName: "#Harry Potter",
            postsNumber: "20k"
        },
        {
            trendName: "#Friends",
            postsNumber: "20k"
        },
    ];

    return (
        <section>
            <div className={styles.trendingAndSuggested}>
                <div className={styles.container}>
                    <div className={styles.searchBarContainer}>
                        <SearchBar placeholder={"Search"} />
                    </div>
                    <div className={styles.recommendeAccountsContainer}>
                        <SuggestedAccounts
                            title="Who to follow"
                            accounts={accountsData}
                        />
                    </div>
                    <Trend trends={trends} />

                </div>
            </div>
        </section>
    );
}