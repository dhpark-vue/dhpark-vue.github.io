<script setup>
import { ref } from 'vue'
import shoes from '@/assets/shoes.json' 

const shoe = ref(shoes)
</script>

<template>
	<h2>신발 재고</h2><br>
	<hr/>
	<li v-for="obj in shoe">
		<span v-if="obj.brand=='ADIDAS'">
			{{obj.id}} <br>
			name: {{obj.name}} <br>
			brand: {{obj.brand}} <br>
			gender: {{obj.gender}} <br>
			category: {{obj.category}} <br>
			price: ${{obj.price}} <br>
			is_in_inventory: {{obj.is_in_inventory}} <br>
			items_left: {{obj.items_left}} <br> 
			imageURL: {{obj.imageURL}} <br>
			slug: {{obj.slug}} <br>
			<hr/>
		</span>
	</li>
</template>
