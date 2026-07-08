<script setup lang="ts">

defineProps<{
    reviews: any[]
}>()


const emit = defineEmits([
    'edit',
    'delete'
])

</script>


<template>

<div>

    <h3>
        Reviews
    </h3>


    <div
        v-for="review in reviews"
        :key="review.id"
    >

        <p>
            <strong>
                {{ review.reviewer_name }}
            </strong>
        </p>


        <p>
            Beoordeling:
            {{ review.rating }}/5
        </p>


        <p>
            {{ review.comment }}
        </p>


        <button
    @click="emit('edit', review)"
>
    Bewerk
</button>


<button
    @click="emit('delete', review.id)"
>
    Verwijder
</button>


        <hr>

    </div>

</div>

</template>