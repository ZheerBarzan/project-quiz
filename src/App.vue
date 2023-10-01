<script setup>
import q from "./data/quizes.json"
import {ref, watch} from "vue"
import Card from "./components/Card.vue"


const search = ref("")
const quizes = ref(q)

watch(search, ()=> {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))

})

</script>

<template>
    <div class="container">
        <header>
        <h1>Quizes</h1>
        <input v-model.trim="search" type="text" placeholder="Search Quizes...">
        </header>
        <div class="options-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
        
        
        </div>
        
    </div>
</template>


<style scoped>

.container{
    max-width: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 15% ;
}
header{
    margin-top: 30px;
    margin-bottom: 10px;
    display:flex;
    align-items: center;
}
header h1{
    font-weight: bold;
    margin-right: 30px;
}
header input{
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container{
width: fit-content;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}



</style>