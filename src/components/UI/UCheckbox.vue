<script setup>
    import {defineEmits, ref, watch} from 'vue';
    
    const emits = defineEmits(['updateMats'])

    const options = [
        {id: 'opt_one', label: 'Od producenta', value: 'od producenta'},
        {id: 'opt_two', label: 'Karton', value: 'karton'},
        {id: 'opt_three', label: 'Styropian', value: 'styropian'},
        {id: 'opt_four', label: 'Pianka', value: 'pianka'},
        {id: 'opt_five', label: 'Bąbel', value: 'bąbel'},
    ]

    const selectedOptions = ref([])

    watch(selectedOptions, () => {emits('updateMats', selectedOptions)})
</script>
<template>
    <div class="checkbox_wrap">
        <h3 class="checkbox_title">Choose used materials</h3>
        <div
            class="checkbox_list"
            v-for="option in options"
            :key="option.id"
            >
                <input
                    class="checkbox"
                    type="checkbox"
                    :id="option.id"
                    :value="option.value"
                    v-model="selectedOptions"
                    >
                <label
                    :for="option.id"
                    >
                    {{ option.label }}
                </label>
        </div>
    </div>
</template>

<style>
    .checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
        margin: 10px 0 0 20px;
    }
    .checkbox + label {
        position: relative;
        padding: 0 0 0 60px;
        cursor: pointer;
    }
    .checkbox + label:before {
        content: '';
        position: absolute;
        top: -4px;
        left: 0;
        width: 50px;
        height: 26px;
        border-radius: 13px;
        background: #CDD1DA;
        box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
        transition: .2s;
    }
    .checkbox + label:after {
        content: '';
        position: absolute;
        top: -2px;
        left: 2px;
        width: 22px;
        height: 22px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0 2px 5px rgba(0,0,0,.3);
        transition: .2s;
    }
    .checkbox:checked + label:before {
        background: rgb(95, 154, 140);
    }
    .checkbox:checked + label:after {
        left: 26px;
    }
    /* .checkbox:focus + label:before {
        box-shadow: inset 0 2px 3px rgba(0,0,0,.2), 0 0 0 3px rgb(95, 154, 140, .7);
    } */
    .checkbox_title{
        text-align: center;
        margin-bottom: 10px;
    }
    .checkbox_list{
        margin-bottom: 10px;
    }
</style>