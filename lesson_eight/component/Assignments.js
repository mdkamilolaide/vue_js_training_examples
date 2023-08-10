import AssignmentList from "./AssignmentList.js";

export default {
  components: { 'assingment-list' : AssignmentList },
  template:   `
    <section class="space-y-6 mb-2">
      <assingment-list :assignments="filters.inProgress" title="In Progress"></assingment-list>
      <assingment-list :assignments="filters.completed" title="Completed"></assingment-list>
    </section>
    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="p-2" />
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
        { name: 'Go to Market', complete: false, id: 4 },
      ],
      newAssignment: ''
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
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1
      });
      this.newAssignment = '';
    }
  },
}