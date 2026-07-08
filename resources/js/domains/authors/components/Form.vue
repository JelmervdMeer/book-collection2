```vue
<script setup lang="ts">

import { ref } from 'vue'
import FormError from '../../../components/FormError.vue'

const props = defineProps({
    author: Object
})

const emit = defineEmits([
    'submit'
])

const form = ref({
    ...props.author
})

const handleSubmit = () => {
    emit('submit', form.value)
}

</script>


<template>

<form @submit.prevent="handleSubmit">

    <label>
        Naam:
    </label>

    <input
        v-model="form.name"
        type="text"
    />

    <FormError name="name" />


    <label>
        Email:
    </label>

    <input
        v-model="form.email"
        type="email"
    />

    <FormError name="email" />


    <button type="submit">
        Opslaan
    </button>

</form>

</template>
```
