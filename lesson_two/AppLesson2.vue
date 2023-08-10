// Lesson 2 const lessonTwo = Vue.createApp({ data() { return { buttonClasses: 'txt-green',
isActive: false }; }, mounted() { setTimeout(() => { this.greeting = 'What is up, this is lesson
Two'; }, 3000); }, methods: { toggleColor() { this.buttonClasses = this.buttonClasses == 'txt-red' ?
'txt-green' : 'txt-red'; }, toggleState() { this.isActive = !this.isActive; } },
}).mount("#lesson-two");
