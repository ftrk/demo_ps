<script setup>
    import {defineProps, defineEmits} from 'vue';

    const props = defineProps({
        options: {
            type: Array,
            default: () => []
        },
        modelValue: {
            type: String
        }
    })
    const emits = defineEmits(['update:modelValue'])
    const changeOption = event => emits('update:modelValue', event.target.value)
</script>
<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeOption"
    >
        <option value="" disabled>Choose user</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            >
            {{ option.name }}
        </option>
    </select>
</template>

<style>
    .select{
        width: 40%;
        height: 30px;
        padding: 3px;
        border: 2px solid rgb(95, 154, 140);
        border-radius: 3px;
        /* font-size: 16px; */
        font-weight: bold;
        /* background-color: rgb(199, 228, 227); */
        background-color: white;
        color: rgb(95, 154, 140);
        margin-bottom: 10px;
    }
    select:focus {
        border-color: rgb(95, 154, 140);
        outline: none;
  }
</style>