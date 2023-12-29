// import { Children, useEffect, useState } from 'react';

import { set } from 'firebase/database';
import { useEffect, useState } from 'react';

// type Propstypes = {
//   resource: string;
//   query?: string;
//   animesData: any;
// };

// type animeTypes = {
//   title: string;
//   mal_id: number;
//   images: {
//     webp: {
//       image_url: string;
//       small_image_url: string;
//       large_image_url: string;
//     };
//   };
//   episodes: number;
// };

// export async function GetAnimeResponse(props: Propstypes) {
//   const { resource, query } = props;
//   const [animes, setAnimes] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.jikan.moe/v4/${resource}?${query}`)
//       .then((res) => res.json())
//       .then((response) => setAnimes(response.data));
//   }, [resource, query]);

//   animes.map((anime: animeTypes) => {
//     return anime;
//   });
// }

export function GetAnimeResponse(resource: string, query: string) {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/${resource}?${query}`)
      .then((res) => res.json())
      .then((response) => setAnimes(response.data));
  }, [resource, query]);
}
