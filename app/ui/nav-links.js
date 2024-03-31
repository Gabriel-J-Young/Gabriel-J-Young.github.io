'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
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
            //I don't have icons yet
            //const LinkIcon = link.icon;
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex items-center rounded-md bg-gray-50 p-3 text-md hover:bg-emerald-100 hover:text-emerald-600',
                        {
                            'bg-emerald-100 text-lime-600' : pathname === link.href,
                        },
                    )}
                    >
                {/* <LinkIcon className="w-6" /> //dont show text on mobile*/}
                <p>{link.name}</p> 
                </Link>
            );
        })}
        </>
    );
}