<script setup>
import { ref, onMounted } from 'vue'
const count = ref({
	cnt: 0,
	name: "Park"
})

function increment() {
	count.value.cnt++
	count.value.name = count.value.name.split('').reverse().join('')
}

onMounted(() => console.log(`The initial count is ${count.value.cnt}.`))
</script>

<template>
	<button @click="increment">Count is: {{ count.cnt > 10 ? "크다" : "작다" }} {{ count.name}} </button>
</template>

<style scoped>
button {
	font-weight: bold;
}
</style>
