<template>
	<div class="row">
		<div class="two columns timestamp">
			{{showTime}}
		</div>
		<div class="ten columns assignment">
			<a href="#" class="title">{{assignment.title}}</a>
			<div>{{assignment.description}}</div>
			<span
				v-for="tag in assignment.tags"
				class="tag">
				{{tag}}
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'Assignment',
		props: {
			assignment: Object
		},
		computed: {
			showTime() {
				var d = new Date(this.assignment.due_date)
				return (d.getMonth()+1) +"/" + (d.getDate())+ " " + d.getHours() + ":" + d.getMinutes()
			}
		}
	}
</script>

<style type="text/css">
	.timestamp{
		text-align: right;
	}
	.assignment{
		border-left: solid gray 2px;
		padding: 8px;
	}
	.tag{
		background-color: #236287;
		padding: 3px;
		margin: 3px;
		color: white;
	}
	
	[draggable] {
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      /* Required to make elements draggable in old WebKit */
      -khtml-user-drag: element;
      -webkit-user-drag: element;
    }
</style>