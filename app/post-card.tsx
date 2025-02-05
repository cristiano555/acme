import Link from "next/link";
import { MoveRight } from 'lucide-react';

import { TSinglePost } from 'types/posts';
import { formatDate, verifyCategoryColor } from "utils/helpers";

type TPostCardProps = {
  post: TSinglePost;
}

export const PostCard = ({
  post,
}: TPostCardProps) => {
  return (
    <article key={post.id} className="bg-gray-100 rounded-tl-[3.25rem] rounded-br-[3.25rem] pt-12 pb-[3.5rem] px-[2.188rem]">
      <div className="mb-[0.625rem]">
        <span
          className="text-sm font-semibold uppercase italic underline decoration-[0.2rem] underline-offset-[0.25rem]"
          style={{ color: verifyCategoryColor(post.category)}}
        >
          {post.category.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col gap-9">
        <h3 className="text-2xl font-black text-text2 font-extrabold font-playfair h-[6.75rem]">{post.title}</h3>
        <p className="text-xl text-text2 font-bold font-playfair">{formatDate(post.publicationDate)}</p>
        <p className="text-md text-text2 font-sans font-regular line-clamp-3">{post.lead}</p>
        <Link href={`/wpis/${post.id}`} className="text-text2 font-bold font-sans text-m flex gap-2">
          zobacz więcej <MoveRight />
        </Link>
      </div>
    </article>
  );
};
