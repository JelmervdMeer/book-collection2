<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps<{
    review: any
}>()


const emit = defineEmits([
    'submit'
])


const form = ref({
    reviewer_name: props.review.reviewer_name,
    rating: props.review.rating,
    comment: props.review.comment
})


const handleSubmit = () => {

    emit(
        'submit',
        form.value
    )

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
    >


    <label>
        Rating
    </label>

    <input
        v-model="form.rating"
        type="number"
        min="1"
        max="5"
        required
    >


    <label>
        Comment
    </label>

    <textarea
        v-model="form.comment"
        required
    ></textarea>


    <button type="submit">
        Opslaan
    </button>

</form>

</template>