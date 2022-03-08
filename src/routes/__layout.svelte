<script lang="ts">
  import { metadataToPost, PostItem, sortByCreatedDate } from '$lib/blog/Post.svelte';
  import GdprBanner from '$lib/common/GdprBanner.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { getLikes, getOptions } from '$lib/static/firestore';
  import { onMount } from 'svelte';
  import '../app.css';
  import { likesData, options, posts } from '../store';
  import '../theme/prism.css';

  onMount(async () => {
    // Load blog posts
    if ($posts.length === 0) {
      const likes = await getLikes();
      likesData.set(likes);

      let localPosts: PostItem[] = await Promise.all(
        Object.entries(import.meta.glob('./blogi/*.md')).map(async ([path, page]) => {
          const { metadata } = await page();
          const slug = path.split('/').pop().split('.').shift();
          const readingTimeInMinutes = metadata.words ? Math.round(metadata.words / 195) : 0;
          let likesCount: number = likes[slug] ? likes[slug] : 0;
          return metadataToPost(slug, metadata, readingTimeInMinutes, likesCount);
        })
      );
      localPosts = sortByCreatedDate(localPosts);

      posts.set(localPosts);
    }

    // Load prices and common data
    const data = await getOptions();
    options.set(data);
  });
</script>

<div class="w-full h-auto">
  <Header />
  <!-- footer 330px + padding bottom 70px = 400px -->
  <main
    class="flex flex-col pt-[60px] bg-base-100 bg-[url('/bg-pattern.svg')] min-h-[calc(100vh-330px)]"
  >
    <slot />
  </main>
  <Footer />
</div>
<GdprBanner />
