<template>
	 <div class="q-py-xl">
		  <div class="col text-h4 q-pb-xl" :class="$q.screen.gt.md ? 'text-left':'text-center'">
				{{ $t("talk") }}
		  </div>
		  <div class="text-center">
				<div class="row">
					 <div class="col-12 col-md-6">
						  <q-card shaped outlined class="bg-primary q-pa-md">
								<q-form @submit.prevent="onSubmit">
									 {{ $t("mail") }}
									 <q-input v-model="mail" outlined lazy-rules
												 :rules="[val => !!val || $t('mailRule'), val => /.+@.+\..+/.test(val) || $t('mailRule2')]"
												 color="white" dark />
									 {{ $t("message") }}
									 <q-input v-model="message" outlined lazy-rules
												 :rules="[val => val && val.length > 0 || $t('messageRule')]" color="white" dark />
									 <div>
										  <q-btn label="Submit" type="submit" color="primary" />
									 </div>
								</q-form>
						  </q-card>
					 </div>
				</div>
		  </div>
	 </div>
</template>
<script setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';

const mail = ref('');
const message = ref('');
const $q = useQuasar();

function onSubmit() {
    if (message.value !== '' && mail.value !== '') {
        console.log('pédé')
		  // TODO: firebase mail
	 			$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Message submitted'
        })
    }
}
</script>
