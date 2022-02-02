import { writable } from 'svelte/store';

export const availableDate = writable('1.2.2022');
export const devPrice = writable('70€ / h');
export const devPriceHigh = writable('80€ / h');

export const designPriceHour = writable('60€ / h');
export const designPriceFeature = writable('50€ / ominaisuus');
export const designPriceWithUI = writable('+ 50€ UI-kuvan kanssa');

export const selectedService = writable('development');