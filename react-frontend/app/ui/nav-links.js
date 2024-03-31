'use client'

import styles from './nav.module.css';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Git Hub', href: 'https://github.com/Gabriel-J-Young'},
    {name: 'Contact', href: '/contact'},
    {name: 'Hiking', href: '/hiking'},
    {name: 'All Work', href: '/all_work'},
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                key={link.name}
                href={link.href}
                className={clsx(styles.nav, {
                    [styles['nav-selected']] : pathname === link.href
                })}
                >
                    <p>{link.name}</p>
                </Link>
            )
        })}
       </>
    );
}