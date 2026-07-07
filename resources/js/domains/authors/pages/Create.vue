```vue
<script setup lang="ts">
import { ref } from 'vue'
import { createAuthor } from '../store'
import { useRouter } from 'vue-router'
import Form from '../components/Form.vue'

const router = useRouter()

const author = ref({
    name: '',
    email: ''
})

const handleSubmit = async (data: any) => {
    await createAuthor(data)

    router.push({
        name: 'authors.overview'
    })
}
</script>

<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>

        <Form
            :author="author"
            @submit="handleSubmit"
        />
    </div>
</template>
```
