import axios from 'axios'
import { ref, computed } from 'vue'

type Book = {
    id: number
    title: string
    genre: string
    publication_year: number
    description: string
}

const books = ref<Book[]>([])

export const getAllBooks = computed(() => books.value)

export const fetchBooks = async () => {
    const response = await axios.get('/api/books')

    books.value = response.data

    console.log(books.value)
}

export const createBook = async (newBook: Book) => {
    const response = await axios.post('/api/books', newBook)

    books.value = response.data.data
}