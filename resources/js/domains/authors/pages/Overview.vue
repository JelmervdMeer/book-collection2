<script setup lang="ts">

import { onMounted } from 'vue'
import { storeModuleFactory } from '../../../services/store'


const authorStore = storeModuleFactory('authors')


const authors = authorStore.getters.all


onMounted(() => {
    authorStore.actions.getAll()
})


const handleDelete = async (id: number) => {

    try {
        await authorStore.actions.delete(id)
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
                <th>Email</th>
                <th>Acties</th>
            </tr>
        </thead>


        <tbody>

            <tr
                v-for="author in authors"
                :key="author.id"
            >

                <td>
                    {{ author.name }}
                </td>

                <td>
                    {{ author.email }}
                </td>


                <td>

                    <RouterLink
                        :to="{
                            name: 'authors.edit',
                            params: {
                                id: author.id
                            }
                        }"
                    >
                        Bewerk
                    </RouterLink>


                    <button
                        @click="handleDelete(author.id)"
                    >
                        Verwijder
                    </button>

                </td>

            </tr>

        </tbody>

    </table>

</template>