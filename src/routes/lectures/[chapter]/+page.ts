import { error } from '@sveltejs/kit';
import { chapters } from '$lib/data/chapters';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const chapter = chapters.find(c => c.id === params.chapter);
  
  if (!chapter) {
    throw error(404, 'Chapter not found');
  }
  
  return {
    chapter
  };
};