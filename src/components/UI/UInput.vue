<script setup>
    import {defineProps, defineEmits} from 'vue'

    const {modelValue} = defineProps({
        modelValue: [String, Number]
    })

    const emits = defineEmits(['update:modelValue'])

    const updateInput = event => emits('update:modelValue', event.target.value)
</script>
<template>
    <input 
        class="inp"
        type="text"
        :value="modelValue"
        @input="updateInput"
        readonly
        >
</template>

<style>
    .inp{
        width: 100%;
        height: 30px;
        text-align: center;
        border: 2px solid rgb(95, 154, 140);
        border-radius: 3px;
        font-weight: bold;
    }
</style>