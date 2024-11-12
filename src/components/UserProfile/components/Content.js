import styles from '../styles/Content.module.css';
import Post from './Post';
import SuggestedAccounts from '../../SuggestedAccounts';

export default function Content() {
    return (
        <div>
            <Post
                img={'https://pbs.twimg.com/profile_images/1856380391499730944/eMtdY1va_bigger.jpg'}
                name={'Aurora Scharff'}
                username={'@aurorascharff'}
                postingdate={'Nov 16, 2023'}
                post={"Happy Birthday to react @reactjs"}
            />
            <SuggestedAccounts
                text={"Who to Follow"}
                img={"https://pbs.twimg.com/profile_images/1497227696438398981/zuPiHqzd_bigger.jpg"}
            />
        </div>
    )
}
