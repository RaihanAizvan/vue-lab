<!-- * computer property is a value that depends on other state -->
<!-- and it automatically updates when that state chanegs  -->

<!-- 
When to use?

Whenever we want:

– derived values
– formatted values
– something that depends on other reactive data
– something we want cached 

-->

<!-- 
Why not just use a normal function?

Because computed() remembers the result
and only recalculates when needed.

Functions run every time you use them.
Computed runs only when its dependencies change. 

-->

<script setup>

    // Here we are importing hte computed Fn from vue
    import { computed, ref } from "vue";

    // Base reactive states
    const firstName = ref('raihan');
    const lastName = ref("muhammed");

    
    // Computed property that derives a new value from existing state
    // Automatically updates when firstName or lastName changes
    const fullName = computed(() => firstName.value + ' ' + lastName.value);
    // that means whenever firstname chanegs, full name also changes 

    // creting a non cumputed just to explain
    const non_computed_full_name = firstName.value + ' ' + lastName.value

    // i know for you you may feel that we can us non_computed_full_name both works sameright? 
    // but no. both are not the same. 
    // suppose if we chang value after 2 seconds. 
    setTimeout(() => {
        firstName.value = 'KING';
    }, 2000);

    // and look at the ui boom!
    // only full name updates right? Intresting istnt

    
</script>

<template>
    <!-- Displaying the computed fullName -->
    <!-- fullName automatically updates when firstName or lastName changes -->
    <h1> Full Name : {{ fullName }}</h1>

    <!-- this will not update when we simulate the  firstname change -->
    <p>Full name(non-c): {{ non_computed_full_name }}</p>
</template>


<!-- lets see what are the real world use cases for this.  -->

<!-- 
*    1. Formating data for ui
        - Formatting dates → “2025-01-02” to “2 Jan 2025”
        - Capitalizing names
        - Converting price to “₹ 1,200”
        - Showing “Hello, Raihan” based on user object

*    2. Derived values
        cartTotal = sum(cartItems)
        filteredUsers = users.filter(...)
        doubleCount = count * 2
        isLoggedIn = Boolean(token)

*    3. conditional ui, (sometimes we need flags from the actual data right)
        isAdult = age >= 18
        isFormValid = name && email && password
        isEmpty = items.length === 0
        hasOffer = product.price < product.originalPrice
-->

<!--! Computed = If your value depends on another value and you want it to always stay up-to-date that’s computed -->