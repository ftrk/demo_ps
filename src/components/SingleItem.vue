<script setup>
    import {defineProps, defineEmits, ref, computed} from 'vue';
    import ItemEditor from '@/components/ItemEditor.vue';

    const props = defineProps({
        item: {
            type: Object,
            required: true
        },
    })
    const emits = defineEmits(['remove', 'edit', 'updateCheckbox'])

    const isEditorVisible = ref(false)
    const isInfoVisible = ref(false)

    const showEditor = () => isEditorVisible.value = true
    const hideEditor = bool => isEditorVisible.value = bool

    const toggleMatsInfo = () => isInfoVisible.value ? isInfoVisible.value = false : isInfoVisible.value = true


    const remove = () => emits('remove', props.item)
    const edit = (changedBody, item, changedMats) => emits('edit', changedBody, item, changedMats)
    const updateCheckbox = (changedMats, item) => emits('updateCheckbox', changedMats, item)

    const usedMaterials = computed(() => {
        let arr = props.item.usedMats
        return arr.reduce((acum, item, index) => {
            if(index !== arr.length - 1) return acum + item + ', '
            return acum + item
        }, '')
    })
    
    components: {
        ItemEditor
    }
</script>
<template>
    <li class="item">
        <div>
            <u-button
                class="btn_delete"
                @click="remove"
                >
            </u-button>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>
            {{ item.body}}
        </div>
        <div>
            <u-button
                class="btn_edit"
                @click="showEditor"
                >
            </u-button>
        </div>
        <div>
            <u-button
                class="btn_info"
                @click="toggleMatsInfo"
                >
            </u-button>
        </div>
        <div
            class="mats_info"
            v-if="isInfoVisible"
            >
            {{ usedMaterials }}
        </div>
        <u-dialog
            v-model:show="isEditorVisible"
            >
            <item-editor
                :item="props.item"
                @update:show="hideEditor"
                @edit="edit"
                @updateCheckbox="updateCheckbox"
                >
            </item-editor>
        </u-dialog>
    </li>
</template>

<style>
    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 400px;
        font-weight: bold;
        padding-bottom: 10px;
    }
    .item > div{
        margin-right: 10px;
    }
    .mats_info{
        font-size: 10px;
    }
    .btn_delete{
        background: url(../assets/img/svg/delete2.svg) no-repeat center !important;
    }
    .btn_edit{
        background: url(../assets/img/svg/edit2.svg) no-repeat center !important;
    }
    .btn_info{
        background: url(../assets/img/svg/info2.svg) no-repeat center !important;
    }
</style>