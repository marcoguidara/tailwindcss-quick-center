# Tailwind Quick Center

> A plugin that provides utilities for centering an element on x/y axis.
<br/>
<br/>
## The problem 🤔
Centering an element using Tailwindcss classes can rapidly become verbose.
<br/>
<br/>
## The solution 🚀
Dedicated centering classes that cover the most common situations.
<br/>
<br/>
## Install the plugin from npm:

```
$ npm install tailwindcss-quick-center
```

## Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [require('@marcoguidara/tailwindcss-quick-center')],
};
```

## Usage:
### Centered on both x and y axis
```html
<div class="relative">
  <div class="center-absolute">
    <!-- Centered element -->
  </div>
</div>

<!-- or -->

<div class="center-flex">
  <div><!-- Centered element --></div>
</div>
```

### Centered on the x axis
```html
<div class="relative">
  <div class="center-absolute-x">
    <!-- Centered element -->
  </div>
</div>

<!-- or -->

<div class="center-flex-x">
  <div><!-- Centered element --></div>
</div>
```

### Centered on the y axis
```html
<div class="relative">
  <div class="center-absolute-y">
    <!-- Centered element -->
  </div>
</div>

<!-- or -->

<div class="center-flex-y">
  <div><!-- Centered element --></div>
</div>
```

## Add variants: 

```js
// tailwind.config.js
module.exports = {
  variants: {
    // default 'responsive'
    quickCenter: ['first'],
  },
};
```

## This plugin will generate following CSS:

```css
.center-absolute-y {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.center-absolute-x {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.center-absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center-flex-y {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.center-flex-x {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```

## License

Tailwind Quick Center is licensed under the MIT License.
