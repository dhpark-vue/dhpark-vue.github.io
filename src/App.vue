<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
	{id: id++, issue: 'Backlog'}, 
	{id: id++, issue: 'Todo'},
	{id: id++, issue: 'Going Hawaii'}
])



function addTodo() {
	todos.value.push({id: id++, issue: newTodo.value})
}

function removeTodo(todo) {
	console.log(todo.id)
	todo.value = todos.value.filter((t) => t !== todo)
	todos.value.splice(todo.value, 1)
	// [].filter(t/f)
}

</script>
<template>
	<form @submit.prevent="addTodo">
		<input v-model="newTodo">
		<button>할 일 추가</button>
	</form>
	<ul>
		<li v-for="todo in todos" v-bind:key="todo">
			{{ todo.issue }} - <button @click="removeTodo(todo)">Done</button>
		</li>
	</ul>
</template>