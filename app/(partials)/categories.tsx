'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'utils/lib/swiper.css';

import { categories, CATEGORY } from 'utils/constans';
import { CategoryCard } from './category-card';

export const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get(CATEGORY);

  const handleCategoryClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get(CATEGORY) === slug) {
      params.delete(CATEGORY);
    } else {
      params.set(CATEGORY, slug);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-gray-100">
      <div className="container pt-[3.5rem] pb-[7.125rem] md:pb-[7.5rem]">
        <h2 className="text-2xl font-bold text-dark-500 mb-[3.125rem] hidden sm:block">
          Kategorie
        </h2>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <CategoryCard
              category={category}
              active={currentCategory === category.slug}
              action={handleCategoryClick}
            />
          ))}
        </div>
        <div className="md:hidden relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            slidesPerView="auto"
            freeMode
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryCard
                  category={category}
                  active={currentCategory === category.slug}
                  action={handleCategoryClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
