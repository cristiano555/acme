"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FAVOURITES } from "utils/constans";

type TTitleBar = {
  postId: string
}

export const TitleBar = ({ postId }: TTitleBar) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVOURITES) || "[]") ;
    if (favorites.includes(postId)) {
      setIsFavorite(true);
    }
  }, []);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem(FAVOURITES) || "[]");

    if (favorites.includes(postId)) {
      const updatedFavorites = favorites.filter((id: string) => id !== postId);
      localStorage.setItem(FAVOURITES, JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(postId);
      localStorage.setItem(FAVOURITES, JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[3.125rem] lg:gap-2">
      <Button
        variant="link"
        onClick={() => router.back()}
        className="text-3xl font-bold text-text hover:text-[#8E2F3F] flex items-center gap-4 px-[0rem]"
      >
        <ArrowLeft />
        Blog Edukacyjny
      </Button>
      <Button
        variant="link"
        className="flex items-center gap-2 text-text hover:text-[#8E2F3F] px-[0rem]"
        onClick={handleAddToFavorites}
      >
        {isFavorite ? <Star size={32} className="text-black-600 fill-current" /> : <Star size={32} className="text-black-600" />}
        {isFavorite ? 'usuń z ulubionych' : 'dodaj do ulubionych'}
      </Button>
    </div> 
  )
}
