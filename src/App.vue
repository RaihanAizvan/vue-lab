<!-- 
Hey folks, 
We are now in the App component.
It is very very useful component because it is the root component of our Vue application.
In every Vue app, there is always one root component.
What is root component?
The top most componennt in the componenet tree is called root componenet 
every other component is coming here and the going to render on the screen.

-->


<!-- 
SINGLE FILE COMPONENT (SFC) STRUCTURE
=====================================
A Single File Component encapsulates all component logic in one file with three main sections:

1. TEMPLATE SECTION
    - Contains HTML markup for the component's UI
    - All content here is rendered to the DOM
    - Can include other components as custom tags

2. SCRIPT SECTION
    - Houses all JavaScript/TypeScript logic
    - With `setup` attribute: uses Composition API (modern approach)
    - setup() automatically exposes reactive data and methods to the template

3. STYLE SECTION
    - Contains CSS styling scoped to this component only
    - Prevents style conflicts with other components
    - Scoped styles don't leak to child or parent components
-->

<script setup>

    // Import the Counter component to use it in this template
    // The Counter component demonstrates conditional rendering patterns
    import Counter from './components/demos/Counter.vue';

    // importing toggle componenet
    import Toggle from './components/demos/Toggle.vue';

    // importing computed property practice
    import Computed_Property from './components/demos/Computed_Property.vue';
</script>

<template>
  <!-- 
     Render the Counter component as a custom HTML element
     This will display the Counter component's template content here
  -->
  <Counter />

  <!-- Importing the Toggle Component -->
   <Toggle/>

   <!-- as expected we are rendering computed property here -->
   <Computed_Property/>
</template>
