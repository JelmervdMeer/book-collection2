<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeModuleFactory } from '../../../services/store'
import Form from '../components/Form.vue'

const router = useRouter()

const bookStore = storeModuleFactory('books')

const book = ref({
    title: '',
    genre: '',
    publication_year: null,
    description: '',
    author_id: null
})

const handleSubmit = async (data: any) => {
    await bookStore.actions.create(data)

    router.push({
        name: 'books.overview'
    })
}
</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>

        <Form
            :book="book"
            @submit="handleSubmit"
        />
    </div>
</template>