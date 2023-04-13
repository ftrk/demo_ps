<script setup>
    import {ref, defineEmits, defineProps, watch} from 'vue';

    const emits = defineEmits(['updateInput', 'updateCheckbox'])
    const {body, item} = defineProps({
        body: String,
        item: Object,
    })

    const calcInput = ref(body || ''),
        calcElems = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'x', ''];

    const action = n => {
        if(n === ''){
            calcInput.value = calcInput.value.slice(0, -1)
            return
        }
        calcInput.value += n
    };

    const changedMats = ref([])
    const updateMats = arr =>  {
        changedMats.value = arr.value
        emits('updateCheckbox', changedMats)
    }

    watch(calcInput, () => {emits('updateInput', calcInput, changedMats)})
    // watch(changedMats, () => {emits('updateCheckbox', changedMats)})
</script>

<template>
    <div class="my_calc">
        <u-input
            v-model="calcInput"
            >
        </u-input>
        <div class="actions_wrap">
            <div
                class="actions"
                v-for="n in calcElems"
                :key="n"
                >
                    <u-button
                        class="calcElem"
                        :class="n === '' ? 'btn_back' : ''"
                        @click="action(n)"
                        >
                            {{ n }}
                    </u-button>
            </div>
        </div>
        <div class="test">
            <u-checkbox
                @updateMats="updateMats">
            </u-checkbox>
        </div>
    </div>
</template>
<style scoped>
    .my_calc{
        display: flex;
        flex-direction: column;
    }
      .actions_wrap{
        min-width: 250px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        padding-top: 10px;
        margin-bottom: 10px;
    }
    .calcElem{
        min-width: 70px;
        height: 70px;
        font-size: 20px;
        font-weight: bold;
    }
    .btn_back{
        background: url("~@/assets/img/svg/back.svg") no-repeat center;
        /* color: red; */
    }
</style>