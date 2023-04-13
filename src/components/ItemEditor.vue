<script setup>
    import {defineProps, defineEmits, ref, watch} from 'vue';

    const props = defineProps({
        item: {
            type: Object
        },
    })

    const emits = defineEmits(['edit', 'update:show', 'updateCheckbox'])

    const changedBody = ref('')
    const changedMats = ref([])

    const change = item => changedBody.value = item.value
    const updateCheckbox = mats => changedMats.value = mats.value

    const edit = () => {
        emits('edit', changedBody, props.item, changedMats)
        emits('update:show', false)
        emits('updateCheckbox', changedMats, props.item)
        // console.log(changedMats.value)
    }

</script>
<template>
    <form
        class="form"
        @submit.prevent
        >
        <u-calc
            :body="item.body"
            :item="item"
            @updateInput="change"
            @updateCheckbox="updateCheckbox"
            >
        </u-calc>
        <u-button
            class="btn_done"
            @click="edit"
            >
        </u-button>
    </form>
</template>

<style>
    .btn_done{
        width: 90px !important;
        background: url(../assets/img/svg/done.svg) no-repeat center !important;
    }
</style>