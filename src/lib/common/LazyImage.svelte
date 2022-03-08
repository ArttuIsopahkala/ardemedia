<script>
	export let src;
	export let alt;
	export let style = '';
	import { onMount } from 'svelte';
	import lazyLoad from '$lib/static/lazyLoad';
	import clsx from 'clsx';
	let loaded = false;
	let thisImage;
	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img
	{src}
	{alt}
	class={clsx(style, 'transition-opacity', loaded ? 'opacity-100' : 'opacity-0')}
	class:loaded
	bind:this={thisImage}
	use:lazyLoad={src}
	loading="lazy"
/>
