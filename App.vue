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

//Lesson 4
let app4 = {
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
const lessonFour = Vue.createApp(app4).mount("#lesson-four");

