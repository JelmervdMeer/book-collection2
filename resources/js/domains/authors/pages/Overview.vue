<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchAuthors, getAllAuthors } from '../store'

onMounted(async () => {
    await fetchAuthors()
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>E-mail</th>
                <th>Bio</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>{{ author.email }}</td>
                <td>{{ author.bio }}</td>
            </tr>
        </tbody>
    </table>
</template>