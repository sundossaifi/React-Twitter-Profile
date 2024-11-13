import styles from '../styles/Trend.module.css';
import TrendItem from './TrendItem';

export default function Trend({ trends }) {
    return (
        <div className={styles.trend}>
            <div className={styles.trendContainer}>
                {trends.map((trend, index) => (
                    <TrendItem
                        key={index}
                        trendName={trend.trendName}
                        postsNumber={trend.postsNumber}
                    />
                ))}
            </div>
        </div>
    );
}