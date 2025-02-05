import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { categories } from "./constans";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("pl-PL");
}

export const verifyCategoryColor = (postCategory: string) => {
  return categories.filter(item => item.slug === postCategory)[0].color
}

export function darkenColor(hex: string, factor = 0.7) {
  hex = hex.replace(/^#/, '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}