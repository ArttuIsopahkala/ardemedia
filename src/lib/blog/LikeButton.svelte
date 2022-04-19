<script lang="ts">
  import { page } from '$app/stores';
  import Spinner from '$lib/common/Spinner.svelte';
  import { functions } from '$lib/static/firebase';
  import clsx from 'clsx';
  import { httpsCallable } from 'firebase/functions';
  import { likedPosts, likesData } from '../../store';

  const slug = $page.path.split('/').pop();

  let likesCount: number;
  let likeClicked = false;
  let likeDisabled: boolean = false;
  let localLikedPosts: string[];
  let loading: boolean = false;

  likedPosts.subscribe((localLikes) => {
    localLikedPosts = localLikes;
    likeDisabled = localLikes.includes(slug) || likeClicked;
  });

  likesData.subscribe((databaseLikes) => {
    likesCount = databaseLikes[slug] || 0;
  });

  const handleClick = () => {
    if (!likeDisabled) {
      loading = true;
      const addLike = httpsCallable(functions, 'addLike');
      addLike(slug).then(() => {
        likedPosts.set([...localLikedPosts, slug]);
        // Add manually like to store, because cloud function update is slow
        const newLikes = { ...$likesData };
        newLikes[slug] = likesCount + 1;
        likesData.set(newLikes);
        loading = false;
      });
    }
    likeClicked = true;
  };
</script>

<div class="stats shadow-md bg-base-100 mt-5">
  <div class="stat">
    {#if loading}
      <div class="stat-figure ml-5">
        <Spinner />
      </div>
    {:else}
      <div
        class={clsx(
          'stat-figure text-primary ml-5 btn btn-circle btn-ghost',
          likeDisabled && 'btn-disabled'
        )}
        on:click={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={likeDisabled ? '#F89B00' : 'none'}
          viewBox="0 0 24 24"
          class="inline-block w-8 h-8 stroke-current hover:fill-primary"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    {/if}
    <h4 class="">Jätä tykkäys!</h4>
    <div class="stat-value text-primary">{likesCount}</div>
  </div>
</div>
