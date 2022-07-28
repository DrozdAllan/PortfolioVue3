<template>
	 <div class="q-py-xl">
		  <div class="col text-h4 q-pb-xl" :class="$q.screen.gt.md ? 'text-left':'text-center'">
				{{ $t("know") }}
		  </div>
		  <div>
				<span class="text-h6 text-bold">{{ $t("prog") }}</span>
				<div class="row q-py-lg justify-around">
					 <div v-for="icon in icons" class="col-1">
						  <IconDeOuf :title="icon.title" :filename="icon.filename" />
					 </div>
				</div>
				<span class="text-h6 text-bold">{{ $t("design") }}</span>
				<div class="row q-py-lg justify-around">
					 <div v-for="icon in icons" class="col-1">
						  <IconDeOuf :title="icon.title" :filename="icon.filename" />
					 </div>
				</div>
		  </div>
	 </div>
</template>
<script setup>
import IconDeOuf from '../components/IconDeOuf.vue'

const icons = [{
    title: 'Laravel',
    filename: 'laravel_128'
}, {
    title: 'Vue',
    filename: 'vue_128px'
}, {
    title: 'Flutter',
    filename: 'flutter_128'
}, {
    title: 'Firebase',
    filename: 'firebase_144'
}, {
    title: 'Express',
    filename: 'expressjsbg_128'
}, {
    title: 'MongoDB',
    filename: 'mongoDB_128'
}, {
    title: 'Symfony',
    filename: 'symfony_white'
}, {
    title: 'Wordpress',
    filename: 'wordpress_128'
}, {
    title: 'ApiPlatform',
    filename: 'apiPlatform_300'
}]
</script>
