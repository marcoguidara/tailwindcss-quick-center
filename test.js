const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      quickCenter: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your plugin.
      quickCenter: [],
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind components', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('component classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`    
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
    `);
  });
});

test('variants can be customized', () => {
  return generatePluginCss({
    theme: {
      screens: {
        sm: '640px',
      },
    },
    variants: {
      quickCenter: ['hover'],
    },
  }).then(css => {
    expect(css).toMatchCss(`
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
    `);
  });
});
