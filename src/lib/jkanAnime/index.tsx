import { AsyncResource } from 'async_hooks';
import { useEffect, useState } from 'react';

export const AnimesResponse = (resource: string, query: string) => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/${resource}?${query}`)
      .then((res) => res.json())
      .then((response) => setAnimes(response.data));
  }, [resource, query]);

  return animes;
};

export const AnimeEntryResponse = (resource: string) => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/${resource}`)
      .then((res) => res.json())
      .then((response) => setAnimes(response.data));
  }, [resource]);

  return animes;
};
