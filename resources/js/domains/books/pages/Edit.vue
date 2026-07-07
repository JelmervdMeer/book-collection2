<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeModuleFactory } from '../../../services/store'
import Form from '../components/Form.vue'

const route = useRoute()
const router = useRouter()

const bookStore = storeModuleFactory('books')

onMounted(() => {
    bookStore.actions.getAll()
})

const book = bookStore.getters.getById(Number(route.params.id))

const handleSubmit = async (data: any) => {
    await bookStore.actions.update(
        Number(route.params.id),
        data
    )

    router.push({
        name: 'books.overview'
    })
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