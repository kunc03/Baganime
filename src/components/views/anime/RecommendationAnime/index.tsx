// import { GetAnimeResponse } from '@/pages/api/user/anime';
import AnimeLayout from '@/components/layouts/animeLayout';
import { AnimeEntryResponse } from '@/lib/jkanAnime';
import Image from 'next/image';
import Link from 'next/link';

type animeTypes = {
  title: string;
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
};

type animeProps = {
  resource: string;
  query?: string;
  headerTitle: string;
  linkShowAll: string;
  className?: string;
};

type Propstypes = {
  query?: string;
  styleTitle?: string;
  children: React.ReactNode;
};

const SideAnime = (props: animeProps) => {
  const { resource, query, headerTitle, linkShowAll, className } = props;
  const animes = AnimeEntryResponse(`${resource}?${query}`);
  return (
    <>
      <div className="w-full py-4 px-5 rounded-lg flex flex-col ring-2 ring-sky-300 bg-sky-100">
        <div className="">
          <div className="flex justify-between items-center font-semibold text-sky-700 mb-2">
            <h1 className="">{headerTitle}</h1>
            <Link href={linkShowAll} className="text-xs hover:text-sky-500">
              LIHAT SEMUA
            </Link>
          </div>
          <div className={`flex flex-wrap ${className} gap-5 w-full md:justify-between justify-center content-start items-center`}>
            {animes?.map((anime: animeTypes, index: number) => (
              <Link href={`/anime/${anime.mal_id}`} key={index} className={`w-full rounded-b relative`}>
                <Image src={anime.images.jpg.large_image_url} alt=".." width={250} height={250} className={`rounded-lg w-full h-[15rem] object-cover`} />
                <h2 className={`absolute bottom-3 truncate text-center bg-sky-100 text-sky-700 font-semibold w-full py-1 px-2`}>{anime.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideAnime;
