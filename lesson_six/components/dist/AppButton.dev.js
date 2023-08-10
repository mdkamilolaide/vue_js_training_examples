'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _default = {
  // Disabled button if processing is true
  template:
    "\n        <button \n            :class=\"{\n                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,\n                'bg-blue-400 bg-gray hover:bg-blue-200': type === 'primary',\n                'bg-purple-400 bg-gray hover:bg-purple-200': type === 'secondary',\n                'bg-gray-200 bg-gray hover:bg-gray-400': type === 'muted',\n                'is-loading': processing\n            }\"\n            :disabled=\"processing\"\n        >\n            <slot />\n        </button>\n    ",
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
exports['default'] = _default;
