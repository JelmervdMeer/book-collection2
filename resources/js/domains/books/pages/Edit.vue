
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchBooks, getBookById, updateBook, getAllBooks } from '../store'
import Form from '../components/Form.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
    fetchBooks()
})

const book = getBookById(Number(route.params.id))

const handleSubmit = async (data: any) => {
    await updateBook(Number(route.params.id), data)
    router.push({ name: 'books.overview' })
}
</script>

<template>
    <div>
        <h2>Boek bewerken</h2>

        <Form
            v-if="book"
            :book="book"
            @submit="handleSubmit"
        />
    </div>
</template>