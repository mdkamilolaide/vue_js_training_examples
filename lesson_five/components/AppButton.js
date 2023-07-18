export default{
    // Disabled button if processing is true
    template: `
        <button @click="processing = true" class="bg-gray-200 bg-gray hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,
    data() {
        return {
            processing: false
        }
    }
}