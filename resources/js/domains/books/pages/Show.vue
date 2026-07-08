<script setup lang="ts">


import { ref, onMounted } from 'vue'
import ReviewEdit from '../../reviews/components/Edit.vue'
import { useRoute } from 'vue-router'

import { storeModuleFactory } from '../../../services/store'

import ReviewForm from '../../reviews/components/Form.vue'
import ReviewList from '../../reviews/components/List.vue'
import { reviewStore } from '../../reviews/store'


const route = useRoute()


const bookStore = storeModuleFactory('books')

const reviews = reviewStore.getters.all
const selectedReview = ref<any>(null)


const book = bookStore.getters.getById(
    Number(route.params.id)
)



onMounted(async () => {

    await bookStore.actions.getAll()


    await reviewStore.actions.getByBook(
        Number(route.params.id)
    )

})



const handleSubmit = async (data: any) => {

    await reviewStore.actions.createByBook(
        Number(route.params.id),
        data
    )


    await reviewStore.actions.getByBook(
        Number(route.params.id)
    )

}

const handleEdit = (review:any) => {

    selectedReview.value = review

}

const handleUpdate = async (data:any) => {

    if (!selectedReview.value) return

    await reviewStore.actions.update(
        selectedReview.value.id,
        data
    )


    await reviewStore.actions.getByBook(
        Number(route.params.id)
    )


    selectedReview.value = null

}

const handleDeleteReview = async (id:number) => {

    await reviewStore.actions.delete(id)


    await reviewStore.actions.getByBook(
        Number(route.params.id)
    )

}

</script>



<template>

<div v-if="book">

    <h2>
        {{ book.title }}
    </h2>


    <p>
        Genre:
        {{ book.genre }}
    </p>


    <p>
        Jaar:
        {{ book.publication_year }}
    </p>


    <p>
        {{ book.description }}
    </p>


    <hr>


   <ReviewList
    :reviews="reviews"
    @edit="handleEdit"
    @delete="handleDeleteReview"
/>

<ReviewEdit
    v-if="selectedReview"
    :review="selectedReview"
    @submit="handleUpdate"
/>


    <hr>


    <h3>
        Nieuwe review
    </h3>


    <ReviewForm
        @submit="handleSubmit"
    />

</div>

</template>