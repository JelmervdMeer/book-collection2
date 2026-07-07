import { ref, computed } from 'vue'

import {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
} from '../../services/http'


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

    const { data } = await getRequest('/books')

    books.value = data
}


export const createBook = async (newBook: Book) => {

    const { data } = await postRequest('/books', newBook)

    books.value = data.data
}


export const updateBook = async (
    id: number,
    updatedBook: Book
) => {

    const { data } = await putRequest(
        `/books/${id}`,
        updatedBook
    )

    books.value = data.data
}


export const deleteBook = async (id:number) => {

    await deleteRequest(`/books/${id}`)

    books.value =
        books.value.filter(
            book => book.id !== id
        )
}


export const getBookById = (id:number) =>
    computed(() =>
        books.value.find(
            book => book.id === id
        )
    )