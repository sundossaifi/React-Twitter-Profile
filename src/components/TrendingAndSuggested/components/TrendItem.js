import styles from '../styles/TrendItem.module.css';
import {moreInfo} from '../../../assets/icons'

export default function TrendItem({trendName, postsNumber}) {
    return (
        <div className={styles.trendItem}>
            <div className={styles.trendName}>
                {trendName}{moreInfo}
            </div>
            <div className={styles.postsNumber}>
                <span>{postsNumber} posts</span>
            </div>
        </div>
    );
}