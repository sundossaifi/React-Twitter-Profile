import styles from '../styles/Post.module.css';
import {
    repost,
    comment,
    like,
    view,
    share,
    
} from '../../../assets/icons';


export default function Post({ img, name, username, postingdate, post, }) {
    return (
        <div className={styles.container}>
            <div className={styles.postContainer}>
                <div className={styles.repost}>
                    <span>{repost} <p>React reposted</p></span>
                </div>
                <div className={styles.post}>
                    <div className={styles.userImage}>
                        <img src={img} alt='user' />
                    </div>
                    <div className={styles.postContent}>
                        <div className={styles.userInfo}>
                            {name} <span>{username} . {postingdate}</span>
                        </div>
                        <div className={styles.postText}>
                            <p>{post}</p>
                        </div>
                        <PostMetrics comments={'42'} reposts={'16'} likes={'4000'} views={'1.1M'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function PostMetrics({ comments, reposts, likes, views }) {
    return (
        <div className={styles.postMetrics}>
            <PostMetricItem icon={comment} number={comments} />
            <PostMetricItem icon={repost} number={reposts} />
            <PostMetricItem icon={like} number={likes} />
            <PostMetricItem icon={view} number={views} />
            <PostMetricItem icon={share}/>
        </div>
    );
}

function PostMetricItem({ icon, number }) {
    return (
        <div className={styles.postMetricItem}>
            {icon}
            <span className={styles.number}>{number}</span>
        </div>
    )
}

