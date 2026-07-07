import { ref, computed } from 'vue'

import {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
} from '../../services/http'

type Author = {
    id?: number
    name: string
    email: string
}

const authors = ref<Author[]>([])

export const getAllAuthors = computed(() => authors.value)

export const fetchAuthors = async () => {
    const { data } = await getRequest('/authors')

    authors.value = data
}

export const createAuthor = async (newAuthor: Author) => {
    const { data } = await postRequest('/authors', newAuthor)

    authors.value = data.data
}

export const updateAuthor = async (
    id: number,
    updatedAuthor: Author
) => {
    const { data } = await putRequest(
        `/authors/${id}`,
        updatedAuthor
    )

    authors.value = data.data
}

export const deleteAuthor = async (id: number) => {
    await deleteRequest(`/authors/${id}`)

    authors.value = authors.value.filter(
        author => author.id !== id
    )
}

export const getAuthorById = (id: number) =>
    computed(() =>
        authors.value.find(
            author => author.id === id
        )
    )
