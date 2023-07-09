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
    },
})
    // .mount("#lesson-one");

// Lesson 2
const lessonTwo = Vue.createApp({
    data() {
        return {
            buttonClasses: 'txt-green',
            isActive: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.greeting = 'What is up, this is lesson Two';
        }, 3000);
    },
    methods: {
        toggleColor() {
            this.buttonClasses = this.buttonClasses == 'txt-red' ? 'txt-green' : 'txt-red';
        },
        toggleState() {
            this.isActive = !this.isActive;
        }
    },
})
    // .mount("#lesson-two");

// Lesson 3
let app3 = {
        data() {
            return {
                assignments: [
                    {name: 'Finish Project', complete: false, id: 1},
                    {name: 'Read Chapter 4', complete: false, id: 2},
                    {name: 'Turn in Homework', complete: false, id: 3}
                ]
            }
    },
    computed: {
        inProgressAssignment() {
            return this.assignments.filter(a => !a.complete);
        },
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        } 
    },
};
// const lessonThree = Vue.createApp(app3).mount("#lesson-three");

//Lesson 4: How to create a Custom Components, and make content dynamic using slot
let app = {
    components: {
        //Registering a component
        'app-button': {
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
        },
        'go-button': {
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
    }
};

const lessonFour = Vue.createApp(app).mount("#lesson-four");

