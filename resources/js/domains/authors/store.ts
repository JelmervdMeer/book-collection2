import axios from 'axios'
import { ref, computed } from 'vue'

type Author = {
    id: number
    name: string
    email: string
    bio: string
}

const authors = ref<Author[]>([])

export const getAllAuthors = computed(() => authors.value)

export const fetchAuthors = async () => {
    const { data } = await axios.get('/api/authors')

    authors.value = data
}