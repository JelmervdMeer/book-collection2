<template>
    <form @submit.prevent="handleSubmit">

        <label>Titel</label>
        <input v-model="form.title" type="text" required />

        <label>Genre</label>
        <input v-model="form.genre" type="text" required />

        <label>Publicatie jaar</label>
        <input v-model="form.publication_year" type="number" required />

        <label>Beschrijving</label>
        <textarea v-model="form.description"></textarea>

        <label>Auteur</label>
        <select v-model="form.author_id" required>
            <option value="" disabled>-- Kies auteur --</option>

            <option
                v-for="author in getAllAuthors"
                :key="author.id"
                :value="author.id"
            >
                {{ author.name }}
            </option>
        </select>

        <button type="submit">Opslaan</button>

    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fetchAuthors, getAllAuthors } from '../../authors/store'

// authors ophalen voor dropdown
fetchAuthors()

const props = defineProps({
    book: Object
})

const emit = defineEmits(['submit'])

const form = ref({ ...props.book })

const handleSubmit = () => {
    emit('submit', form.value)
}
</script>