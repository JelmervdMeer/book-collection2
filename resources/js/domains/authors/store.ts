import axios from 'axios'
import { ref, computed } from 'vue'

type Author = {
    id?: number
    name: string
    email: string
}

const authors = ref<Author[]>([])

export const getAllAuthors = computed(() => authors.value)

export const fetchAuthors = async () => {
    const response = await axios.get('/api/authors')

    authors.value = response.data
}

export const createAuthor = async (newAuthor: Author) => {
    const response = await axios.post('/api/authors', newAuthor)

    authors.value = response.data
}

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    const response = await axios.put(`/api/authors/${id}`, updatedAuthor)

    authors.value = response.data
}

export const deleteAuthor = async (id: number) => {
    await axios.delete(`/api/authors/${id}`)

    authors.value = authors.value.filter(author => author.id !== id)
}

export const getAuthorById = (id: number) =>
    computed(() => authors.value.find(author => author.id === id))

