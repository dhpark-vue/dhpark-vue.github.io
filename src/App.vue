<script setup>
import { reactive, computed, ref } from 'vue'

const author = ref({
	name: 'John Doe',
	books: [1, 2, 3]
})
// ref에는 author에 value 안붙고, computed에는 붙어야 함
const publishedBooksMessage = computed(() => { return author.value.books.length > 2 ? 'Yes' : 'No'})
</script>

<template>
	{{author.name}}
	<p>Has published books: </p>	
	<span>{{ author.books.length > 2 ? 'Yes' : 'No' }}</span>

	<p>Has published books: {{publishedBooksMessage}}</p>
</template>
