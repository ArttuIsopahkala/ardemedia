import { writable } from 'svelte/store';
import { browser } from "$app/env"

// From database
export const availableDate = writable();
export const devPrice = writable();
export const devPriceHigh = writable();

export const designPriceHour = writable();
export const designPricePerFeature = writable();
export const designPriceWithUI = writable();

// For app
export const selectedService = writable('development');

export const gdprVersion = writable();

export const gdprSettings = writable(browser && JSON.parse(localStorage.getItem("gdprSettings")) || {
  show: true,
  analytics: false,
  version: 0
})

gdprSettings.subscribe((val) => {
  if (browser) return (localStorage.gdprSettings = JSON.stringify(val))
})