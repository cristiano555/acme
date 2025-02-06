import React from 'react';
import axios from 'axios';

import { PostsSchema } from 'types/posts';
import { API_URL } from 'utils/constans';
import { Categories } from './(partials)/categories';
import { Posts } from './(partials)/posts';
import { ErrorNotification } from '@/components/ui/error-notification';

export default async function EducationalBlog() {
  let posts = [];

  try {
    const response = await axios.get(`${API_URL}/posts`);
    const fetchedPosts = response.data;

    const parsedPosts = PostsSchema.safeParse(fetchedPosts);

    if (!parsedPosts.success) {
      throw new Error('Niewłaściwy format danych');
    }

    posts = parsedPosts.data;
  } catch (error) {
    console.error('Błąd podczas pobierania postów:', error);

    return (
      <ErrorNotification
        title="Blog Edukacyjny"
        content="Nie udało się pobrać danych :("
      />
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-dark-500 mt-12 mb-2 md:mb-12">
          Blog Edukacyjny
        </h1>
      </div>
      <div className="min-h-screen">
        <Categories />
        <Posts posts={posts} />
      </div>
    </>
  );
}
