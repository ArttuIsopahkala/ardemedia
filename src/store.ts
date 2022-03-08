import { Writable, writable } from 'svelte/store';
import { browser } from '$app/env';
import { defaultOptions, Options } from '$lib/static/firestore';

// From database

export const options: Writable<Options> = writable(defaultOptions);
export const posts = writable([]);
export const likesData = writable({});

// For app
export const likedPosts: Writable<string[]> = writable(
  (browser && JSON.parse(localStorage.getItem('likedPosts'))) || []
);

likedPosts.subscribe((val) => {
  if (browser) return (localStorage.likedPosts = JSON.stringify(val));
});

export const gdprSettings = writable(
  (browser && JSON.parse(localStorage.getItem('gdprSettings'))) || {
    show: true,
    analytics: false,
    version: 0
  }
);

gdprSettings.subscribe((val) => {
  if (browser) return (localStorage.gdprSettings = JSON.stringify(val));
});
