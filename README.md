<div align="center">
  <img src="./.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Ionic Tailwind CSS Plugin</h1>
  <p>Tailwind utilities for styling Ionic components</p>

  <p>
    <a href="https://github.com/o2dependent/tailwind-plugin-ionic/actions"><img src="https://img.shields.io/github/workflow/status/o2dependent/tailwind-plugin-ionic/Node.js%20CI" alt="Build Status"></a>
    <a href="https://github.com/o2dependent/tailwind-plugin-ionic/blob/main/LICENSE"><img src="https://img.shields.io/github/license/o2dependent/tailwind-plugin-ionic" alt="License"></a>
  </p>
</div>

# tailwind-plugin-ionic

This is a collection of Tailwindcss utils for styling Ionic components.

## Installation

Install the plugin from npm:

```sh
yarn add -D tailwind-plugin-ionic
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-plugin-ionic'),
    // ...
  ],
}
```

## Usage

Any Ionic css variables that can used can be added using the utilities that come with Tailwindcss. All you have to do is prefix the type with `ion-` then add your option.

```html
<ion-card class="ion-bg-black ion-text-black">
  <ion-card-header>
    <ion-card-subtitle class="ion-text-red-500">Card Subtitle</ion-card-subtitle>
    <ion-card-title class="ion-text-blue-300">Card Title</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or
    spend a week in the woods. Wash your spirit clean.
  </ion-card-content>
</ion-card>
```
