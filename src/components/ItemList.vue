<script setup>
    import {defineProps, defineEmits, computed} from 'vue';
    import SingleItem from '@/components/SingleItem.vue';

    const props = defineProps({
        itemList: {
            type: Array,
            required: true,
        },
        selectedUser: {
            type: String
        },
    })
    const emits = defineEmits(['remove', 'edit', 'updateCheckbox'])
    
    const remove = item => emits('remove', item)
    const edit = (changedBody, item, changedMats) => {
        emits('edit', changedBody, item, changedMats)
    }
    const updateCheckbox = (changedMats, item) => emits('updateCheckbox', changedMats, item)

    const userTitle = computed(() => (props.selectedUser !== '') ? `${props.selectedUser}'s list` : 'Packsize list')

    components: {
        SingleItem
    }
</script>
<template>
    <div class="list">
        <h2
            class="title user_title"
            v-if="itemList.length"
            >
            {{ userTitle }}
        </h2>
        <h2
            class="title user_title_empty"
            v-else 
            >
            Packsize list is empty
        </h2>
        <ul class="list_wrap">
            <single-item
                v-for="(item, i) in itemList"
                :key="item.id"
                :item="item"
                @remove="remove"
                @edit="edit"
                @updateCheckbox="updateCheckbox"
                >
                {{ i + 1 }})
                <!-- <slot></slot> -->
            </single-item>
        </ul>
        <div
            class="total_items"
            v-if="itemList.length"
            >
            Total items: <span>{{ itemList.length }}</span>
        </div>
    </div>
    
</template>

<style>
    .list{
        margin-bottom: 20px;
    }
    .title{
        margin-bottom: 10px;
        /* text-align: center; */
    }
    .user_title{
        color: rgb(95, 154, 140);
    }
    .user_title_empty{
        font-size: 16px;
        color: rgb(230, 136, 88);
    }
    .total_items{
        font-size: 14px;
    }
    .total_items > span{
        font-size: 16px;
        font-weight: bold;
        color: rgb(95, 154, 140);
    }
</style>