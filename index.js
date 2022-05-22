const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities, theme, variants }) {
    // Add CSS-in-JS syntax to create utility classes.
    // Docs: https://tailwindcss.com/docs/plugins#adding-utilities
    const utilities = {
      ".center-absolute-y": {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      ".center-absolute-x": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      },
      ".center-absolute": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      ".center-flex-y": {
        display: "flex",
        "flex-direction": "column",
        "justify-content": "center",
      },
      ".center-flex-x": {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      },
      ".center-flex": {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-content": "center",
      },
    };

    addUtilities(utilities, {
      variants: variants('quickCenter'),
    });
  },
  {
    variants: {
      // Default variants for your custom plugin.
      // Docs: https://tailwindcss.com/docs/plugins#variants
      quickCenter: ['responsive'],
    },
  }
);
