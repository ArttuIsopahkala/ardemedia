<script lang="ts" context="module">
	export interface Form {
		name: string;
		email: string;
		message: string;
	}
</script>

<script lang="ts">
	import Icon from '$lib/common/Icon.svelte';
	import { functions } from '$lib/static/firebase';
	import clsx from 'clsx';
	import { httpsCallable } from 'firebase/functions';

	type State = 'loading' | 'error' | 'success';

	let name: string = '';
	let email: string = '';
	let message: string = '';
	let nameEmpty: boolean = false;
	let emailInvalid: boolean = false;
	let emailEmpty: boolean = false;
	let messageEmpty: boolean = false;
	let submitClicked: boolean = false;
	let state: State;

	const isValidEmail = (email?: string) => {
		return (
			email &&
			email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		);
	};

	const isRequiredFieldEmpty = (value?: null | string) => {
		return value === undefined || value === null || value === '';
	};

	const onSubmit = () => {
		submitClicked = true;
		nameEmpty = false;
		emailEmpty = false;
		emailInvalid = false;
		messageEmpty = false;

		if (isRequiredFieldEmpty(name)) {
			nameEmpty = true;
		}

		if (isRequiredFieldEmpty(email)) {
			emailEmpty = true;
		}

		if (!isValidEmail(email)) {
			emailInvalid = true;
		}

		if (isRequiredFieldEmpty(message)) {
			messageEmpty = true;
		}

		if (nameEmpty || emailEmpty || emailInvalid || messageEmpty) {
			return;
		}

		let form: Form = {
			name,
			email,
			message
		};

		// Send form
		state = 'loading';

		const addMessage = httpsCallable(functions, 'sendContactEmail');
		addMessage(form)
			.then(() => {
				state = 'success';
				email = '';
				name = '';
				message = '';
				submitClicked = false;
			})
			.catch((error) => {
				console.log(error);
				state = 'error';
			});

		// Add contact to database?
		/*  addDoc(collection(db, 'contacts'), form)
      .then(() => {
        state = 'success';
        email = '';
        name = '';
        message = '';
        submitClicked = false;
      })
      .catch((error) => {
        state = 'error';
      }); */
	};
</script>

<form class="flex flex-wrap my-5" on:submit|preventDefault={onSubmit}>
	<div class="flex flex-col justify-between h-48 mb-5 w-full lg:mr-[10px] lg:w-[calc(50%-10px)]">
		<div class="form-control">
			<label class="label" for="name">
				<span class="label-text">Nimi</span>
			</label>
			<input
				class={clsx(
					'input input-bordered',
					submitClicked && isRequiredFieldEmpty(name) && 'textarea-error'
				)}
				type="text"
				id="name"
				name="name"
				bind:value={name}
			/>
			{#if submitClicked && isRequiredFieldEmpty(name)}
				<label class="label" for="name">
					<span class="label-text-alt text-error">Täytä nimi</span>
				</label>
			{/if}
		</div>
		<div class="form-control">
			<label class="label" for="email">
				<span class="label-text">Sähköposti</span>
			</label>
			<input
				class={clsx(
					'input input-bordered',
					submitClicked && (!isValidEmail(email) || isRequiredFieldEmpty(email)) && 'input-error'
				)}
				type="email"
				id="email"
				name="email"
				bind:value={email}
			/>
			{#if submitClicked && (!isValidEmail(email) || isRequiredFieldEmpty(email))}
				<label class="label" for="email">
					<span class="label-text-alt text-error">
						{#if isRequiredFieldEmpty(email)}
							Täytä sähköposti
						{:else if !isValidEmail(email)}
							Virheellinen sähköposti
						{/if}
					</span>
				</label>
			{/if}
		</div>
	</div>
	<div class="flex flex-col gap-5 w-full lg:ml-[10px] lg:w-[calc(50%-10px)]">
		<div class="form-control h-48">
			<label class="label" for="message">
				<span class="label-text">Viesti</span>
			</label>
			<textarea
				class={clsx(
					'textarea h-full textarea-bordered',
					submitClicked && isRequiredFieldEmpty(message) && 'textarea-error'
				)}
				id="message"
				name="message"
				bind:value={message}
			/>
			{#if submitClicked && isRequiredFieldEmpty(message)}
				<label class="label" for="message">
					<span class="label-text-alt text-error">Täytä viesti</span>
				</label>
			{/if}
		</div>
		<div class="flex items-center self-end">
			{#if state === 'error'}
				<div class="alert alert-error">
					<div class="flex-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-6 h-6 mx-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
							/>
						</svg>
						<p>
							Tapahtui virhe eikä viestiä lähetetty! Vaihtoehtoisesti laita viestiä LinkedIn:ssä.
						</p>
					</div>
				</div>
			{:else if state === 'success'}
				<div class="alert alert-success">
					<div class="flex-1">
						<p>Viesti lähetettiin onnistuneesti!</p>
					</div>
				</div>
			{/if}
			<button
				type="submit"
				class={clsx(
					'btn text-base btn-primary w-fit ml-5',
					(state === 'success' || state === 'loading') && 'btn-disabled',
					state === 'loading' && 'loading',
					state === 'success' && 'btn-success'
				)}
			>
				{#if state === 'success'}
					<Icon type="done" color={'text-white'} />
				{:else}
					Lähetä viesti
				{/if}
			</button>
		</div>
	</div>
</form>
