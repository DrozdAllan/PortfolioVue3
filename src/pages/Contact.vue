<template>
	 <div class="q-py-lg">
		  <div class="col text-h4 text-center text-md-left q-pb-lg">
				{{ $t("talk") }}
		  </div>
		  <div class="text-center">
				<div class="row">
					 <div class="col-12 col-md-6">
						  <q-card shaped outlined class="text-white bg-primary q-pa-md">
								<q-form ref="contactForm" v-model="valid">
									 {{ $t("mail") }}
									 <q-input v-model="mail" lazy-rules
												 :rules="[val => !!val || $t('mailRule'), val => /.+@.+\..+/.test(val) || $t('mailRule2')]"
												 color="action" />
									 {{ $t("message") }}
									 <q-input v-model="message" lazy-rules
												 :rules="[val => val && val.length > 0 || $t('messageRule')]" color="action" />
									 <div>
										  <q-btn label="Submit" type="submit" color="primary" />
									 </div>
								</q-form>
						  </q-card>
					 </div>
					 <div class="hidden-sm-and-up" />
				</div>
		  </div>
	 </div>
</template>
<script setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar'

const $q = useQuasar();
const valid = ref(false);
const show = ref(false);
const mail = ref('');
const message = ref('');

function onSubmit() {
    if (message.value === '') {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Message submitted'
        })
    }
}
</script>
