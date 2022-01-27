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

  type IconType =
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
    | 'open-in-new';
  export let type: IconType = '';
  export let size: number = 30;
</script>

<div class="w-[{size}px] h-[{size}px] text-black flex justify-center items-center">
  {#if type === 'aws'}
    <FaAws />
  {:else if type === 'firebase'}
    <img src="firebase.png" alt="firebase" class="w-full h-full object-contain" />
  {:else if type === 'react'}
    <FaReact />
  {:else if type === 'nodejs'}
    <FaNode />
  {:else if type === 'svelte'}
    <img src="svelte.png" alt="svelte" class="w-full h-full object-contain" />
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
  {/if}
</div>
