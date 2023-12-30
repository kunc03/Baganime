import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Propstypes = {
  headerTitle: string;
  linkShowAll: string;
  query?: string;
  className?: string;
  styleTitle?: string;
  children: React.ReactNode;
};

const AnimeLayout = (props: Propstypes) => {
  const { headerTitle, linkShowAll, children, className } = props;
  return (
    <div className="w-full py-4 px-5 rounded-lg flex flex-col ring-2 ring-sky-300 bg-sky-100">
      <div className="">
        <div className="flex justify-between items-center font-semibold text-sky-700 mb-2">
          <h1 className="">{headerTitle}</h1>
          <Link href={linkShowAll} className="text-xs hover:text-sky-500">
            LIHAT SEMUA
          </Link>
        </div>
        <div className={`flex flex-wrap ${className} gap-5 w-full md:justify-between justify-center content-start items-center`}>{children}</div>
      </div>
    </div>
  );
};

export default AnimeLayout;
