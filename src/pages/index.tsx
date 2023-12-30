import RecommendationAnime from '@/components/views/anime/RecommendationAnime';
import TopAnime from '@/components/views/anime/TopAnime';
import { Inter } from 'next/font/google';
import Head from 'next/head';
// import TopAnime from './api/anime/topAnime';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`flex min-h-screen flex-col items-center px-28 py-6 ${inter.className}`}>
        <TopAnime resource="top/anime" query="limit=5" />

        <div className="mt-6 flex gap-5 justify-between w-full">
          <div className="w-[42.3rem]">
            <TopAnime resource="seasons/now" query="limit=3" />
          </div>
          <div className="w-[26.5rem]">
            <RecommendationAnime resource="recommendations/anime" />
          </div>
        </div>
        {/* 
        <div>
          <AnimeLayout headerTitle="SEDANG TAYANG" linkShowAll="/top/anime">
            <ViewAnime resource="recommendations/anime" />
          </AnimeLayout>
        </div> */}
      </main>
    </>
  );
}
