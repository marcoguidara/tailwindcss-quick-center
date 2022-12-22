const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addComponents, theme }) {
    // If your plugin requires user config,
    // you can access these options here.
    // Docs: https://tailwindcss.com/docs/plugins#exposing-options
    const options = theme('quickCenter');

    // Add CSS-in-JS syntax to create utility classes.
    // Docs: https://tailwindcss.com/docs/plugins#adding-utilities
    const components = {
      '.center-absolute-y': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '.center-absolute-x': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      '.center-absolute': {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
      '.center-flex-y': {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
      },
      '.center-flex-x': {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
      },
      '.center-flex': {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
      },
    };

    // Conditionally add utility class based on user configuration.
    if (options.YOUR_PLUGIN_CUSTOM_OPTION) {
      components['.custom-utility-class'] = {
        'background-color': 'red',
      };
    }

    addComponents(components);
  },
  {
    theme: {
      // Default options for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#exposing-options
      quickCenter: {
        YOUR_PLUGIN_CUSTOM_OPTION: false,
      },
    },
    variants: {
      // Default variants for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#variants
      quickCenter: ['responsive'],
    },
  }
);
