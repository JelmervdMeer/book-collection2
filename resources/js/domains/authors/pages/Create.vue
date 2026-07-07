```vue
<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeModuleFactory } from '../../../services/store'
import Form from '../components/Form.vue'


const router = useRouter()

const authorStore = storeModuleFactory('authors')

const author = ref({
    name: '',
    email: ''
})

const handleSubmit = async (data: any) => {

    await authorStore.actions.create(data)

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
