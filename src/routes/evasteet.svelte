<script lang="ts">
	import Container from '$lib/common/Container.svelte';
	import Icon from '$lib/common/Icon.svelte';
	import Button from '$lib/common/Button.svelte';
	import { GdprSettings } from '$lib/common/GdprBanner.svelte';
	import { gdprSettings } from '../store';

	let currentSettings: GdprSettings = $gdprSettings;

	$: if ($gdprSettings) {
		currentSettings = $gdprSettings;
	}

	const openCookieBanner = () => {
		let newSettings: GdprSettings = {
			...currentSettings,
			show: true
		};
		gdprSettings.set(newSettings);
	};
</script>

<svelte:head>
	<title>Evästepolitiikka | Arde Media</title>
</svelte:head>

<Container>
	<div>
		<div class="flex flex-row items-center">
			<h1 class="py-5 mr-5">Evästepolitiikka</h1>
			<Icon type="cookie" />
		</div>
		<h2 class="py-5">Mitä evästeet ovat?</h2>
		<p>
			Evästeet ovat pieniä tietoa sisältäviä tekstitiedostoja, jotka verkkosivusto luo
			tietokoneelle. Evästeiden avulla voidaan mm. kerätä anonyymejä kävijätilastoja sekä tunnistaa
			käyttäjä samaksi eri käyntikertojen välillä. Evästeet voivat olla pysyviä tai
			istuntokohtaisia. Istuntokohtainen eväste tallennetaan tietokoneen muistiin siihen asti,
			kunnes suljet selaimesi tai istunto päättyy. Pysyvä eväste jää tietokoneeseen, kunnes se
			poistetaan selaimesta.
		</p>
		<h2 class="py-5">Miksi evästeitä käytetään?</h2>
		<p>
			Evästeet ovat hyödyllisiä sekä käyttäjälle että sivuston ylläpitäjälle. Evästeet usein tekevät
			sivuston käyttämisestä helpompaa, nopeampaa ja käyttäjäystävällisempää. Tilastolliset evästeet
			auttavat sivuston ylläpitäjää luomaan parempaa sisältöä sivustolle ja näin ollen kehittämään
			sivustoa tehokkaammin.
		</p>
		<h2 class="py-5">Mitä evästeitä tällä sivustolla käytetään?</h2>
		<h3 class="py-5">Liikenteen seuranta verkkosivustolla</h3>
		<p>
			Tällä hetkellä sivusto tallentaa evästeitä ainoastaan <b>Google Analytics for Firebase</b>
			-työkalua varten. Evästeiden avulla Analytics kerää anonyymia dataa vierailijoiden käyttäytymisestä
			sivustolla. Tämän avulla käyttäjien toimintaa voidaan seurata sivustolla, jonka avulla sisällöstä
			voidaan luoda kiinnostavampaa ja sivustoa voidaan kehittää tehokkaammin. Jos et salli näitä evästeitä,
			vierailuasi sivustolla ei voida seurata.
			<br />
			<b
				>Näihin evästeisiin ei tallenneta tunnistettavia henkilötietoja eikä tunnisteita käytetä
				mainonnan kohdentamiseen.</b
			>
		</p>
		<h3 class="py-5">Kolmannen osapuolen evästeet</h3>
		<p>
			Sivustolla ei käytetä kolmannen osapuolen evästeitä kävijäseurantaan tai mainontaan.
			Sivustolla saatetaan tulevaisuudessa käyttää evästeitä eri tarkoituksiin seuraavien palvelujen
			osalta:
			<br />
			&#8226; Youtube (Upotetun videon katselutiedot)
			<br />
			&#8226; SendGrid (Sähköpostin lähetystiedot yhteydenottolomakkeella)
			<br />
			Evästeisiin liittyvät muutokset kirjataan evästepolitiikkaan eli tähän dokumenttiin, käyttäjä saa
			tiedon uusista evästeistä ja saa päättää hyväksyykö ne.
		</p>
		<h2 class="py-5">Evästeiden hallinta</h2>
		<p>
			Sivustolle tullessa käyttäjältä pyydetään lupaa käyttää evästeitä. Oletuksena käytössä ovat
			vain pakolliset evästeet, jotka vaaditaan sivuston tietoturvan ja toiminnan mahdollistamiseen.
			Muut evästeet käyttäjä voi hyväksyä tai estää. Lisätietoa evästeitä ja ohjeita selaimen
			evästeiden hallintaan löydät osoitteesta
			<a
				class="link"
				rel="noreferrer nofollow noopener"
				href="https://www.aboutcookies.org/"
				target="_blank">aboutcookies.org</a
			>.
		</p>
		<Button
			text="Muuta evästeasetuksia"
			secondary={true}
			outlined={false}
			style="my-3"
			onClick={openCookieBanner}
		/>
	</div>
</Container>
