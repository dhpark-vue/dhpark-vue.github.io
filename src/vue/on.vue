<script setup>
import { ref, onUpdated, onMounted, onBeforeUpdate } from 'vue'
const count = ref(0)
onUpdated(() => {
	console.log('onUpdated', document.getElementById('count').textContent)
})

onMounted(() => {
	console.log('onMounted', document.getElementById('count').textContent)
})

onUpdated(() => {
	console.log('onBeforeUpdate', document.getElementById('count').textContent)
})
</script>

<template>
	<button id="count" @click="count++">`^^${{ count }}^^`</button>
</template>

<!-- onUpdated, onMounted, onBeforeUpdate 등 차이 알아보기 -->
