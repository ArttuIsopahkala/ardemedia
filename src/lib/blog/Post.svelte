<script context="module" lang="ts">
  export interface PostItem {
    title: string;
    description: string;
    url: string;
    thumbnail: string;
    created: Date;
    updated: Date;
    categories: string[];
    readingTimeInMinuntes: number;
    likes: number;
  }

  export const metadataToPost = (
    slug: string,
    metadata: any,
    readingTimeInMinuntes: number,
    likes: number
  ): PostItem => {
    let post: PostItem = {
      url: slug,
      categories: metadata.categories,
      created: new Date(metadata.created),
      updated: new Date(metadata.updated),
      description: metadata.description,
      title: metadata.title,
      thumbnail: metadata.thumbnail,
      readingTimeInMinuntes,
      likes
    };
    return post;
  };

  export const sortByCreatedDate = (posts: PostItem[]) => {
    return posts.sort((item1, item2) => item2.created.getTime() - item1.created.getTime());
  };
</script>

<script lang="ts">
  import Icon from '$lib/common/Icon.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import ROUTES from '$lib/static/routes';
  import { fade } from 'svelte/transition';
  import Category from './Category.svelte';

  export let post: PostItem;
</script>

<a
  href={ROUTES.blog + '/' + post.url}
  in:fade={{ duration: 300 }}
  class="flex flex-row flex-wrap shadow-md bg-base-100 hover:shadow-lg transition-opacity w-full cursor-pointer min-h-[300px]"
>
  <figure class="p-3 md:w-5/12 w-full flex justify-center items-center">
    <LazyImage
      style="object-cover border w-full h-full max-h-[300px]"
      src={post.thumbnail ? '/thumbnails/' + post.thumbnail : '/laptop.jpg'}
      alt="esikatselu"
    />
  </figure>
  <div class="md:w-7/12 w-full flex flex-row p-3">
    <div class="flex flex-col justify-between w-full">
      <div class="flex flex-col">
        <h2 class="flex-start normal-case hover:text-primary mb-4">{post.title}</h2>
        <p>
          {post.description}
        </p>
      </div>
      <div class="flex flex-row justify-between items-center text-sm mt-5">
        <div class="flex flex-wrap">
          {#each post.categories as category}
            <Category {category} />
          {/each}
        </div>
        <div class="flex flex-col">
          <p class="text-sm">{post.created.toLocaleDateString('fi-FI')} &#8226; {post.readingTimeInMinuntes} min</p>
        </div>
      </div>
    </div>
    <div class="flex items-center pl-3">
      <Icon type="up" style={'w-14 h-14 btn btn-circle btn-ghost rotate-90 transition-all'} />
    </div>
  </div>
</a>
