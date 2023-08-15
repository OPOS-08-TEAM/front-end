'use client';

import Image from 'next/image';

import { IMAGE_PATH } from '@/constants';

export const Gallery = () => {
  return (
    <div className="flex flex-row overflow-scroll bg-red">
      {[1, 2, 3, 4, 5, 6, 2, 3, 4, 56, 7, 7, 7, 7, 67, 6, 5, 4].map((e) => {
        return (
          <Image
            key={e}
            src={`${IMAGE_PATH}/model/model-1.jpg`}
            alt="model-1"
            width={Number.MAX_SAFE_INTEGER}
            height={Number.MAX_SAFE_INTEGER}
            className="h-full w-full rounded-sm object-cover md:h-96 md:w-1/3"
          />
        );
      })}
    </div>
  );
};
