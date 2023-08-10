import AssignmentList from "./AssignmentList.js";

export default {
  components: { 'assingment-list' : AssignmentList },
  template:   `
    <section class="space-y-6">
      <assingment-list :assignments="filters.inProgress" title="In Progress"></assingment-list>
      <assingment-list :assignments="filters.completed" title="Completed"></assingment-list>
    </section>

    <!-- 
      <section class="mt-8" v-show="completed.length">
        <h2 class="font-bold mb-2">Completed Assignment</h2>

        <ul>
          <li 
            v-for="assignment in completed" 
            :key="assignment.id"
          >
            <label>
              {{ assignment.name }} <input type="checkbox" v-model="assignment.complete">
            </label>            
          </li>
        </ul>
      </section>
    -->
  `,
  data() {
    return {
      assignments: [
        { name: 'Finish Project', complete: false, id: 1 },
        { name: 'Read Chapter 4', complete: false, id: 2 },
        { name: 'Turn in Homework', complete: false, id: 3 },
        { name: 'Go to Market', complete: false, id: 4 },
      ],
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete)
      }
    }
  }
}