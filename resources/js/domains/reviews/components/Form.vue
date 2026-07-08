```vue
<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits([
    'submit'
])

const form = ref({
    reviewer_name: '',
    rating: 5,
    comment: ''
})

const handleSubmit = () => {

    emit(
        'submit',
        form.value
    )


    form.value = {
        reviewer_name: '',
        rating: 5,
        comment: ''
    }

}
</script>

<template>

<form @submit.prevent="handleSubmit">

    <label>
        Naam
    </label>

    <input
        v-model="form.reviewer_name"
        type="text"
        required
    />


    <label>
        Beoordeling
    </label>

    <input
        v-model="form.rating"
        type="number"
        min="1"
        max="5"
        required
    />


    <label>
        Review
    </label>

    <textarea
        v-model="form.comment"
        required
    ></textarea>


    <button type="submit">
        Review toevoegen
    </button>

</form>

</template>
```
