<script lang="ts" context="module">
	export type IconType =
		| ''
		| 'aws'
		| 'firebase'
		| 'react'
		| 'nodejs'
		| 'svelte'
		| 'googlemaps'
		| 'java'
		| 'gwt'
		| 'android'
		| 'facebook'
		| 'google'
		| 'open-in-new'
		| 'calendar'
		| 'marker'
		| 'language'
		| 'clock'
		| 'email'
		| 'done'
		| 'linkedin'
		| 'quote'
		| 'up'
		| 'google-play'
		| 'github'
		| 'youtube'
		| 'recycle'
		| 'tasks'
		| 'cloud'
		| 'security'
		| 'settings'
		| 'compass'
		| 'warehouse'
		| 'brush'
		| 'menu'
		| 'close'
		| 'cookie';
</script>

<script lang="ts">
	import FaAws from 'svelte-icons/fa/FaAws.svelte';
	import FaReact from 'svelte-icons/fa/FaReact.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaNode from 'svelte-icons/fa/FaNode.svelte';
	import FaAndroid from 'svelte-icons/fa/FaAndroid.svelte';
	import MdPolymer from 'svelte-icons/md/MdPolymer.svelte';
	import FaMapMarkedAlt from 'svelte-icons/fa/FaMapMarkedAlt.svelte';
	import FaJava from 'svelte-icons/fa/FaJava.svelte';
	import MdOpenInNew from 'svelte-icons/md/MdOpenInNew.svelte';
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';
	import FaRegCalendarAlt from 'svelte-icons/fa/FaRegCalendarAlt.svelte';
	import FaMapMarkerAlt from 'svelte-icons/fa/FaMapMarkerAlt.svelte';
	import MdSpeakerNotes from 'svelte-icons/md/MdSpeakerNotes.svelte';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import MdDone from 'svelte-icons/md/MdDone.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import MdFormatQuote from 'svelte-icons/md/MdFormatQuote.svelte';
	import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte';
	import FaGooglePlay from 'svelte-icons/fa/FaGooglePlay.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import FaRecycle from 'svelte-icons/fa/FaRecycle.svelte';
	import FaTasks from 'svelte-icons/fa/FaTasks.svelte';
	import MdCloud from 'svelte-icons/md/MdCloud.svelte';
	import MdSecurity from 'svelte-icons/md/MdSecurity.svelte';
	import MdSettings from 'svelte-icons/md/MdSettings.svelte';
	import FaDraftingCompass from 'svelte-icons/fa/FaDraftingCompass.svelte';
	import FaWarehouse from 'svelte-icons/fa/FaWarehouse.svelte';
	import MdBrush from 'svelte-icons/md/MdBrush.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import FaCookieBite from 'svelte-icons/fa/FaCookieBite.svelte';
	import clsx from 'clsx';
	import LazyImage from './LazyImage.svelte';

	export let type: IconType = '';
	export let size: number = 30;
	export let color: string = 'text-black';
	export let style: string = '';
</script>

<div class={clsx(`w-[${size}px] h-[${size}px] flex justify-center items-center ${style} ${color}`)}>
	{#if type === 'aws'}
		<FaAws />
	{:else if type === 'firebase'}
		<LazyImage style="w-full h-full object-contain" src="firebase.png" alt="firebase logo" />
	{:else if type === 'react'}
		<FaReact />
	{:else if type === 'nodejs'}
		<FaNode />
	{:else if type === 'svelte'}
		<LazyImage style="w-full h-full object-contain" src="svelte.png" alt="svelte logo" />
	{:else if type === 'googlemaps'}
		<FaMapMarkedAlt />
	{:else if type === 'java'}
		<FaJava />
	{:else if type === 'gwt'}
		<MdPolymer />
	{:else if type === 'android'}
		<FaAndroid />
	{:else if type === 'open-in-new'}
		<MdOpenInNew />
	{:else if type === 'facebook'}
		<FaFacebook />
	{:else if type === 'google'}
		<FaGoogle />
	{:else if type === 'calendar'}
		<FaRegCalendarAlt />
	{:else if type === 'marker'}
		<FaMapMarkerAlt />
	{:else if type === 'language'}
		<MdSpeakerNotes />
	{:else if type === 'clock'}
		<FaRegClock />
	{:else if type === 'email'}
		<MdEmail />
	{:else if type === 'done'}
		<MdDone />
	{:else if type === 'linkedin'}
		<FaLinkedin />
	{:else if type === 'quote'}
		<MdFormatQuote />
	{:else if type === 'up'}
		<MdKeyboardArrowUp />
	{:else if type === 'google-play'}
		<FaGooglePlay />
	{:else if type === 'github'}
		<FaGithubSquare />
	{:else if type === 'youtube'}
		<FaYoutube />
	{:else if type === 'recycle'}
		<FaRecycle />
	{:else if type === 'tasks'}
		<FaTasks />
	{:else if type === 'cloud'}
		<MdCloud />
	{:else if type === 'security'}
		<MdSecurity />
	{:else if type === 'settings'}
		<MdSettings />
	{:else if type === 'compass'}
		<FaDraftingCompass />
	{:else if type === 'warehouse'}
		<FaWarehouse />
	{:else if type === 'brush'}
		<MdBrush />
	{:else if type === 'menu'}
		<MdMenu />
	{:else if type === 'close'}
		<MdClose />
	{:else if type === 'cookie'}
		<FaCookieBite />
	{/if}
</div>
