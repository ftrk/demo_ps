<script setup>
    import {defineProps, defineEmits, ref} from 'vue';

    const {selectedUser} = defineProps({
        selectedUser: String
    })

    const emits = defineEmits([
        'createItem'
    ])

    const str = ref('')
    const materials = ref('')
    const updateInp = item => str.value = item
    const updateCheckbox = arrMats => materials.value = arrMats

    const createItem = () => {
        const item = {
            id: Date.now(),
            title: selectedUser,
            body: str.value,
            usedMats: materials.value,
            amount: 1
        }
        emits('createItem', item)
    }
</script>
<template>
    <form
        class="form"
        @submit.prevent
        >
            <u-calc
                @updateInput="updateInp"
                @updateCheckbox="updateCheckbox"
                >
            </u-calc>
            <u-button
                class="btn_done"
                @click="createItem"
                >
            </u-button>
    </form>
</template>

<style>
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn_done{
        width: 90px !important;
        height: 50px;
        background: url(../assets/img/svg/done.svg) no-repeat center;
        margin: 0 auto;
    }
</style>