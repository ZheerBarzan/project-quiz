<template>
    <div class="container">
        <header>
        <h1>Quizes</h1>
        <input type="text" placeholder="Search Quizes...">
        </header>
        <div class="options-container">
        
        </div>
        
    </div>
</template>


<style scoped>

.container{
    max-width: 1000px;
    margin: 0 auto;
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
</style>