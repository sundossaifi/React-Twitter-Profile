import styles from './styles/UserProfilePage.module.css';
import ProfileHeader from './components/ProfileHeader';
import ProfileDetails from './components/ProfileDetails';
import TabNavigation from './components/TabNavigation';
import Content from './components/Content';
import {verified} from '../../assets/icons';

export default function UserProfile() {
    return (
        <main>
            <div>
                <ProfileHeader userName="React" postsNumber="2711" />
                <ProfileDetails
                    cover='https://pbs.twimg.com/profile_banners/1566463268/1714619053/1080x360'
                    profile='https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png'
                    username={"React"}
                    name={'@reactjs'}
                    icon={verified}
                    bio={'The library for web and native user interfaces'}
                    joiningDate={"Joined July 2013"}
                    followingNum={'261'}
                    followersNum={"789.2K"}
                />
                <div className={styles.tabNavigation}><TabNavigation/></div>
                <Content/>
            </div>
        </main>
    );
}