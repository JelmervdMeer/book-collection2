<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchAuthors, getAuthorById, updateAuthor } from '../store'
import Form from '../components/Form.vue'

const route = useRoute()
const router = useRouter()

onMounted(() => {
    fetchAuthors()
})

const author = getAuthorById(Number(route.params.id))

const handleSubmit = async (data: any) => {
    await updateAuthor(
        Number(route.params.id),
        data
    )

    router.push({
        name: 'authors.overview'
    })
}
</script>


<template>
    <div>
        <h2>Auteur bewerken</h2>

        <Form
            v-if="author"
            :author="author"
            @submit="handleSubmit"
        />
    </div>
</template>
```
