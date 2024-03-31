import Link from 'next/link'; //maybe use this to hardcode home button on left
import NavLinks from '@/app/ui/nav-links';

export default function TopNav() {
    return (
        <div className='p-3'>
            <div className="flex float-left h-fit">
                <Link
                    key={'Home'}
                    href={'/'}
                    className='flex rounded-md bg-gray-50 p-3 mx-2 text-md hover:bg-emerald-100 hover:text-emerald-600'
                    >{/* <LinkIcon className="w-6" /> //dont show text on mobile*/}
                    <p>{'Home'}</p> 
                </Link>
            </div>
            
            <div className="flex justify-end space-x-2">    
                <NavLinks />
            </div>
        </div>
            
    );
}
