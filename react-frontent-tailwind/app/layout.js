
import "./globals.css";

import localFont from 'next/font/local';
import TopNav from './ui/topnav';

const casFont = localFont({src: './ui/fonts/Cascadia-Mono-PL-SemiLight-350.otf'});


export const metadata = {
  title: "Gabriel Young's Portfolio",
  description: "Gabriel Young's Portfolio desc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className={casFont.className}>
        <div className='bg-[#b99672]'>
          <TopNav />
        </div>
          { children }
      </div>
    </html>
  );
}
