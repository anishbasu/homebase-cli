<template>
	<div class="dashboard-view">
	<div class="nav-bar">

	</div>
	<div>
	<assignment
		v-for="assignment in assignments"
		v-drag-and-drop
		id="{{ $index }}"
		drop="handleDrop"
		:assignment="assignment"
		track-by="id">
	</assignment>
	</div>
</template>

<script type="text/javascript">
	//import store from '../store'
	import Assignment from './Assignment.vue'

	export default {
		name: 'DashboardView',
		components: {
			Assignment
		},
		data () {
			return {
				username: 'Hello',
				assignments: [
				{
					id: 1,
					title: "CI 103 Presentation",
					description: "Prepare HomeBase for presentation",
					due_date: Date.now(),
					tags: ['ci103','cs','drexel']
				},
				{
					id: 2,
					title: "Math 123 Quiz",
					description: "Prepare for Math Quiz",
					due_date: Date.now(),
					tags: ['math123','math','drexel']
				},
				{
					id: 3,
					title: "Coop Quiz",
					description: "Prepare for Coop",
					due_date: Date.now(),
					tags: ['math123','math','drexel']
				}]
			}
		},
		methods: {
			handleDrop: function(assignmentOne, assignmentTwo) {
				console.log(assignmentOne.id, assignmentTwo.id);
				var assignmentSwap = this.assignments[assignmentOne.id]
				this.assignments.$set(assignmentOne.id, this.assignments[assignmentTwo.id])
				this.assignments.$set(assignmentTwo.id, assignmentSwap)
			}
		}
		/*,
		route: {
			data({ to }){
				const username = to.params.name;
				return ({
					username: username,
					assignments: [{

					}]
				})
			},
		}*/
	}
</script>