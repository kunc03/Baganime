import React from 'react';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-sky-100 text-sky-700 flex items-center justify-center">
      <div className="flex justify-between items-center w-full px-[10%] font-bold">
        <h1 className="text-2xl">AnimeList</h1>
        <div className="flex gap-2">
          <Button stylesBtn="hover:bg-sky-700 hover:text-sky-50" nameBtn="Daftar" />
          <Button stylesBtn="bg-sky-700 text-sky-50" nameBtn="Masuk" />
        </div>
      </div>
    </div>
  );
}
