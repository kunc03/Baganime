import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from 'next/font/google';
import { useRouter } from 'next/router';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const disableNavbar = ['auth', 'admin'];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div className={quicksand.className}>
      {!disableNavbar.includes(pathname.split('/')[1]) && <Navbar />}
      <Component {...pageProps} />
    </div>
  );
}
