<script lang="ts" context="module">
  export interface Form {
    email: string;
    phone: string;
    message: string;
  }
</script>

<script lang="ts">
  import Icon from '$lib/common/Icon.svelte';
  import { db } from '$lib/static/firebase';
  import clsx from 'clsx';
  import { addDoc, collection } from 'firebase/firestore';

  type State = 'loading' | 'error' | 'success';

  let email: string = '';
  let phone: string = '';
  let message: string = '';
  let emailInvalid: boolean = false;
  let emailEmpty: boolean = false;
  let messageEmpty: boolean = false;
  let submitClicked: boolean = false;
  let state: State;

  const isValidEmail = (email) => {
    return (
      email &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    );
  };

  const isRequiredFieldEmpty = (value) => {
    return value === undefined || value === null || value === '';
  };

  const onSubmit = () => {
    submitClicked = true;
    emailEmpty = false;
    emailInvalid = false;
    messageEmpty = false;

    if (isRequiredFieldEmpty(email)) {
      emailEmpty = true;
    }

    if (!isValidEmail(email)) {
      emailInvalid = true;
    }

    if (isRequiredFieldEmpty(message)) {
      messageEmpty = true;
    }

    if (emailEmpty || emailInvalid || messageEmpty) {
      return;
    }

    let form: Form = {
      email,
      phone,
      message
    };
    console.log(form);

    // Send form
    state = 'loading';

    addDoc(collection(db, 'contacts'), form)
      .then(() => {
        state = 'success';
        email = '';
        phone = '';
        message = '';
        submitClicked = false;
      })
      .catch((error) => {
        alert(error);
        state = 'error';
      });

    /* const addMessage = httpsCallable(functions, 'sendContactEmail');
    addMessage(form)
      .then(() => {
        state = 'success';
      })
      .catch((error) => {
        state = 'error';
      }); */

    /*  const addMessage = httpsCallable(functions, 'genericEmail');
    addMessage(form)
      .then(() => {
        state = 'success';
      })
      .catch((error) => {
        state = 'error';
      }); */
  };

  /* const sendEmail = (form: Form) => {
    const callable = httpsCallable(functions, 'genericEmail');
    return callable({ text: 'Sending email', subj });
  };

  // Sends email via HTTP. Can be called from frontend code.
  export const genericEmail = functions.https.onCall(async (data, context) => {
    if (!context.auth && !context.auth.token.email) {
      throw new functions.https.HttpsError(
        'failed-precondition',
        'Must be logged with an email address'
      );
    }

    const msg = {
      to: context.auth.token.email,
      from: 'hello@fireship.io',
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: data.subject,
        name: data.text
      }
    };

    await sgMail.send(msg);

    // Handle errors here

    // Response must be JSON serializable
    return { success: true };
  }); */
</script>

<form class="flex flex-wrap my-5" on:submit|preventDefault={onSubmit}>
  <div class="flex flex-col justify-between h-48 mb-5 w-full lg:mr-[10px] lg:w-[calc(50%-10px)]">
    <div class="form-control">
      <label class="label" for="email">
        <span class="label-text">Sähköpostisi</span>
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
    <div class="form-control">
      <label class="label" for="phone">
        <span class="label-text">Puhelinnumerosi (ei pakollinen)</span>
      </label>
      <input class="input input-bordered" type="tel" id="phone" name="phone" bind:value={phone} />
    </div>
  </div>
  <div class="flex flex-col gap-5 w-full lg:ml-[10px] lg:w-[calc(50%-10px)]">
    <div class="form-control h-48">
      <label class="label" for="message">
        <span class="label-text">Viestisi</span>
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
            <p>Tapahtui virhe eikä viestiä lähetetty! Laita ihmeessä viestiä silti LinkedIn:ssä.</p>
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
          <Icon type="done" style={'text-white'} />
        {:else}
          Lähetä viesti
        {/if}
      </button>
    </div>
  </div>
</form>
