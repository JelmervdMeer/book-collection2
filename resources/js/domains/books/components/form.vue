<template>
    <form @submit.prevent="handleSubmit">

        <label>Titel</label>

        <input
            v-model="form.title"
            type="text"
        />

        <FormError name="title" />


        <label>Genre</label>

        <input
            v-model="form.genre"
            type="text"
        />

        <FormError name="genre" />


        <label>Publicatie jaar</label>

        <input
            v-model="form.publication_year"
            type="number"
        />

        <FormError name="publication_year" />


        <label>Beschrijving</label>

        <textarea
            v-model="form.description"
        ></textarea>

        <FormError name="description" />


        <label>Auteur</label>

        <select v-model="form.author_id">

            <option value="" disabled>
                -- Kies auteur --
            </option>

            <option
                v-for="author in getAllAuthors"
                :key="author.id"
                :value="author.id"
            >
                {{ author.name }}
            </option>

        </select>

        <FormError name="author_id" />


        <button type="submit">
            Opslaan
        </button>

    </form>
</template>


<script setup lang="ts">

import { ref } from 'vue'
import { fetchAuthors, getAllAuthors } from '../../authors/store'
import FormError from '../../../components/FormError.vue'


fetchAuthors()


const props = defineProps({
    book: Object
})


const emit = defineEmits([
    'submit'
])


const form = ref({
    ...props.book
})


const handleSubmit = () => {
    emit('submit', form.value)
}

</script>