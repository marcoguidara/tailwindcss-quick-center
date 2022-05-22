# Tailwind Quick Center

> A plugin that provides utilities for centering an element on x/y axis.

## Install the plugin from npm:

```
$ npm install tailwindcss-quick-center
```

## Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [

    require("@marcoguidara/tailwindcss-quick-center"),

  ],
};
```

## This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## Add variants:

```js
// tailwind.config.js
module.exports = {
  variants: {
    quickCenter: ['hover'],
  },
};
```

## License

Tailwind Quick Center is licensed under the MIT License.