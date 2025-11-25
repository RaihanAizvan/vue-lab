<!-- * computer property is a value that depends on other state -->
<!-- and it automatically updates when that state chanegs  -->


<script setup>

import { computed, ref } from "vue";
const firstName = ref('raihan');
const lastName = ref("muhammed");
const fullName = computed(() => firstName.value + ' ' + lastName.value);

</script>

<template>
    <h1> Full Name : {{ fullName }}</h1>
</template>

