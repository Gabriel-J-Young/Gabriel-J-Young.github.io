import Link from 'next/link';
import NavLinks from './nav-links';

import styles from './nav.module.css';


export default function TopNav() {
    return (
        <div classname={styles.navbar}>
            <NavLinks />
        </div>
    );
}