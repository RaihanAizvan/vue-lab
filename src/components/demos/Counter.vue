<script setup>
    import { reactive,ref } from "vue";
    const counter = reactive({
        count : 0,
        message: '',
    })

    counter.count ++
    console.log(counter.count)

    function inc() {
        if(counter.count <10) counter.count++
        else {
            counter.message = 'POda poda'
        }
    }
    function dec() {
        counter.message = ''
        counter.count--
    }
    function re() {
        counter.message = ''
        counter.count = 0
    }
</script>

    <template>
        <h1>{{ counter.count }}</h1>
        <p>{{ counter.message }}</p>
        <p>{{ counter.count *2 }}</p>
        <button @click="inc">Increment</button>
        <button @click="dec">Decrement</button>
        <button @click="re">reset</button>
        

    </template>


<style>
    h1 {
        color: blue;
    }
</style>