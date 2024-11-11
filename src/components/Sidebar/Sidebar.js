import styles from './styles/Sidebar.module.css'
import SidebarItem from './SidebarItem';
import PostButton from './PostButton';
import UserProfile from './UserProfile';
import {
    xIcon,
    homeIcone,
    searchIcon,
    notificationIcon,
    messageIcon,
    grokIcon,
    profileIcon,
    moreIcon,
    bookmarksIcon,
    communitiesIcon,
    moreInfo
} from '../../assets/icons';

export default function Sidebar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.container}>
                <div className={styles.upperContainer}>
                    <nav>
                        <ul className={styles.navLinks}>
                            <SidebarItem icon={xIcon} label="" />
                            <SidebarItem icon={homeIcone} label="Home" href="/" />
                            <SidebarItem icon={searchIcon} label="Explore" href="/" />
                            <SidebarItem icon={notificationIcon} label="Notification" href="/" />
                            <SidebarItem icon={messageIcon} label="Messages" href="/" />
                            <SidebarItem icon={grokIcon} label="Grok" href="/" />
                            <SidebarItem icon={bookmarksIcon} label="Bookmarks" href="/" />
                            <SidebarItem icon={communitiesIcon} label="Communities" href="/" />
                            <SidebarItem icon={profileIcon} label="Profile" href="/" />
                            <SidebarItem icon={moreIcon} label="More" href="/" />
                        </ul>
                        <PostButton label="Post" />
                    </nav>
                </div>
                <footer>
                    <UserProfile
                        username="sundos saifi"
                        handle="@SundosSaifi"
                        profilePicture="https://pbs.twimg.com/profile_images/1819504687021764608/wPp9sHuN_bigger.jpg"
                        moreInfoIcon={moreInfo}
                    />
                </footer>
            </div>
        </div>
    );
}
