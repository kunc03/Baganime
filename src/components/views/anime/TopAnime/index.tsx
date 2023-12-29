// import { GetAnimeResponse } from '@/pages/api/user/anime';
import JkanAnime from '@/lib/jkanAnime';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Propstypes = {
  headerTitle: string;
  linkShowAll: string;
  query?: string;
  className?: string;
  styleTitle?: string;
  // children: React.ReactNode;
};

type animeTypes = {
  title: string;
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
};

const TopAnime = (props: Propstypes) => {
  const { headerTitle, linkShowAll, query, className, styleTitle } = props;
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/top/anime?${query}`)
      .then((res) => res.json())
      .then((response) => setAnimes(response.data));
  }, [query]);

  return (
    <div className="w-full p-4 rounded-lg flex flex-col ring-2 ring-sky-300 bg-sky-100">
      <div className="flex justify-between items-center font-semibold text-sky-700 mb-2">
        <h1 className="">{headerTitle}</h1>
        <Link href={linkShowAll} className="text-xs hover:text-sky-500">
          LIHAT SEMUA
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-5 ">
        {animes?.map((anime: animeTypes, index: number) => (
          <Link href={`/anime/${anime.mal_id}`} key={index} className={`relative w-[13rem] ${className} h-[22rem] rounded-b `}>
            <Image src={anime.images.webp.large_image_url} alt=".." width={250} height={250} className={`rounded w-full h-[18rem] object-cover`} />
            <div className="py-2 text-sky-800 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <h3 className="bg-sky-500 rounded-full text-sky-50 text-[10px] w-5 h-5 flex items-center justify-center p-1">TV</h3>
                <h3 className="bg-sky-500 rounded-full text-sky-50 text-[10px] w-5 h-5 flex items-center justify-center p-1">HD</h3>
              </div>
              <h2 className={`${styleTitle}font-bold truncate`}>{anime.title}</h2>

              {/* <h3 className="text-xs font-bold">Episode {anime.episodes}</h3> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopAnime;
