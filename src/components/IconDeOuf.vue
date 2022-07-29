<template>
	 <div>
	 <q-icon :name="`img:icons/${filename}.png`" size="60px" /> <br/>
	 <span>{{title}}</span>
	 </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    filename: String
})
</script>
