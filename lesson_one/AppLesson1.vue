// Lesson 1
const lessonOne = Vue.createApp({
    data() {
        return {
        greeting: "Vue is ready for party!",
        };
    },
    mounted() {
        setTimeout(() => {
            this.greeting = 'What is up';
        }, 3000);
    }
}).mount("#lesson-one");