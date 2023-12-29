import { GetAnimeResponse } from '@/pages/api/user/anime';

const JkanAnime = async () => {
  const anime = await GetAnimeResponse('top/anime', 'limit=5');
  console.log(anime);
  return (
    <div>
      <h1>JkanAnime</h1>
    </div>
  );
};

export default JkanAnime;
