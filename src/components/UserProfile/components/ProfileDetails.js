import styles from '../styles/ProfileDetails.module.css';
import FollowButton from '../../FollowButton';
import { moreInfo,searchIcon,calendar } from '../../../assets/icons';

export default function profileDetails({ cover, profile, name, username, icon, bio, joiningDate, followingNum, followersNum }) {
    return (
        <div className={styles.profileDetails}>
            <div className={styles.coverContainer}>
                <img alt='cover pic' src={cover}></img>
            </div>
            <div className={styles.profileInfoContainer}>
                <div className={styles.imgButtoncontainer}>
                    <div className={styles.profileimgcontainer}><img alt="profile pic" src={profile}></img></div>
                    <div className={styles.buttonsContainer}>
                        <IconButton icon={moreInfo} />
                        <IconButton icon={searchIcon} />
                        <FollowButton />
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.username}>{username}<span>{icon}</span></div>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.bio}>
                    <p>{bio}</p>
                </div>
                <div className={styles.calendar}>{calendar}{joiningDate}</div>
                <div className={styles.followerContainer}>
                    <div>{followingNum}<span> Following</span></div>
                    <div>{followersNum}<span> Followers</span></div>
                </div>
            </div>
        </div>
    )
}

function IconButton({ icon }) {
    return (
        <button className={styles.iconButton}>
            <span>{icon}</span>
        </button>
    )
}