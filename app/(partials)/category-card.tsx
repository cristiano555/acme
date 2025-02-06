import Image from 'next/image';

import { TSingleCategory } from 'types/category';
import { darkenColor } from 'utils/helpers';

type TCategoryCardProps = {
  category: TSingleCategory;
  active: boolean;
  action: (slug: string) => void;
};

export const CategoryCard = ({
  category,
  active,
  action
}: TCategoryCardProps) => {
  return (
    <button
      key={category.id}
      onClick={() => action(category.slug)}
      className="relative overflow-hidden group h-[28.6rem] rounded-tl-[3.75rem] rounded-br-[3.75rem] block transition-all duration-300 mx-auto w-[82%] md:w-full"
      style={
        active
          ? {
              outline: `6px solid ${darkenColor(category.color)}`,
              boxShadow: `0 0 10px ${darkenColor(category.color)}, 0 0 20px #0000004D`
            }
          : {}
      }
    >
      <div className="relative h-[14.3rem]">
        <Image
          src={`/images/${category.image}`}
          alt={category.name}
          fill
          className="object-cover"
        />
      </div>

      <div
        className="relative h-[14.3rem] w-full pt-[2.75rem] align-center"
        style={{ backgroundColor: category.color }}
      >
        <span
          className="text-sm font-bold"
          style={{ color: category.textColor }}
        >
          {category.name.toUpperCase()}
        </span>
        <Image
          src={`/images/${category.icon}`}
          alt={category.name}
          width={100}
          height={100}
          className="h-auto w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover mt-[0.25rem]"
        />
      </div>
    </button>
  );
};
