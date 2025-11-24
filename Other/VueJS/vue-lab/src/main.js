// -------------------------------------------------------------
// main.js
// This file is the official entry gate of the whole Vue project.
// when the browser loads your app, this is one of the first files
// that gets executed.
//

//
//

//

//
// Without this file, your entire Vue project is just a bunch of
// disconnected components lying around. This is the glue that
// brings everything to life.
// -------------------------------------------------------------


//* 1. We import 'createApp' from Vue.
//    - Vue itself gives us the function needed to build a new app
//      instance. Think of it as creating the "engine" that powers
//      everything in your project.

import { createApp } from 'vue'

//* 2. We import App.vue.
//    - App.vue is your main component, the top-level one.
//      Every other component you create will eventually be connected
//      beneath this root component.
import App from './App.vue'

//* 3. We create the app instance.
//    - This is like telling Vue: "Alright, start the engine,
//      prepare the components, warm everything up."
const app = createApp(App)
// -----------------------------------------------------------------------
// What is createApp?
//
// 'createApp' is a function provided by Vue that builds a brand-new
// application instance. Think of it like this:
//
// If your Vue project were a city, 'createApp' is the act of founding
// the city itself. Before this, nothing exists—  no components, no logic,
// no lifecycle, nothing. Just empty land.
// 
// When you call createApp(App):
//    - You tell Vue which root component your entire project is based on.
//      In most cases, that's App.vue.
//    - Vue prepares all the internal systems: reactivity, component
//      rendering, lifecycle handling, event tracking... the whole package.
//
// After creating the app instance, you can:
//    - Add plugins
//    - Register global components
//    - Set global properties
//    - Configure the app however you want
//


//* 4. We mount the app to the HTML element with id="app".
//    - Mounting is basically connecting your Vue app to the actual
//      page the user sees.
//    - Whatever you coded inside App.vue will replace the content
//      inside <div id="app"></div> in index.html.
app.mount('#app')
