<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchBooks, getAllBooks } from '../store';

onMounted(async () => {
    console.log('FETCH BOOKS')

    await fetchBooks()

    console.log('BOOKS:', getAllBooks.value)
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>Genre</th>
                <th>Jaar</th>
                <th>Beschrijving</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.genre }}</td>
                <td>{{ book.publication_year }}</td>
                <td>{{ book.description }}</td>
            </tr>
        </tbody>
    </table>
</template>