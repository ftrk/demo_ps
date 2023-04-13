<script setup>
    import {defineProps, defineEmits} from 'vue'

    const props = defineProps({
        show: {
            type : Boolean,
            default : false,
        },
    })

    const emits = defineEmits(['update:show'])

    const hideDialog = () => emits('update:show', false)

</script>
<template>
    <div
        class="dialog"
        v-if="show"
        @click="hideDialog"
        >
        <div
            class="dialog_content"
            @click.stop
            >
            <slot></slot>
        </div>
    </div>
</template>

<style>
    .dialog{
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        display: flex;
    }
    .dialog_content{
        margin: auto;
        background: white;
        border-radius: 12px;
        width: 284px;
        min-height: 150px;
        padding: 20px;
    }
</style>