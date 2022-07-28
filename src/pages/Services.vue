<template>
	 <div class="py-14">
		  <div class="text-h4 text-center text-md-left pb-16">
				{{ $t("what") }}
		  </div>
		  <div class="col-12 col-md-6">
				<q-list v-model="panel">
					 <q-expansion-item expand-separator :label="$t('what0')">
						  <q-card>
								<q-card-section>
									 {{ $t("whatText0") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item expand-separator :label="$t('what1')">
						  <q-card>
								<q-card-section>
									 {{ $t("whatText1") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item expand-separator :label="$t('what2')">
						  <q-card>
								<q-card-section>
									 {{ $t("whatText2") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
					 <q-expansion-item expand-separator :label="$t('what3')">
						  <q-card>
								<q-card-section>
									 {{ $t("whatText3") }}
								</q-card-section>
						  </q-card>
					 </q-expansion-item>
				</q-list>
		  </div>
	 </div>
</template>
<script setup>
import {ref} from 'vue';

const panel = ref(0);
</script>
