'use client';

import { X } from 'lucide-react';

type TPostsTopBar = {
  categoryParam: string | null;
  handleRemoveCategory: () => void;
};

export const PostsTopBar = ({
  categoryParam,
  handleRemoveCategory
}: TPostsTopBar) => {
  return (
    <div className="flex">
      <h2 className="text-2xl font-bold text-dark-500 leading-[2rem]">Wpisy</h2>
      {categoryParam && (
        <div className="flex items-center gap-2 mt-[0.125rem] ml-[2.25rem]">
          <p className="font-poppins text-sm font-bold text-highlighted underline decoration-[0.2rem] underline-offset-[0.25rem]">
            {categoryParam.toUpperCase()}
          </p>
          <button onClick={handleRemoveCategory} className="text-gray-500">
            <X size={14} stroke="black" strokeWidth={4} />
          </button>
        </div>
      )}
    </div>
  );
};
