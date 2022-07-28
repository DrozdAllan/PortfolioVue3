<template>
	 <div>
	 <q-icon :name="`img:icons/${filename}.png`" size="60px" /> <br/>
	 <span>{{title}}</span>
	 </div>
</template>
<script setup>
import {defineProps} from "vue";

const props = defineProps({
    title: String,
    filename: String
})
</script>
