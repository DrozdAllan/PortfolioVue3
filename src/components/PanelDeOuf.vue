<template>
	 <q-tab-panel :name="name">
		  {{$t(props.text)}} <a class="text-white" :href="props.link" target="new">
		  Link Available Here</a>
		  <q-carousel swipeable animated arrows v-model="slide" v-model:fullscreen="fullscreen" infinite>
				<q-carousel-slide v-for="(image,index) in props.images" :name="index" :img-src="image" />
				<template v-slot:control>
					 <q-carousel-control position="bottom-right" :offset="[18, 18]">
						  <q-btn push round dense color="primary" text-color="primary"
									:icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
									@click="fullscreen = !fullscreen" />
					 </q-carousel-control>
				</template>
		  </q-carousel>
	 </q-tab-panel>
</template>
<script setup>
import {ref, defineProps} from "vue";

const props = defineProps({
	 name: String,
	 text: String,
	 link: String,
	 images: Array,
})

const slide = ref(1);
const fullscreen = ref(false);
</script>
