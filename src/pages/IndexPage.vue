<template>
	 <q-page class="flex-column flex-center">
		  <About />
		  <Services />
		  <Skills />
	 </q-page>
</template>
<script setup>
import {defineComponent} from 'vue'
import Services from "./Services.vue";
import About from './About.vue';
import Skills from './Skills.vue';

defineComponent({
    name: 'IndexPage'
})
</script>
