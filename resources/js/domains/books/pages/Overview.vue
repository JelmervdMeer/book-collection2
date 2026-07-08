<script setup lang="ts">
import { onMounted } from 'vue'
import { storeModuleFactory } from '../../../services/store'

const bookStore = storeModuleFactory('books')

const books = bookStore.getters.all

onMounted(() => {
    bookStore.actions.getAll()
})

const handleDelete = async (id: number) => {
    try {
        await bookStore.actions.delete(id)
    } catch (error) {
        console.error('Fout bij verwijderen:', error)
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>Genre</th>
                <th>Jaar</th>
                <th>Acties</th>
            </tr>
        </thead>

        <tbody>
            <tr
                v-for="book in books"
                :key="book.id"
            >
                <td>{{ book.title }}</td>

                <td>{{ book.genre }}</td>

                <td>{{ book.publication_year }}</td>

                <td>
                    <RouterLink
                        :to="{
                            name: 'books.edit',
                            params: {
                                id: book.id
                            }
                        }"
                    >
                        Bewerk
                    </RouterLink>

                    <RouterLink
    :to="{
        name: 'books.show',
        params: {
            id: book.id
        }
    }"
>
    Details
</RouterLink>

                    <button @click="handleDelete(book.id)">
                        Verwijder
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>