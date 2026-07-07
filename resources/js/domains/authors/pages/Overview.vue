<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchAuthors, getAllAuthors, deleteAuthor } from '../store'

onMounted(() => {
    fetchAuthors()
})

const handleDelete = async (id: number | undefined) => {
    if (!id) return

    try {
        await deleteAuthor(id)
    } catch (error) {
        console.error('Fout bij verwijderen:', error)
    }
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Acties</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>

                <td>
                    <RouterLink
                        :to="{ 
                            name: 'authors.edit',
                            params: { id: author.id }
                        }"
                    >
                        Bewerk
                    </RouterLink>

                    <button @click="handleDelete(author.id)">
                        Verwijder
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>