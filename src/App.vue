<script setup>
    import {ref, computed} from 'vue';
    import MySelect from "@/components/MySelect.vue"
    import ItemList from "@/components/ItemList.vue"
    import ItemForm from "@/components/ItemForm.vue"
    
    const userList = ref([
        {value: 'Dzianis', name: 'Dzianis'},
        {value: 'Karolina', name: 'Karolina'},
        {value: 'Viktor', name: 'Viktor'},
    ])
    const itemList = ref([])
    const selectedOption = ref('')
    const isDialogVisible = ref(false)

    const removeItem = item => itemList.value = itemList.value.filter(el => el.id !== item.id)
    const editItem = (changedBody, item, changedMats) => {
        // let temp = item.usedMats
        // console.log(temp)
        if(changedBody.value !== '') {
            // console.log(changedMats)
            item.usedMats = changedMats
            item.body = changedBody
            item.body = item.body.split('x')
                .sort( (a, b) => Number(b) - Number(a))
                .join('x') 
        }
        
    }

    const updateCheckbox = (changedMats, item) => {
        item.usedMats = changedMats
        // console.log(changedMats)
        // console.log(item)
    }

    const showDialog = () => isDialogVisible.value = true
    const addToList = item => {
        item.body.value = item.body.value.split('x')
                .sort( (a, b) => Number(b) - Number(a))
                .join('x')
        itemList.value.push(item)
        isDialogVisible.value = false
    }

    const showUserList = computed(() => [...itemList.value].filter(el => el.title === selectedOption.value))
    const isDisabled = computed(() => selectedOption.value ? false : true)
   
    // const userTitle = computed(() => (selectedOption.value !== '') ? `${selectedOption.value}'s list` : 'Packsize list')

    components: { MySelect, ItemList, ItemForm }
</script>
<template>
    <div class="wrapper">
        <h1 class="h1_title">Packsize</h1>
        <div
            class="h1_desc"
            >
            (Total: <span>{{ itemList.length }}</span>)
        </div>
        <my-select
            :options="userList"
            v-model="selectedOption"
            >
        </my-select>

        <item-list
            :itemList="showUserList"
            :selectedUser="selectedOption"
            @remove="removeItem"
            @edit="editItem"
            @updateCheckbox="updateCheckbox"
            >
        </item-list>

        <u-button
            class="btn_add"
            @click="showDialog"
            :disabled="isDisabled"
            :class="isDisabled ? 'disabled' : ''"
            >
        </u-button>

        <u-dialog
            v-model:show="isDialogVisible"
            >
            <item-form
                :selectedUser="selectedOption"
                @createItem="addToList"
                >
            </item-form>
        </u-dialog>
    </div>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Gill Sans', sans-serif;
        font-size: 16px;
        font-weight: normal;
        /* background: rgb(115, 226, 226); */
    }
    .wrapper{
        margin: 20px;
    }
    .h1_title{
        width: 100%;
        text-align: center;
        color: rgb(95, 154, 140);
    }
    .h1_desc{
        text-align: center;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .h1_desc > span{
        color: rgb(95, 154, 140);
    }
    .btn_add{
        object-fit: cover;
        background: url(../src/assets/img/svg/add.svg) no-repeat center !important;
    }
    .disabled{
        opacity: .5;
    }
    .enabled{
        opacity: 1;
    }
</style>
