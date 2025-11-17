<script setup>
    import { reactive } from "vue";

    const name = 'raihan'
    
    const button = reactive({
        text : 'hide',
        value : name,
    })
    function toggle() {
        button.text = button.text == 'show' ? 'hide' : 'show'
        button.value = button.value == name ? '' : name 
    }
</script>
<template>
    <br/>
    <button @click="toggle"> {{ button.text }} </button>
    <h1> {{ button.value }}</h1>
</template>