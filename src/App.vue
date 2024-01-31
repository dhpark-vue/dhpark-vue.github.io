<script setup>
import { ref } from 'vue'
const message = ref({name: "Park", age: 27})
const name = "Ho"
</script>

<template>
<h1> {{ message }} </h1>
</template>