'use client';

import { TSinglePost } from 'types/posts';

export const PostContent = ({ post }: { post: TSinglePost }) => {
  return (
    <article className="lg:mt-[7.5rem] mb-16">
      <h1 className="font-playfair font-bold text-[2.188rem] text-dark-500">
        {post.title}
      </h1>
      <p className="font-sans text-sm text-dark-500 mt-[2.5rem] mb-[2.5rem]">
        {post.lead}
      </p>
      <section
        className="mt-[5rem] post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};
