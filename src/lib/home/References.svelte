<script lang="ts">
	import Icon from '$lib/common/Icon.svelte';
	import LazyImage from '$lib/common/LazyImage.svelte';
</script>

<div id="company" class="flex flex-col">
	<h1 class="py-5">Asiakkaan suusta</h1>
	<div class="p-5 card shadow-md max-w-2xl bg-base-100">
		<div class="flex flex-row justify-between mb-4">
			<div class="flex items-center flex-row">
				<LazyImage style="h-[60px] w-[60px]" src={'igl-logo.png'} alt="IGL logo" />
				<p class="ml-4 text-textDark font-semibold">IGL-Technologies Oy</p>
			</div>
			<span class="w-[60px] h-[60px] self-end">
				<Icon type="quote" />
			</span>
		</div>
		<p class="italic mb-4">
			Minulla oli ilo työskennellä Artun kanssa eParking.fi-palvelumme back-endissä. Artun tekemät
			parannukset taustapalveluihin nostivat merkittävästi yrityksemme tuottavuustasoa.
		</p>
		<p class="text-primary font-semibold">Evgeni Gordejev</p>
		<span>Teknologiajohtaja</span>
	</div>
</div>
