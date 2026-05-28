import { useStoryblokApi } from '@storyblok/astro';


export function getStoryblokApi() {
  return useStoryblokApi();
}

// export async function getHomePage() {
//   const api = getStoryblokApi();
//   const { data } = await api.get('cdn/stories/home', {
//     version: import.meta.env.DEV ? 'draft' : 'published',
//   });
//   return data.story;
// }
