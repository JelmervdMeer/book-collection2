<script setup lang="ts">
import { ref } from 'vue'
import Form from '../components/Form.vue'
import { createBook } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

const book = ref({
    title: '',
    genre: '',
    publication_year: null,
    description: '',
    author_id: null
})

const handleSubmit = async (data: any) => {
    await createBook(data)
    router.push({ name: 'books.overview' })
}
</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>

        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>