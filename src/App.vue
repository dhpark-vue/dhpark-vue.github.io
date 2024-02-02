<script setup>
import { ref } from 'vue'

const num = ref('')
const show = ref(true)
const list = ref([1,2,3])

function render() {
    show.value = !show.value
}

function add(num) {
    list.value.push(num)
}

function removeFromList(num) {
	list.value.splice(num, 1)
}

function reverseList() {
    list.value = list.value.reverse()
}

</script>

<template>
 <input v-model="num"><br/>
 <button @click="render()">List 렌더링 ON/OFF</button>
 <button @click="add(num)">List 추가</button>
 <button @click="removeFromList(num)">List 제거</button>
 <button @click="reverseList()">List 뒤집기</button>


 <div class="container" v-if="show==true">
	<img id="img" src="./assets/apple.jpg"/>
 </div>
 <div class="container" v-else>

</div>

 <ul v-if="list.length != 0">
    <li v-for="item of list">{{ item }}</li>
 </ul>
 <p v-else-if="list.length">List is not empty, but hidden.</p>
 <p v-else>List is empty.</p>
</template>
