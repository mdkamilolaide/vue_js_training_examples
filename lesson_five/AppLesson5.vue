//Lesson 5: How to manage many components on a separate file, to prevent messy code
//Create a component folder to save the separated component 
let app5 = { 
  components: {
      //Registering a component 
      'app-button': { // Disabled button if processing is true
<button
            @click="processing = true"
            class="bg-gray-200 bg-gray hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed"
            :disabled="processing"
          >
              <slot />
          </button>`,
      data() { return { processing: false } } }, 'go-button': { // Disabled button if
processing is true template: `
<button
  @click="processing = true"
  class="bg-gray-200 bg-gray hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed"
  :disabled="processing"
>
                    <slot />
                </button>
`, data() { return { processing: false } } } } }; const lessonFive =
Vue.createApp(app5).mount("#lesson-five");
