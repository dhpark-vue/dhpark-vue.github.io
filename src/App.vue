<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1,2,3])

</script>

<template>
 <button @click="">List 렌더링 ON/OFF</button>
 <button @click="list.value.push">List 추가</button>
 <button @click="remove">List 제거</button>
 <button @click="reverse">List 뒤집기</button>

 <div class="container">
	<img id="img" src="./assets/apple.jpg"/>
 </div>
 <ul v-if="list.length != 0">
  <li v-for="item of list">{{ item }}</li>
 </ul>
 <p v-else-if="list.length">List is not empty, but hidden.</p>
 <p v-else>List is empty.</p>
</template>
