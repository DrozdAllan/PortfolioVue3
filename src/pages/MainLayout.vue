<template>
	 <q-layout view="lHh Lpr lFf">
		  <q-drawer v-model="leftDrawerOpen" show-if-above :width="256" style="background-color: #507c54">
				<q-list class="drawerStyle">
					 <q-item-label class="text-center text-h4">
						  <q-img src="PortfolioLogoInkFree.png" width="90px" /> <br>
						  <span class="text-h4">
						  Allan Drozd <br>
						  </span> <span class="text-h5">
						  {{ $t("title") }}
						  </span>
					 </q-item-label>
					 
					 <q-separator color="#dce5da" />

					 <EssentialLink v-for="section in sections" :title="section.title" :icon="section.icon"
										 :id="section.id" @click-event="clickCallback()" />
					 <div class="row justify-around">
						  <q-icon name="img:icons/united-kingdom.png" size="40px" @click="$root.$i18n.locale = 'en-US'" />
						  <q-icon name="img:icons/france.png" size="40px" @click="$root.$i18n.locale = 'fr-FR'" />
					 </div>
				</q-list>
		  </q-drawer>
		  <q-page-container>
				<q-page>
					 <q-page class="flex-column flex-center">
						  <About id="about" />
						  <div class="other-hero">
								<Services id="services" />
								<Skills id="skills" />
								<Portfolio id="portfolio" />
								<Contact id="contact" />
						  </div>
					 </q-page>
					 <q-page-sticky position="bottom-left" :offset="[18, 68]">
						  <q-btn fab color="primary" icon="menu" @click="toggleLeftDrawer" class="lt-md" />
					 </q-page-sticky>
				</q-page>
		  </q-page-container>
	 </q-layout>
</template>
<script setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {useQuasar} from "quasar";
import EssentialLink from 'components/EssentialLink.vue'
import Services from "./Services.vue";
import About from './About.vue';
import Skills from './Skills.vue';
import Portfolio from "./Portfolio.vue";
import Contact from "./Contact.vue";

const leftDrawerOpen = ref(false)
const $q = useQuasar();

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

function clickCallback() {
    if ($q.screen.lt.md) {
        leftDrawerOpen.value = false;
    }
}

const sections = [{
    title: 'About Me',
    icon: 'cyclone',
    id: 'about',
}, {
    title: 'Services',
    icon: 'build',
    id: 'services',
}, {
    title: 'Skills',
    icon: 'code',
    id: 'skills',
}, {
    title: 'Portfolio',
    icon: 'work_history',
    id: 'portfolio',
}, {
    title: 'Contact',
    icon: 'mail',
    id: 'contact',
}]
</script>
<style scoped>
.drawerStyle {
    color: white;
}

.other-hero {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0)), url('annie-spratt-KDVo3qepq3I-unsplash-min.jpg');
    background-size: cover;
	 padding: 10px;
}
</style>
