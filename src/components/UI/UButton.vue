<script setup>

</script>
<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style>
    .btn{
        width: 50px;
        height: 50px;
        min-width: 50px;
        border: 2px solid rgb(95, 154, 140);
        border-radius: 3px;
        color: rgb(95, 154, 140);
        background: white;
        box-shadow: 0 0 10px rgba(95,154,140,.5);
    }
</style>