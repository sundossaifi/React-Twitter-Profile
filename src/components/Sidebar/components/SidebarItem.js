import styles from '../styles/SidebarItem.module.css';

export default function SidebarItem({ icon, label, href }) {
    return (
        <li><a className={styles.SidebarItem} href={href}>{icon}{label}</a></li>
    );
}
