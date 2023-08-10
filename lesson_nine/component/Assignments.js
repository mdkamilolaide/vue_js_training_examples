import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    'assingment-list': AssignmentList,
    'assignment-create': AssignmentCreate 
  },
  template:   `
    <section class="space-y-6 mb-2">
      <assingment-list :assignments="filters.inProgress" title="In Progress"></assingment-list>
      <assingment-list :assignments="filters.completed" title="Completed"></assingment-list>
    </section>
    <assignment-create @addEvent="add"></assignment-create>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
        { name: 'Go to Market', complete: false, id: 4 },
      ]
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete)
      }
    }
  },
  methods: {
    add(newName) {
      
      this.assignments.push({
          name: newName,
          complete: false,
          id: this.assignments.length + 1
      });
    }
  },
}