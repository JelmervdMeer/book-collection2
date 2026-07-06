<script setup lang="ts">
import { onMounted } from 'vue';
import { fetchBooks, getAllBooks, deleteBook } from '../store';

onMounted(async () => {
    await fetchBooks();
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>Genre</th>
                <th>Jaar</th>
                <th>Beschrijving</th>
                <th>Acties</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.genre }}</td>
                <td>{{ book.publication_year }}</td>
                <td>{{ book.description }}</td>

                <td>
                    <RouterLink
                        :to="{ name: 'books.edit', params: { id: book.id } }"
                    >
                        Bewerk
                    </RouterLink>
                    <button @click="deleteBook(book.id)">
        Verwijder
    </button>
                </td>
                
            </tr>
        </tbody>
    </table>
</template>