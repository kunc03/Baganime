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
};

const RecommendationAnime = (props: animeProps) => {
  const { resource, query } = props;
  const animes = AnimeEntryResponse(`${resource}`, `${query}`);
  return (
    <>
      <AnimeLayout headerTitle="TERPOPULER" linkShowAll="/top/anime" className="flex-col">
        {animes?.map((anime: animeTypes, index: number) => (
          <Link href={`/anime/${anime.mal_id}`} key={index} className={`w-[12.4rem] h-[22rem] rounded-b `}>
            <Image src={anime.images.jpg.image_url} alt=".." width={250} height={250} className={`rounded w-full h-[18rem] object-cover`} />
            <div className="py-2 text-sky-800 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <h3 className="bg-sky-500 rounded-full text-sky-50 text-[10px] w-5 h-5 flex items-center justify-center p-1">TV</h3>
                <h3 className="bg-sky-500 rounded-full text-sky-50 text-[10px] w-5 h-5 flex items-center justify-center p-1">HD</h3>
              </div>
              <h2 className={`font-bold truncate`}>{anime.title}</h2>

              {/* <h3 className="text-xs font-bold">Episode {anime.episodes}</h3> */}
            </div>
          </Link>
        ))}
      </AnimeLayout>
    </>
  );
};

export default RecommendationAnime;
