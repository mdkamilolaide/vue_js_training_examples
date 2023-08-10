// Lesson 3 let app3 = { data() { return { assignments: [ {name: 'Finish Project', complete: false,
id: 1}, {name: 'Read Chapter 4', complete: false, id: 2}, {name: 'Turn in Homework', complete:
false, id: 3} ] } }, computed: { inProgressAssignment() { return this.assignments.filter(a =>
!a.complete); }, completedAssignments() { return this.assignments.filter(a => a.complete); } } };
const lessonThree = Vue.createApp(app3).mount("#lesson-three");
