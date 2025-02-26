import axios from 'axios';

import { API_URL } from 'utils/constans';
import { SinglePostSchema } from 'types/posts';
import { ErrorNotification } from '@/components/ui/error-notification';
import { TitleBar } from './(partials)/title-bar';
import { PostContent } from './(partials)/post-content';


type TBlogPostParams = Promise<{ id: string }>;

export default async function BlogPost({ params }: { params:  TBlogPostParams }) {
  const { id }: {id: string} = await params;
  let post

  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    const parsedPost = SinglePostSchema.safeParse(response.data);

    if (!parsedPost.success) {
      throw new Error('Niewłaściwy format danych');
    }

    post = parsedPost.data;
  } catch (error) {
    console.error(error);

    return (
      <ErrorNotification
        title={`Wpis ${id}`}
        content="Nie udało się pobrać danych :("
      />
    );
  }

  return (
    <div className="container w-full lg:pr-[26.25rem]">
      <div className="mt-[3.75rem] mb-8">
        <TitleBar postId={id} />
      </div>
      <PostContent post={post} />
    </div>
  );
}
