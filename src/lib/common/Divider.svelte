<script lang="ts">
	import clsx from 'clsx';

	export let vertical: boolean = false;
</script>

<div class={clsx('divider before:bg-primary after:bg-primary', vertical && 'divider-horizontal')}>
	<slot />
</div>
