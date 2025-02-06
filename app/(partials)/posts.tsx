'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { PostsTopBar } from 'app/(partials)/posts-top-bar';
import { PostCard } from 'app/(partials)/post-card';
import { PostsFavourtiesFilter } from 'app/(partials)/posts-favourites-filter';
import { PostsSortFilter } from 'app/(partials)/posts-sort-filter';
import { TPosts } from 'types/posts';
import {
  CATEGORY,
  FAVOURITES,
  SORT,
  NEWEST,
  OLDEST,
  VALID_SORT_VALUES
} from 'utils/constans';

export const Posts = ({ posts }: { posts: TPosts }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get(CATEGORY);
  const favouritesParam = searchParams.get(FAVOURITES);
  let sortParam = searchParams.get(SORT);
  if (sortParam && !VALID_SORT_VALUES.includes(sortParam)) {
    sortParam = NEWEST;
  }
  const [filteredPosts, setFilteredPosts] = useState<TPosts | []>([]);

  useEffect(() => {
    let filtered = posts;

    if (categoryParam) {
      filtered = filtered.filter(
        (post) => post.category.toLowerCase() === categoryParam.toLowerCase()
      );
    }

    if (favouritesParam) {
      const storedFavourites = localStorage.getItem(FAVOURITES);
      if (storedFavourites) {
        const parsedFavourites = JSON.parse(storedFavourites);
        filtered = filtered.filter((post) =>
          parsedFavourites.includes(post.id)
        );
      }
    }

    filtered = filtered.sort((a, b) => {
      return sortParam === OLDEST
        ? new Date(a.publicationDate).getTime() -
            new Date(b.publicationDate).getTime()
        : new Date(b.publicationDate).getTime() -
            new Date(a.publicationDate).getTime();
    });

    setFilteredPosts(filtered);
  }, [categoryParam, favouritesParam, sortParam, posts]);

  const handleTabClick = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value === FAVOURITES) {
      params.set(FAVOURITES, 'true');
    } else {
      params.delete(FAVOURITES);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleRemoveCategory = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete(CATEGORY);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSort = (typeOfSorting: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(SORT, typeOfSorting);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto py-[5.125rem]">
        <div>
          <PostsTopBar
            categoryParam={categoryParam}
            handleRemoveCategory={handleRemoveCategory}
          />
          <div className="flex justify-end gap-[1rem] mb-[3.75rem] lg:mt-[-0.75rem] xl:gap-[11rem] flex-col sm:mb-[2rem] mt-[1rem] md:flex-row">
            <PostsFavourtiesFilter
              handleTabClick={handleTabClick}
              favouritesParam={favouritesParam}
            />
            <PostsSortFilter
              value={sortParam ?? NEWEST}
              onChange={handleSort}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, i) => <PostCard post={post} />)
          ) : (
            <p className="text-gray-500">Brak wpisów spełniających kryteria.</p>
          )}
        </div>
      </div>
    </section>
  );
};
