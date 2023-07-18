//Lesson 5: How to split components into a manageable external templates
import AppButton from './components/AppButton.js';

let app5 = {
    components: {
        'app-button': AppButton,
    },
    methods: {
        clickMe() {

        }
    },
};

const lessonFive = Vue.createApp(app5).mount("#lesson-five");