import { writable } from 'svelte/store';

// From database
export const availableDate = writable('-');
export const devPrice = writable('-');
export const devPriceHigh = writable('-');

export const designPriceHour = writable('-');
export const designPricePerFeature = writable('-');
export const designPriceWithUI = writable('-');

// For app
export const selectedService = writable('development');