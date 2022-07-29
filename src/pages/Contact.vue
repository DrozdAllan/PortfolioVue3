<template>
	 <div class="q-py-xl">
		  <div class="text-h4 q-pb-xl" :class="$q.screen.gt.md ? 'text-left':'text-center'">
				{{ $t("talk") }}
		  </div>
		  <div class="text-center q-pl-none q-pl-md-lg">
				<div class="row">
					 <div class="col-12 col-md-6">
						  <q-card shaped outlined class="bg-primary q-pa-md">
								<q-form @submit.prevent="onSubmit">
									 {{ $t("mail") }}
									 <q-input v-model="mail" outlined
												 :rules="[val => !!val || $t('mailRule'), val => /.+@.+\..+/.test(val) || $t('mailRule2')]"
												 color="white" dark />
									 {{ $t("message") }}
									 <q-input v-model="message" type="textarea" outlined
												 :rules="[val => val && val.length > 0 || $t('messageRule')]" color="white" dark />
									 <div>
										  <q-btn label="Submit" type="submit" color="white" text-color="primary"
													class="text-bold" />
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
import {addMessage} from "src/firebase";

const $q = useQuasar();

const mail = ref('');
const message = ref('');

function onSubmit() {
    if (message.value !== '' && mail.value !== '') {
        addMessage(mail.value, message.value)
            .then((result) => {
                if (result.id) {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Message submitted'
                    })
                    mail.value = '';
                    message.value = '';
                }
            })
            .catch((e) => $q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'Error while sending message'
            }));
    }
}
</script>
