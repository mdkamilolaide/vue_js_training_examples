export default {
  // Disabled button if processing is true
  template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-400 bg-gray hover:bg-blue-200': type === 'primary',
                'bg-purple-400 bg-gray hover:bg-purple-200': type === 'secondary',
                'bg-gray-200 bg-gray hover:bg-gray-400': type === 'muted',
                'is-loading': processing
            }"
            :disabled="processing"
        >
            <slot />
        </button>
    `,
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
